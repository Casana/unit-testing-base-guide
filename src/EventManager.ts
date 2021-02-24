import { BaseBridgeEventPayload, BaseBridgeEvents } from "../bridge/type";
import { LoggerUtilsComponent } from "../logger-utils";
import { normalizeId } from "../string-utils/string-utils";
import {
  EventBusPublish,
  EventBusSubscribe,
  EVENT_BUS_PUBLISH_EVENT_NAME,
  EVENT_BUS_SUBSCRIBE_EVENT_NAME,
  EVENT_BUS_UNSUBSCRIBE_EVENT_NAME,
  IEventManager,
} from "./types";
/**
 * Utility class for managing events.
 * You can publish an event if it is one way or subscribe to a response
 */
export class EventManager implements IEventManager {
  private baseEvent: BaseBridgeEventPayload;
  private readonly EVENT_RESPONSE_TIMEOUT = 10000;
  private static _instance: IEventManager;
  constructor(appName?: string, appVersion?: string) {
    this.baseEvent = {
      appID: normalizeId(appName || ""),
      version: appVersion || "",
    };
  }
  static initInstance(appName: string, appVersion: string): void {
    this._instance = new EventManager(appName, appVersion);
  }
  static getInstance(): IEventManager {
    if (!this._instance) {
      this.initInstance("", "");
    }
    return this._instance;
  }
  /**
   * Generate concrete response topic for additional scope
   * @param eventName event name
   * @param additionalScope  additional scope
   */
  private generateConcreteResponseTopic(
    eventName: string,
    additionalScope?: string
  ): string {
    return `${eventName}_RESPONSE.${this.baseEvent.appID}${
      additionalScope ? `.${additionalScope}` : ""
    }`;
  }
  public publishWithResponse<T>(
    eventName: string,
    payload: unknown,
    additionalScope?: string
  ): Promise<T> {
    const responseTopic = this.generateConcreteResponseTopic(
      eventName,
      additionalScope
    );
    return new Promise((resolve, reject) => {
      const eventTimeout = window.setTimeout(() => {
        const msg = `App ${eventName} Event Response Timeout after ${this.EVENT_RESPONSE_TIMEOUT} ms`;
        LoggerUtilsComponent.getInstance().warn(msg);
        window.dispatchEvent(
          new CustomEvent(EVENT_BUS_UNSUBSCRIBE_EVENT_NAME, {
            detail: responseTopic,
          })
        );
        reject(msg);
      }, this.EVENT_RESPONSE_TIMEOUT);
      const eventResponse: EventBusSubscribe = {
        topic: responseTopic,
        callback: (_msg, data) => {
          window.dispatchEvent(
            new CustomEvent(EVENT_BUS_UNSUBSCRIBE_EVENT_NAME, {
              detail: responseTopic,
            })
          );
          clearTimeout(eventTimeout);
          resolve(data as T);
        },
      };
      window.dispatchEvent(
        new CustomEvent(EVENT_BUS_SUBSCRIBE_EVENT_NAME, {
          detail: eventResponse,
        })
      );
      this.publish(eventName, payload, additionalScope);
    });
  }
  public publish<K extends keyof BaseBridgeEvents>(
    eventName: K,
    payload: BaseBridgeEvents[K],
    additionalScope?: string
  ): void;
  public publish(
    eventName: string,
    payload: unknown,
    additionalScope?: string
  ): void;
  public publish(
    eventName: string,
    payload: unknown,
    additionalScope?: string
  ): void {
    const eventRequest: EventBusPublish = {
      topic: `${eventName}.${this.baseEvent.appID}${
        additionalScope ? `.${additionalScope}` : ""
      }`,
      detail: {},
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data = (payload as any).data || {};
    eventRequest.detail =
      typeof payload === "object"
        ? { ...payload, data: { ...this.baseEvent, ...data } }
        : { ...this.baseEvent, data: payload };
    window.dispatchEvent(
      new CustomEvent(EVENT_BUS_PUBLISH_EVENT_NAME, { detail: eventRequest })
    );
  }
}

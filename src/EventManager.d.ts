import { BaseBridgeEvents } from "../../bridge";
/**
 * interface for EventBus
 */
export interface EventBus {
  subscribe(data: EventBusSubscribe): void;
  unSubscribe(event: EventBusEvent): void;
  publish(data: EventBusPublish): void;
  enableDebugMode(flag: boolean): void;
}
/**
 * The event bus name for subscribe action
 */
export const EVENT_BUS_SUBSCRIBE_EVENT_NAME = "proteoEventBusSubscribe";
/**
 * The event bus name for publish action
 */
export const EVENT_BUS_PUBLISH_EVENT_NAME = "proteoEventBusPublish";
/**
 * The event bus name for unsubscribe a topic
 */
export const EVENT_BUS_UNSUBSCRIBE_EVENT_NAME = "proteoEventBusUnsubscribe";
/**
 * Callback definition fot the subscribe event. The callback receives the msg (topic message, for example SIGN.MY_ID) and the data published
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type BsEventBusCallback = (msg: string, data: any) => void;
export interface EventBusEvent {
  topic: string;
  scope?: string;
}
/**
 * Event for Subscribe action
 */
export interface EventBusSubscribe extends EventBusEvent {
  callback: BsEventBusCallback;
}
/**
 * Event for Publish action
 */
export interface EventBusPublish extends EventBusEvent {
  detail: unknown;
}
/**
 * EVENT MANAGER
 */
/**
 * FIXME: AGS => Method overloading not working. I've tried to simulate addEventListener from lib.dom.d.ts
 */
export interface IEventManager {
  /**
   * Publish an event to other microfrontend or the bridge and subscribes to its response.
   * It returns a promise resolved once the response from the other has come
   * @param eventName The event name to be published
   * @param payload the information to be passed
   * @param additionalScope additional scope for identifying unique requests
   * @Returns a promise with the event response from target. The promise will be rejected after a timeout
   */
  publishWithResponse<T, K extends keyof BaseBridgeEvents>(
    eventName: K,
    payload?: BaseBridgeEvents[K],
    additionalScope?: string
  ): Promise<T>;
  publishWithResponse<T>(
    eventName: string,
    payload?: unknown,
    additionalScope?: string
  ): Promise<T>;
  /**
   * Publish an event to other microfrontend or the bridge.
   * @param eventName The event name to be published
   * @param payload the information to be passed
   * @param additionalScope additional scope for identifying unique requests
   */
  publish<K extends keyof BaseBridgeEvents>(
    eventName: K,
    payload: BaseBridgeEvents[K],
    additionalScope?: string
  ): void;
  publish(eventName: string, payload: unknown, additionalScope?: string): void;
}

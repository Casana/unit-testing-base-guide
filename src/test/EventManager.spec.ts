import {​ LoggerUtilsComponent }​ from '../../../utils';
import {​ EventManager }​ from '../event-manager';
import {​
  BsEventBusCallback,
  EventBusPublish,
  EventBusSubscribe,
  EVENT_BUS_PUBLISH_EVENT_NAME,
  EVENT_BUS_SUBSCRIBE_EVENT_NAME,
  EVENT_BUS_UNSUBSCRIBE_EVENT_NAME
}​ from '../types';
jest.useFakeTimers();
describe('EventManager test', () => {​
  LoggerUtilsComponent.prototype.warn = jest.fn();
  it('when initiated, the instance should be created', () => {​
    EventManager.initInstance('TestApp', '1.0.0-MOCK');
    expect(EventManager.getInstance()).toBeInstanceOf(EventManager);
  }​);
  it('when getting instance and instance is not created, the instance should be created with empty information', () => {​
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (EventManager as any)._instance = null;
    expect(EventManager.getInstance()).toBeInstanceOf(EventManager);
  }​);
  it('When an event is published without response with a non object payload, it must trigger a custom event to the event bus', (done) => {​
    expect.assertions(2);
    EventManager.initInstance('TestApp', '1.0.0-MOCK');
    const handler = (ev: Event) => {​
      const detail = (ev as CustomEvent<EventBusPublish>).detail;
      expect(detail.topic).toBe('DEMO.TESTAPP.HELLO');
      expect(detail.detail).toEqual({​
        appID: 'TESTAPP',
        version: '1.0.0-MOCK',
        data: 'demoPayload'
      }​);
      window.removeEventListener(EVENT_BUS_PUBLISH_EVENT_NAME, handler);
      done();
    }​;
    window.addEventListener(EVENT_BUS_PUBLISH_EVENT_NAME, handler);
    EventManager.getInstance().publish('DEMO', 'demoPayload', 'HELLO');
  }​);
  it('When an event is published without response with an object payload with data attribute, it must trigger a custom event to the event bus', (done) => {​
    expect.assertions(2);
    EventManager.initInstance('TestApp', '1.0.0-MOCK');
    const handler = (ev: Event) => {​
      const detail = (ev as CustomEvent<EventBusPublish>).detail;
      expect(detail.topic).toBe('DEMO.TESTAPP');
      expect(detail.detail).toEqual({​
        method: 'testOp',
        data: {​
          appID: 'TESTAPP',
          version: '1.0.0-MOCK',
          info: 'infoTest'
        }​
      }​);
      window.removeEventListener(EVENT_BUS_PUBLISH_EVENT_NAME, handler);
      done();
    }​;
    window.addEventListener(EVENT_BUS_PUBLISH_EVENT_NAME, handler);
    EventManager.getInstance().publish('DEMO', {​
      method: 'testOp',
      data: {​
        info: 'infoTest'
      }​
    }​);
  }​);
  it('When an event is published without response with an object payload without data attribute, it must trigger a custom event to the event bus', (done) => {​
    expect.assertions(2);
    EventManager.initInstance('TestApp', '1.0.0-MOCK');
    const publishHandler = (ev: Event) => {​
      const detail = (ev as CustomEvent<EventBusPublish>).detail;
      expect(detail.topic).toBe('DEMO.TESTAPP');
      expect(detail.detail).toEqual({​
        method: 'testOp',
        data: {​
          appID: 'TESTAPP',
          version: '1.0.0-MOCK'
        }​
      }​);
      window.removeEventListener(EVENT_BUS_PUBLISH_EVENT_NAME, publishHandler);
      done();
    }​;
    window.addEventListener(EVENT_BUS_PUBLISH_EVENT_NAME, publishHandler);
    EventManager.getInstance().publish('DEMO', {​
      method: 'testOp'
    }​);
  }​);
  it('When an event is published with a response, it must resolve a promise with the response and the event must be unsubscribed', (done) => {​
    expect.assertions(1);
    let callback: BsEventBusCallback;
    const publishHandler = () => {​
      callback('test', 'dataDemo');
    }​;
    const subscribeHandler = (ev: Event) => {​
      const detail = (ev as CustomEvent<EventBusSubscribe>).detail;
      callback = detail.callback;
    }​;
    const unsubscribeHandler = () => {​
      window.removeEventListener(EVENT_BUS_PUBLISH_EVENT_NAME, publishHandler);
      window.removeEventListener(EVENT_BUS_SUBSCRIBE_EVENT_NAME, subscribeHandler);
      window.removeEventListener(EVENT_BUS_UNSUBSCRIBE_EVENT_NAME, unsubscribeHandler);
      done();
    }​;
    window.addEventListener(EVENT_BUS_PUBLISH_EVENT_NAME, publishHandler);
    window.addEventListener(EVENT_BUS_SUBSCRIBE_EVENT_NAME, subscribeHandler);
    window.addEventListener(EVENT_BUS_UNSUBSCRIBE_EVENT_NAME, unsubscribeHandler);
    EventManager.initInstance('TestApp', '1.0.0-MOCK');
    EventManager.getInstance()
      .publishWithResponse('DEMO', 'payload')
      .then((data) => {​
        expect(data).toEqual('dataDemo');
      }​);
  }​);
  it('When an event is published with a response and there is no response, it must reject the promise with the error', () => {​
    expect.assertions(1);
    EventManager.initInstance('TestApp', '1.0.0-MOCK');
    const promiseInstance = EventManager.getInstance().publishWithResponse('DEMO', 'payload');
    jest.runAllTimers();
    return expect(promiseInstance).rejects.toContain('Timeout');
  }​);
}​);
    
    
  
  


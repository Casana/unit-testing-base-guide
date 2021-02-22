import { r as registerInstance, e as createEvent, h } from './index-a9a6c493.js';

const TestingEventEmitter = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.somethingHappened = createEvent(this, "somethingHappened", 7);
    this.handleClick = () => {
      this.somethingHappened.emit({ message: "clicked!" });
    };
  }
  render() {
    return h("button", { onClick: this.handleClick }, "Click Me!");
  }
};

export { TestingEventEmitter as testing_event_emitter };

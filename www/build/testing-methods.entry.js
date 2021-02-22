import { r as registerInstance, h } from './index-a9a6c493.js';

const TestingMethods = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.counter = 0;
    this.incrementCount = this.incrementCount.bind(this);
  }
  async incrementCount() {
    return this.counter++;
  }
  render() {
    return h("div", null, this.counter);
  }
};

export { TestingMethods as testing_methods };

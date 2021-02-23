import { r as registerInstance, h } from './index-76fc3f62.js';

const TestingProps = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", null, "Hello, my name is ", this.first, " ", this.last));
  }
};

export { TestingProps as testing_props };

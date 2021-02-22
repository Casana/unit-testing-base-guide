import { r as registerInstance, h } from './index-a9a6c493.js';

const TestingProps = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", null, "Hello, my name is ", this.first, " ", this.last));
  }
};

export { TestingProps as testing_props };

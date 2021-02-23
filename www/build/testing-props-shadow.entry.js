import { r as registerInstance, h } from './index-76fc3f62.js';

const TestingPropsShadow = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", null, "Hello, my name is ", this.first, " ", this.last));
  }
};

export { TestingPropsShadow as testing_props_shadow };

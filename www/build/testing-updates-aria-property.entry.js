import { r as registerInstance, h } from './index-76fc3f62.js';

const TestingUpdatesAriaProperty = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.isHidden = true;
    this.handleToggle = () => {
      this.isHidden = !this.isHidden;
    };
  }
  render() {
    return (h("div", null, h("a", { "data-test": "toggle", href: "#", onClick: this.handleToggle, title: "Toggle nenu" }, this.isHidden ? 'Show' : 'Hide'), h("div", { id: "content", "aria-hidden": this.isHidden ? 'true' : 'false' }, "content")));
  }
};

export { TestingUpdatesAriaProperty as testing_updates_aria_property };

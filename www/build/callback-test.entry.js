import { r as registerInstance, h } from './index-76fc3f62.js';

const CallbackTest = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.clickHandler = () => {
      if (typeof this.clickProp === "function") {
        console.log("do something interesting before invoking the callback", this.clickProp);
        this.clickProp();
      }
    };
    this.clickHandler = this.clickHandler.bind(this);
  }
  render() {
    return (h("button", { class: "button", onClick: this.clickHandler }, "Button"));
  }
};

export { CallbackTest as callback_test };

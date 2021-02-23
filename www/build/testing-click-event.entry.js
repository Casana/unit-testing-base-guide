import { r as registerInstance, h } from './index-76fc3f62.js';

const TestingClickEvent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.days = [
      { label: 'Su', selected: false },
      { label: 'M', selected: false },
      { label: 'Tu', selected: false },
      { label: 'W', selected: false },
      { label: 'Th', selected: false },
      { label: 'F', selected: false },
      { label: 'Sa', selected: false }
    ];
    this.handleDayClicked = (day) => {
      day.selected = !day.selected;
      this.days = [...this.days, day];
    };
  }
  render() {
    return (h("div", null, h("label", null, "What days would you like notifications?"), h("div", null, this.days.map(day => h("div", { class: `day ${day.selected ? 'day-selected' : ''}`, "data-test": "day", onClick: () => this.handleDayClicked(day) }, day.label)))));
  }
};

export { TestingClickEvent as testing_click_event };

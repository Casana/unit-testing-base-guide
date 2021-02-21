"use strict";

export default class Cow {
  constructor(name) {
    this.name = name || "Vaca gallega";
  }

  greets(target) {
    if (!target) throw new Error("no tengo a quien saludar!");
    return this.name + " saluda a " + target + "!";
  }
}

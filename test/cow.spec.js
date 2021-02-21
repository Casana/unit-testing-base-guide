import chai from "chai";
import Cow from "../src/cow.js";

const { expect } = chai;

describe("Cow", function () {
  describe("constructor", function () {
    it("should have a default name", function () {
      var cow = new Cow();
      expect(cow.name).to.equal("Vaca gallega");
    });

    it("should set cow's name if provided", function () {
      var cow = new Cow("Martina");
      expect(cow.name).to.equal("Martina");
    });
  });

  describe("#greets", function () {
    it("should throw if no target is passed in", function () {
      expect(function () {
        new Cow().greets();
      }).to.throw(Error);
    });

    it("should greet passed target", function () {
      var greetings = new Cow("Martina").greets("Carlos");
      expect(greetings).to.equal("Martina saluda a Carlos!");
    });
  });
});

import chai from "chai";
import numberComma from "../src/number-and-commas.js";

const { expect } = chai;

describe("number-comma", () => {
  it("`1234567` should transform to `1,234,567`", (done) => {
    expect(numberComma(1234567)).to.equal("1,234,567");
    done();
  });

  it("`123` should stay the same", (done) => {
    const num = 123;
    expect(numberComma(num)).to.equal(String(num));
    done();
  });

  it("`Username` should never transform", (done) => {
    const fakeNum = 'Username';
    expect(numberComma(fakeNum)).to.equal(String(fakeNum));
    done();
  });
});

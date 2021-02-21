import test from "ava";
import getMiddle from "../src/middle.js";

test("middle - valid values", (t) => {
  var value = getMiddle("test");
  t.is(value, "es");
  value = getMiddle("testing");
  t.is(value, "t");
  value = getMiddle("middle");
  t.is(value, "dd");
  value = getMiddle("A");
  t.is(value, "A");
  t.pass();
});

test("middle - invalid values", (t) => {
  var value = getMiddle("");
  t.is(value, undefined);
  value = getMiddle();
  t.is(value, undefined);
  value = getMiddle(null);
  t.is(value, undefined);
  t.pass();
});

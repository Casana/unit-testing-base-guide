import test from "ava";
import wellFormed from "../src/well-formed-string.js";

test("well formed string - valid values", (t) => {
  var value = wellFormed("{}");
  t.true(value);
  value = wellFormed("({})");
  t.true(value);
  value = wellFormed("[[()]]");
  t.true(value);
  value = wellFormed(")");
  t.false(value);
  value = wellFormed("({");
  t.false(value);
  value = wellFormed("[[()]");
  t.false(value);
  t.pass();
});

test("well formed string - invalid value", (t) => {
  var value = wellFormed("");
  t.false(value);
  value = wellFormed(undefined);
  t.false(value);
  t.pass();
});

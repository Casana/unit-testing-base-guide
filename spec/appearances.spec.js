import test from "ava";
import appearances from "../src/appearances.js";

test("appearances - valid values", (t) => {
  var value = appearances(1);
  t.is(value, 1);
  value = appearances(13);
  t.is(value, 6);
  value = appearances(60);
  t.is(value, 16);
  value = appearances(1000);
  t.is(value, 301);
  t.pass();
});

test("appearances - invalid values", (t) => {
  var value = appearances(0);
  t.is(value, undefined);
  value = appearances(undefined);
  t.is(value, undefined);
  value = appearances(9999);
  t.is(value, undefined);
  t.pass();
});

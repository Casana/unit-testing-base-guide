import test from "ava";
import assert from "assert";
import mostOfen from "../src/most-often.js";

test("most often - valid non-empty values", (t) => {
  var value = mostOfen(1, [1]);
  t.is(value, 1);
  value = mostOfen(2, [2, 2, 0]);
  t.is(value, 2);
  value = mostOfen(7, [7, 0, 4, 4, 4, 1]);
  t.is(value, 4);
  value = mostOfen(3, [1, 2, 3, 3, 1, 3, 1]);
  assert(value === 1 || value === 3);
  t.pass();
});

test("most often - empty values", (t) => {
  var value = mostOfen(5, []);
  t.is(value, undefined);
  value = mostOfen(5, undefined);
  t.is(value, undefined);
  t.pass();
});

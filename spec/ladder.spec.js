import test from "ava";
import getCombinations from "../src/ladder.js";

test("ladder - valid values", (t) => {
  var value = getCombinations(1);
  t.is(value, 1);
  value = getCombinations(2);
  t.not(value, 1);
  t.is(value, 2);
  value = getCombinations(3);
  t.is(value, 3);
  value = getCombinations(4);
  t.is(value, 5);
  value = getCombinations(5);
  t.is(value, 8);
  t.pass();
});

test("ladder - invalid values", (t) => {
  var value = getCombinations();
  t.is(value, 0);
  value = getCombinations(0);
  t.is(value, 0);
  value = getCombinations(-2);
  t.is(value, 0);
  value = getCombinations(null);
  t.is(value, 0);
  t.pass();
  // t.fail() we can check that test fails althought all assertions are OK.
});

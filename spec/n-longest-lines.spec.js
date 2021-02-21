import test from "ava";
import nLongestLines from "../src/n-longest-lines.js";

test("n longest lines - valid values", (t) => {
  var value = nLongestLines(1, ["hello world"]);
  t.deepEqual(value, ["hello world"]);
  value = nLongestLines(2, ["Hello world", "", "Quick Fox", "A"]);
  t.deepEqual(value, ["Hello world", "Quick Fox"]);
  value = nLongestLines(2, [
    "Hello world",
    "",
    "VSCode",
    "Quick Fox",
    "A",
    "San Francisco",
  ]);
  t.deepEqual(value, ["San Francisco", "Hello world"]);
  t.pass();
});

test("n longest lines - invalid values", (t) => {
  var value = nLongestLines(2, ["hello world"]);
  t.deepEqual(value, ["hello world"]);
  value = nLongestLines(undefined, ["hello world"]);
  t.is(value, undefined);
  value = nLongestLines(1, []);
  t.is(value, undefined);
  value = nLongestLines(1, undefined);
  t.is(value, undefined);
  value = nLongestLines(undefined, undefined);
  t.is(value, undefined);
  t.pass();
});

import test from "ava";
import multiples from "../src/multiples.js";

test("multiples - valid non-empty values", (t) => {
  var value = multiples(6, 9, 4);
  t.is(value, "1 2 3 4");
  value = multiples(1, 1, 3);
  t.is(value, "FB FB FB");
  value = multiples(1, 2, 7);
  t.is(value, "F FB F FB F FB F");
  value = multiples(3, 2, 6);
  t.is(value, "1 B F B 5 FB");
  value = multiples(3, 5, 10);
  t.is(value, "1 2 F 4 B F 7 8 F B");
  t.pass();
});

test("multiples - invalid values", (t) => {
  var value = multiples(0, 0, 10);
  t.is(value, undefined);
  value = multiples(undefined, 5, 10);
  t.is(value, undefined);
  value = multiples(3, 5, undefined);
  t.is(value, undefined);
  value = multiples(3, undefined, undefined);
  t.is(value, undefined);
  value = multiples(undefined, undefined, undefined);
  t.is(value, undefined);
  t.pass();
});

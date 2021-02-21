import test from "ava";
import shortestSequence from "../src/shortest-sequence.js";

test("shortest sequence - valid integer value", (t) => {
  var value = shortestSequence(1);
  t.deepEqual(value, [1]);
  value = shortestSequence(2);
  t.deepEqual(value, [1, 2]);
  value = shortestSequence(6);
  t.deepEqual(value, [1, 2, 3, 6]);
  value = shortestSequence(18);
  t.deepEqual(value, [1, 2, 4, 8, 9, 18]);
  value = shortestSequence(33);
  t.deepEqual(value, [1, 2, 4, 8, 16, 32, 33]);
  t.pass();
});

test("shortest sequence - invalid value", (t) => {
  var value = shortestSequence(0);
  t.is(value, undefined);
  value = shortestSequence(-5);
  t.is(value, undefined);
  value = shortestSequence(undefined);
  t.is(value, undefined);
  t.pass();
});

import { dateFormatter } from "./index.js";

var today = new Date();
var formattedToday = new Intl.DateTimeFormat("en-US").format(today);

if (formattedToday === dateFormatter(today)) {
  console.log(`Test passed. Today´s date is: ${formattedToday}`);
} else {
  console.error(
    `Test failed: ${dateFormatter(today)} does NOT equal ${formattedToday}`
  );
}

import { greet } from "./greeting.js";

const testData = [
  ["Mark", "Howdy Mark!"],
  ["Dalia", "Howdy Boss!"],
  ["Thomas", "Howdy Coach!"],
  ["Felix", "Howdy Coach!"],
  ["Stefan", "Howdy Coach!"],
];

test.each(testData)("test greet to be correct", (Name, expectedValue) => {
  const greetingString = greet(Name);
  expect(greetingString).toBe(expectedValue);
});

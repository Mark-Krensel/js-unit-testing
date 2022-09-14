import { checkTeenagerStatus } from "./teenager.js";

const testData = [
  [12, true],
  [11, false],
  [20, true],
  [21, false],
  [31231, false],
];
/*
test("returns correct teenager status", () => {
  const teenagerStatus = checkTeenagerStatus(15);
  expect(teenagerStatus).toBe(true);
});*/

test.each(testData)("returns correct teenager status", (age, expectedValue) => {
  const teenagerStatus = checkTeenagerStatus(age);
  expect(teenagerStatus).toBe(expectedValue);
});

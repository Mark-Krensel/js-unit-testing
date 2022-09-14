import { cubicVolume } from "./calculations.js";

const testData = [
  [1, 2, 3, 6],
  [2, 5, 8, 80],
  [123, 54, 21, 139482],
  [0, 3, 6, 0],
  [3, 5, 23, 345],
  [-1, 2, 3, 0],
  [1, -2, 3, 0],
  [1, 2, -3, 0],
];

test.each(testData)(
  "test cubic volume to be correct",
  (length, width, height, expectedValue) => {
    const cubicVolumeIs = cubicVolume(length, width, height);
    expect(cubicVolumeIs).toBe(expectedValue);
  }
);

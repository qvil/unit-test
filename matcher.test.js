const sum = require('./sum');

test("Adding natural number is not zero", () => {
  const COUNT = 10;

  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});

test("Should return null", () => {
  let data = null;
  expect(data).toBeNull();
});

test("Should return undefined", () => {
  let data = undefined;
  expect(data).toBeUndefined();
});

test("Adds 1 + 1 = 2 is true", () => {
  let data = sum(1, 1) === 2;
  expect(data).toBeTruthy();
});

test("Adds 1 + 1 = 2 is false", () => {
  let data = sum(1, 1) === 1;
  expect(data).toBeFalsy();
});
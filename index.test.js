const a = require('.');
// const b = require('./index');

test("return a", () => {
    // console.log(a(1))
    expect(a(1).toBe(1));
});
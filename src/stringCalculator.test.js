const add = require("./stringCalculator")

test("return 0 for an emty error", () => {
    expect(add("")).toBe(0)
})

test("returns the number when single number in the string", () => {
    expect(add("1")).toBe(1)
})
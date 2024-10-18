const add = require("./stringCalculator")

test("return 0 for an emty error", () => {
    expect(add("")).toBe(0)
})

test("returns the number when single number in the string", () => {
    expect(add("1")).toBe(1)
})

test("return the sum of multiple numbers seperated by commas", () => {
    expect(add("1,5")).toBe(6)
})

test("handles new line delimiters between numbers", () => {
    expect(add("1\n2,3")).toBe(6)
})

test("supports custom delimiters", () => {
    expect(add("//;\n1;2")).toBe(3)
})

test("Throw exception for negative numbers", () => {
    expect(() => add("1,-2,3")).toThrow("negative numbers not allowed -2")
})
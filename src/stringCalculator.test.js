const add = require("./stringCalculator")

test("return 0 for an emty error", () => {
    expect(add("")).toBe(0)
})
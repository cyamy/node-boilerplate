import { add, mul, hello } from "./index";

describe("calc", () => {
    it("add", () => {
        expect(add(1)(1)).eq(2);
    });

    it("mul", () => {
        expect(mul(2)(2)).eq(4);
    });

    it("hello", () => {
        const actual = hello();

        assert.deepEqual(actual, {
            foo: "hello",
            bar: "world",
        });
    });
});

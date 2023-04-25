
import { describe, test, expect } from "vitest";
import { sum, subtract, multiply, divide } from ".";





describe("Math Functions", () => {

    test("Should add numbers", () => {
        expect(sum(1,2)).toBe(3);
    })

    test("Should subtract numbers", () => {
        expect(subtract(6,2)).toBe(4);
    })

    test("Should multiply numbers", () => {
        expect(multiply(10,3)).toBe(30);
    })

    test("Should divide numbers", () => {
        expect(divide(100,20)).toBe(5);
    })

})
import { test, expect, describe } from 'vitest';
import { add, subtract, multiply, divide } from './math.helper';


describe('Math Helper Functions', () => {

    test('should add two numbers correctly', () => {
        const a = 2;
        const b = 3;

        const result = add(a, b);
        expect(result).toBe(a + b);
    });

    test('should subtract two numbers correctly', () => {
        const a = 5;
        const b = 3;

        const result = subtract(a, b);
        expect(result).toBe(a - b);
    });

    test('should multiply two numbers correctly', () => {
        const a = 2;
        const b = 3;

        const result = multiply(a, b);
        expect(result).toBe(a * b);
    });

    test('should divide two numbers correctly', () => {
        const a = 6;
        const b = 2;

        const result = divide(a, b);
        expect(result).toBe(a / b);
    });

    test('should throw an error when dividing by zero', () => {
        const a = 6;
        const b = 0;

        expect(() => divide(a, b)).toThrow("Division by zero is not allowed.");
    });

});
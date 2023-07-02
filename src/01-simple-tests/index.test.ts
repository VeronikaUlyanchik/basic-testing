// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    // Write your test here
    expect(simpleCalculator({a:1, b:2, action: Action.Add})).toBe(3);
  });

  test('should subtract two numbers', () => {
    // Write your test here
    expect(simpleCalculator({a:3, b:2, action: Action.Subtract})).toBe(1);
  });

  test('should multiply two numbers', () => {
    // Write your test here
    expect(simpleCalculator({a:3, b:10, action: Action.Multiply})).toBe(30);
  });

  test('should divide two numbers', () => {
    // Write your test here
    expect(simpleCalculator({a:27, b:3, action: Action.Divide})).toBe(9);
  });

  test('should exponentiate two numbers', () => {
    // Write your test here
    expect(simpleCalculator({a:2, b:3, action: Action.Exponentiate})).toBe(8);
  });

  test('should return null for invalid action', () => {
    // Write your test here
    expect(simpleCalculator({a:27, b:3, action: 'delete'})).toBeNull();
    expect(simpleCalculator({a:27, b:3, action: 'create'})).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    // Write your test here
    expect(simpleCalculator({a:'27', b:'4', action: Action.Divide})).toBeNull();
  });
});

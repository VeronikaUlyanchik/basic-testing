// Uncomment the code below and write your tests
import { generateLinkedList } from './index';

describe('generateLinkedList', () => {
  // Check match by expect(...).toStrictEqual(...)
  test('should generate linked list from values 1', () => {
    // Write your test here
    const generatedLinkedList = generateLinkedList([1, 2, 3]);

    const expectedList = {
      next: { next: { next: { next: null, value: null }, value: 3 }, value: 2 },
      value: 1,
    };

    expect(generatedLinkedList).toStrictEqual(expectedList);
  });

  // Check match by comparison with snapshot
  test('should generate linked list from values 2', () => {
    // Write your test here
    const generatedLinkedList = generateLinkedList([3, 2, 1]);

    expect(generatedLinkedList).toMatchSnapshot();
  });
});

import { describe, expect, it } from 'vitest';
import { isEmpty } from './string';

describe('isEmpty', () => {
  it.each([
    ['', true],
    [' ', true],
    ['  ', true],
    ['　', true],
    ['　　', true],
    ['	', true],
    ['aaa', false],
    [' aaa', false],
    [' aaa ', false],
    ['a a a', false]
  ])('isEmpty(%s) should be %s', (input, expected) => {
    expect(isEmpty(input)).toBe(expected)
  });
});

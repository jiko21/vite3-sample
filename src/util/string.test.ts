import { expect, it, test } from "vitest";
import { isEmpty } from "./string";

test('isEmpty', () => {
  it.each([
    ['', true],
    [' ', true],
    ['　', true],
    ['  ', true],
    ['  ', true],
    ['　　', true],
    ['    ', true],
    ['a ', false],
    ['a　', false],
    ['a  ', false],
    [' a', false],
    ['　a', false],
    ['  a', false],
    ['a a', false],
    ['a　a', false],
    ['a  a', false],
    ['aaa', false],
  ])('isEmpty(%s) should be %s', (input, expected) => {
    expect(isEmpty(input)).toBe(expected);
  })
});

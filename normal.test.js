import { expect, test } from "vitest";
import { _fizzBuzz, _lessThan, _mod, _mul, _sub, _toNumber } from "./normal";

const toChurchNumber = (number) => (s) => (z) => {
  let result = z;
  for (let i = 0; i < number; i++) {
    result = s(result);
  }
  return result;
};

const toBool = (bool) => bool(() => true)(() => false);

test.each`
  a    | b    | expected
  ${3} | ${2} | ${6}
  ${3} | ${0} | ${0}
`("$a * $b = $expected", ({ a, b, expected }) => {
  const churchA = toChurchNumber(a);
  const churchB = toChurchNumber(b);
  const churchActual = _mul(churchA)(churchB);
  expect(_toNumber(churchActual)).toBe(expected);
});

test.each`
  a    | b    | expected
  ${3} | ${1} | ${2}
  ${3} | ${2} | ${1}
  ${3} | ${3} | ${0}
  ${3} | ${4} | ${0}
`("$a - $b = $expected", ({ a, b, expected }) => {
  const churchA = toChurchNumber(a);
  const churchB = toChurchNumber(b);
  const churchActual = _sub(churchA)(churchB);
  expect(_toNumber(churchActual)).toBe(expected);
});

test.each`
  a    | b    | expected
  ${2} | ${1} | ${false}
  ${2} | ${2} | ${false}
  ${2} | ${3} | ${true}
`("$a < $b = $expected", ({ a, b, expected }) => {
  const churchA = toChurchNumber(a);
  const churchB = toChurchNumber(b);
  const churchActual = _lessThan(churchA)(churchB);
  expect(toBool(churchActual)).toBe(expected);
});

test.each`
  a    | b    | expected
  ${1} | ${3} | ${1}
  ${2} | ${3} | ${2}
  ${3} | ${3} | ${0}
  ${4} | ${3} | ${1}
  ${5} | ${3} | ${2}
  ${6} | ${3} | ${0}
`("$a mod $b = $expected", ({ a, b, expected }) => {
  const churchA = toChurchNumber(a);
  const churchB = toChurchNumber(b);
  const churchActual = _mod(churchA)(churchB);
  expect(_toNumber(churchActual)).toBe(expected);
});

test.each`
  a     | expected
  ${1}  | ${1}
  ${2}  | ${2}
  ${3}  | ${"Fizz"}
  ${4}  | ${4}
  ${5}  | ${"Buzz"}
  ${6}  | ${"Fizz"}
  ${7}  | ${7}
  ${8}  | ${8}
  ${9}  | ${"Fizz"}
  ${10} | ${"Buzz"}
  ${11} | ${11}
  ${12} | ${"Fizz"}
  ${13} | ${13}
  ${14} | ${14}
  ${15} | ${"Fizz Buzz"}
  ${16} | ${16}
  ${17} | ${17}
  ${18} | ${"Fizz"}
  ${19} | ${19}
  ${20} | ${"Buzz"}
`("fizzBuzz $a = $expected", ({ a, expected }) => {
  const churchA = toChurchNumber(a);
  const actual = _fizzBuzz(churchA);
  expect(actual).toBe(expected);
});

import { expect, test } from "vitest";
import {
	_and,
	_churchToNumber,
	_false,
	_fizzBuzz,
	_isMultOf3,
	_isMultOf5,
	_isZeroMod3,
	_true,
	_zeroMod3,
} from "./modulo";

const toChurchNumber = (number) => (s) => (z) => {
	let result = z;
	for (let i = 0; i < number; i++) {
		result = s(result);
	}
	return result;
};

const toChurchBool = (bool) => (bool ? _true : _false);

const toBool = (bool) => bool(true)(false);

test.each`
	a        | b        | expected
	${false} | ${false} | ${false}
	${false} | ${true}  | ${false}
	${true}  | ${false} | ${false}
	${true}  | ${true}  | ${true}
`("$a and $b: $expected", ({ a, b, expected }) => {
	const churchA = toChurchBool(a);
	const churchB = toChurchBool(b);
	const churchActual = _and(churchA)(churchB);
	expect(toBool(churchActual)).toBe(expected);
});

test.each`
	a    | expected
	${0} | ${true}
	${1} | ${false}
	${2} | ${false}
	${3} | ${true}
	${4} | ${false}
	${5} | ${false}
	${6} | ${true}
`("$a mod 3 === 0: $expected", ({ a, expected }) => {
	const churchA = toChurchNumber(a);
	const churchActual = _isMultOf3(churchA);
	expect(toBool(churchActual)).toBe(expected);
});

test.each`
	a     | expected
	${0}  | ${true}
	${1}  | ${false}
	${2}  | ${false}
	${3}  | ${false}
	${4}  | ${false}
	${5}  | ${true}
	${6}  | ${false}
	${7}  | ${false}
	${8}  | ${false}
	${9}  | ${false}
	${10} | ${true}
`("$a mod 5 === 0: $expected", ({ a, expected }) => {
	const churchA = toChurchNumber(a);
	const churchActual = _isMultOf5(churchA);
	expect(toBool(churchActual)).toBe(expected);
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

// see: https://www.sciencedirect.com/science/article/pii/S0020019023000510

// basic boolean
export const _true = (dtval) => () => dtval();
export const _false = () => (dfval) => dfval();

export const _and = (b1) => (b2) => b1(() => b2)(() => _false);

// modulo arithmetic
export const _zeroMod3 = (a0) => (a1) => (a2) => a0;
export const _succMod3 = (n) => (a0) => (a1) => (a2) => n(a1)(a2)(a0);
export const _isZeroMod3 = (n) => n(_true)(_false)(_false);

export const _zeroMod5 = (a0) => (a1) => (a2) => (a3) => (a4) => a0;
export const _succMod5 = (n) => (a0) => (a1) => (a2) => (a3) => (a4) =>
	n(a1)(a2)(a3)(a4)(a0);
export const _isZeroMod5 = (n) => n(_true)(_false)(_false)(_false)(_false);

// church arithmetic
export const _churchToNumber = (n) => n((x) => x + 1)(0);

export const _churchToMod3 = (n) => n(_succMod3)(_zeroMod3);
export const _isMultOf3 = (n) => _isZeroMod3(_churchToMod3(n));

export const _churchToMod5 = (n) => n(_succMod5)(_zeroMod5);
export const _isMultOf5 = (n) => n(_isZeroMod5(_churchToMod5(n)));

// main
export const _fizzBuzz = (n) =>
	(
		(isMultOf3) => (isMultOf5) =>
			_and(isMultOf3)(isMultOf5)(
				// n % 15 === 0
				() => "Fizz Buzz",
			)(
				// n % 15 !== 0
				() =>
					isMultOf3(
						// n % 3 === 0
						() => "Fizz",
					)(
						// n % 3 !== 0
						() =>
							isMultOf5(
								// n % 5 === 0
								() => "Buzz",
							)(
								// n % 5 !== 0
								() => _churchToNumber(n),
							),
					),
			)
	)(_isMultOf3(n))(_isMultOf5(n));

export const _one = (s) => (z) => s(z);
export const _four = (s) => (z) => s(s(s(s(z))));
export const _succ = (n) => (s) => (z) => s(n(s)(z));
export const _exp = (n1) => (n2) => n2(n1);
export const _seq = (proc1) => (proc2) => proc2;
export const _printFizzBuzzList = (printNum) =>
	printNum((n) => _seq(console.log(_fizzBuzz(n)))(_succ(n)))(_one);

// print fizz buzz list to 256 = 4 ^ 4
_printFizzBuzzList(_exp(_four)(_four));

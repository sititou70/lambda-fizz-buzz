export const _toNumber = (n) => n((x) => x + 1)(0);

export const _zero = (s) => (z) => z;
export const _three = (s) => (z) => s(s(s(z)));
export const _five = (s) => (z) => s(s(s(s(s(z)))));

export const _succ = (n) => (s) => (z) => s(n(s)(z));

export const _cons = (car) => (cdr) => (selector) => selector(car)(cdr);
export const _car = (pair) => pair((car) => () => car);
export const _cdr = (pair) => pair(() => (cdr) => cdr);

export const _pred = (n) =>
	_cdr(n((pair) => _cons(_succ(_car(pair)))(_car(pair)))(_cons(_zero)(_zero)));
export const _sub = (n1) => (n2) => n2(_pred)(n1);

export const _true = (dtval) => () => dtval();
export const _false = () => (dfval) => dfval();

export const _and = (b1) => (b2) => b1(() => b2)(() => _false);

export const _isZero = (n) => n(() => _false)(_true);
export const _lessThan = (n1) => (n2) => _isZero(_sub(_succ(n1))(n2));

export const _fix = (g) => ((h) => g((n) => h(h)(n)))((h) => g((n) => h(h)(n)));
export const _mod = _fix(
	(mod) => (n1) => (n2) =>
		_lessThan(n1)(n2)(() => n1)(() => mod(_sub(n1)(n2))(n2)),
);

export const _fizzBuzz = (n) =>
	(
		(isMultOf3) => (isMultOf5) =>
			_and(isMultOf3)(isMultOf5)(
				// n % (3 * 5) === 0
				() => "Fizz Buzz",
			)(
				// n % (3 * 5) !== 0
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
								() => _toNumber(n),
							),
					),
			)
	)(_isZero(_mod(n)(_three)))(_isZero(_mod(n)(_five)));

export const _one = (s) => (z) => s(z);
export const _four = (s) => (z) => s(s(s(s(z))));
export const _exp = (n1) => (n2) => n2(n1);
export const _seq = (proc1) => (proc2) => proc2;
export const _printFizzBuzzList = (printNum) =>
	printNum((n) => _seq(console.log(_fizzBuzz(n)))(_succ(n)))(_one);

// print fizz buzz list to 256 = 4 ^ 4
_printFizzBuzzList(_exp(_four)(_four));

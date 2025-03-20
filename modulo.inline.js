((printNum) =>
	printNum((n) =>
		(
			(proc1) => (proc2) =>
				proc2
		)(
			console.log(
				((n) =>
					(
						(isMultOf3) => (isMultOf5) =>
							(
								(b1) => (b2) =>
									b1(b2)(() => (fval) => fval)
							)(isMultOf3)(isMultOf5)("Fizz Buzz")(
								isMultOf3("Fizz")(
									isMultOf5("Buzz")(((n) => n((x) => x + 1)(0))(n)),
								),
							)
					)(
						((n) =>
							((n) =>
								n((tval) => () => tval)(() => (fval) => fval)(
									() => (fval) => fval,
								))(
								((n) =>
									n((n) => (a0) => (a1) => (a2) => n(a1)(a2)(a0))(
										(a0) => (a1) => (a2) => a0,
									))(n),
							))(n),
					)(
						((n) =>
							((n) =>
								n((tval) => () => tval)(() => (fval) => fval)(
									() => (fval) => fval,
								)(() => (fval) => fval)(() => (fval) => fval))(
								((n) =>
									n(
										(n) => (a0) => (a1) => (a2) => (a3) => (a4) =>
											n(a1)(a2)(a3)(a4)(a0),
									)((a0) => (a1) => (a2) => (a3) => (a4) => a0))(n),
							))(n),
					))(n),
			),
		)(
			(
				(n) => (s) => (z) =>
					s(n(s)(z))
			)(n),
		),
	)((s) => (z) => s(z)))(
	(
		(n1) => (n2) =>
			n2(n1)
	)((s) => (z) => s(s(s(s(z)))))((s) => (z) => s(s(s(s(z))))),
);

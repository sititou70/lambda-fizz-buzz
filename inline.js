((printNum) =>
	((g) => ((h) => g((n) => h(h)(n)))((h) => g((n) => h(h)(n))))(
		(loop) => (cnt) =>
			(
				(n1) => (n2) =>
					((n) => n(() => () => (dfval) => dfval())((dtval) => () => dtval()))(
						(
							(n1) => (n2) =>
								n2((n) =>
									((pair) => pair(() => (cdr) => cdr))(
										n((pair) =>
											(
												(car) => (cdr) => (selector) =>
													selector(car)(cdr)
											)(
												(
													(n) => (s) => (z) =>
														s(n(s)(z))
												)(((pair) => pair((car) => () => car))(pair)),
											)(((pair) => pair((car) => () => car))(pair)),
										)(
											(
												(car) => (cdr) => (selector) =>
													selector(car)(cdr)
											)((s) => (z) => z)((s) => (z) => z),
										),
									),
								)(n1)
						)(
							(
								(n) => (s) => (z) =>
									s(n(s)(z))
							)(n1),
						)(n2),
					)
			)(cnt)(
				(
					(n) => (s) => (z) =>
						s(n(s)(z))
				)(printNum),
			)(() =>
				(
					(proc1) => (proc2) =>
						proc2
				)(
					console.log(
						((n) =>
							((n) =>
								n(() => () => (dfval) => dfval())((dtval) => () => dtval()))(
								((g) => ((h) => g((n) => h(h)(n)))((h) => g((n) => h(h)(n))))(
									(mod) => (n1) => (n2) =>
										(
											(n1) => (n2) =>
												((n) =>
													n(() => () => (dfval) => dfval())(
														(dtval) => () => dtval(),
													))(
													(
														(n1) => (n2) =>
															n2((n) =>
																((pair) => pair(() => (cdr) => cdr))(
																	n((pair) =>
																		(
																			(car) => (cdr) => (selector) =>
																				selector(car)(cdr)
																		)(
																			(
																				(n) => (s) => (z) =>
																					s(n(s)(z))
																			)(
																				((pair) => pair((car) => () => car))(
																					pair,
																				),
																			),
																		)(
																			((pair) => pair((car) => () => car))(
																				pair,
																			),
																		),
																	)(
																		(
																			(car) => (cdr) => (selector) =>
																				selector(car)(cdr)
																		)((s) => (z) => z)((s) => (z) => z),
																	),
																),
															)(n1)
													)(
														(
															(n) => (s) => (z) =>
																s(n(s)(z))
														)(n1),
													)(n2),
												)
										)(n1)(n2)(() => n1)(() =>
											mod(
												(
													(n1) => (n2) =>
														n2((n) =>
															((pair) => pair(() => (cdr) => cdr))(
																n((pair) =>
																	(
																		(car) => (cdr) => (selector) =>
																			selector(car)(cdr)
																	)(
																		(
																			(n) => (s) => (z) =>
																				s(n(s)(z))
																		)(
																			((pair) => pair((car) => () => car))(
																				pair,
																			),
																		),
																	)(((pair) => pair((car) => () => car))(pair)),
																)(
																	(
																		(car) => (cdr) => (selector) =>
																			selector(car)(cdr)
																	)((s) => (z) => z)((s) => (z) => z),
																),
															),
														)(n1)
												)(n1)(n2),
											)(n2),
										),
								)(n)(
									(
										(n1) => (n2) =>
											n1((n) => n2((n) => (s) => (z) => s(n(s)(z)))(n))(
												(s) => (z) => z,
											)
									)((s) => (z) => s(s(s(z))))((s) => (z) => s(s(s(s(s(z)))))),
								),
							)(() => "Fizz Buzz")(() =>
								((n) =>
									n(() => () => (dfval) => dfval())((dtval) => () => dtval()))(
									((g) => ((h) => g((n) => h(h)(n)))((h) => g((n) => h(h)(n))))(
										(mod) => (n1) => (n2) =>
											(
												(n1) => (n2) =>
													((n) =>
														n(() => () => (dfval) => dfval())(
															(dtval) => () => dtval(),
														))(
														(
															(n1) => (n2) =>
																n2((n) =>
																	((pair) => pair(() => (cdr) => cdr))(
																		n((pair) =>
																			(
																				(car) => (cdr) => (selector) =>
																					selector(car)(cdr)
																			)(
																				(
																					(n) => (s) => (z) =>
																						s(n(s)(z))
																				)(
																					((pair) => pair((car) => () => car))(
																						pair,
																					),
																				),
																			)(
																				((pair) => pair((car) => () => car))(
																					pair,
																				),
																			),
																		)(
																			(
																				(car) => (cdr) => (selector) =>
																					selector(car)(cdr)
																			)((s) => (z) => z)((s) => (z) => z),
																		),
																	),
																)(n1)
														)(
															(
																(n) => (s) => (z) =>
																	s(n(s)(z))
															)(n1),
														)(n2),
													)
											)(n1)(n2)(() => n1)(() =>
												mod(
													(
														(n1) => (n2) =>
															n2((n) =>
																((pair) => pair(() => (cdr) => cdr))(
																	n((pair) =>
																		(
																			(car) => (cdr) => (selector) =>
																				selector(car)(cdr)
																		)(
																			(
																				(n) => (s) => (z) =>
																					s(n(s)(z))
																			)(
																				((pair) => pair((car) => () => car))(
																					pair,
																				),
																			),
																		)(
																			((pair) => pair((car) => () => car))(
																				pair,
																			),
																		),
																	)(
																		(
																			(car) => (cdr) => (selector) =>
																				selector(car)(cdr)
																		)((s) => (z) => z)((s) => (z) => z),
																	),
																),
															)(n1)
													)(n1)(n2),
												)(n2),
											),
									)(n)((s) => (z) => s(s(s(z)))),
								)(() => "Fizz")(() =>
									((n) =>
										n(() => () => (dfval) => dfval())(
											(dtval) => () => dtval(),
										))(
										((g) =>
											((h) => g((n) => h(h)(n)))((h) => g((n) => h(h)(n))))(
											(mod) => (n1) => (n2) =>
												(
													(n1) => (n2) =>
														((n) =>
															n(() => () => (dfval) => dfval())(
																(dtval) => () => dtval(),
															))(
															(
																(n1) => (n2) =>
																	n2((n) =>
																		((pair) => pair(() => (cdr) => cdr))(
																			n((pair) =>
																				(
																					(car) => (cdr) => (selector) =>
																						selector(car)(cdr)
																				)(
																					(
																						(n) => (s) => (z) =>
																							s(n(s)(z))
																					)(
																						((pair) =>
																							pair((car) => () => car))(pair),
																					),
																				)(
																					((pair) => pair((car) => () => car))(
																						pair,
																					),
																				),
																			)(
																				(
																					(car) => (cdr) => (selector) =>
																						selector(car)(cdr)
																				)((s) => (z) => z)((s) => (z) => z),
																			),
																		),
																	)(n1)
															)(
																(
																	(n) => (s) => (z) =>
																		s(n(s)(z))
																)(n1),
															)(n2),
														)
												)(n1)(n2)(() => n1)(() =>
													mod(
														(
															(n1) => (n2) =>
																n2((n) =>
																	((pair) => pair(() => (cdr) => cdr))(
																		n((pair) =>
																			(
																				(car) => (cdr) => (selector) =>
																					selector(car)(cdr)
																			)(
																				(
																					(n) => (s) => (z) =>
																						s(n(s)(z))
																				)(
																					((pair) => pair((car) => () => car))(
																						pair,
																					),
																				),
																			)(
																				((pair) => pair((car) => () => car))(
																					pair,
																				),
																			),
																		)(
																			(
																				(car) => (cdr) => (selector) =>
																					selector(car)(cdr)
																			)((s) => (z) => z)((s) => (z) => z),
																		),
																	),
																)(n1)
														)(n1)(n2),
													)(n2),
												),
										)(n)((s) => (z) => s(s(s(s(s(z)))))),
									)(() => "Buzz")(() => ((n) => n((x) => x + 1)(0))(n)),
								),
							))(cnt),
					),
				)(
					loop(
						(
							(n) => (s) => (z) =>
								s(n(s)(z))
						)(cnt),
					),
				),
			)(() => "done"),
	)((s) => (z) => s(z)))(
	(
		(n1) => (n2) =>
			n1((n) => n2((n) => (s) => (z) => s(n(s)(z)))(n))((s) => (z) => z)
	)(
		(
			(n1) => (n2) =>
				n1((n) => n2((n) => (s) => (z) => s(n(s)(z)))(n))((s) => (z) => z)
		)((s) => (z) => s(s(s(s(s(z))))))((s) => (z) => s(s(s(s(s(z)))))),
	)((s) => (z) => s(s(s(s(s(z)))))),
);

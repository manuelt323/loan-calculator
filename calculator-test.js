it('should calculate the monthly rate correctly', function () {
  const values = { amount: 10000, rate: 1.5, years: 5 };
  expect(calculateMonthlyPayment(values)).toEqual('173.10');
  // ...
});

it('should return a result with 2 decimal places', function () {
  const values = { amount: 10000, rate: 7.9, years: 10 };
  expect(calculateMonthlyPayment(values)).toEqual('120.80');
  // ..
});

/// etc

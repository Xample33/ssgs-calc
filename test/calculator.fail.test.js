const calc = require('../src/calculator');

test('somma 3 + 5 deve dare 7 (test intenzionalmente sbagliato)', () => {
  const risultato = calc.add(3, 5);
  expect(risultato).toBe(7); // questo fallirà perché 3 + 5 = 8
});


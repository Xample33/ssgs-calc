const calc = require('../src/calculator');

test('somma 2 + 2 deve dare 4', () => {
    const risultato = calc.add(2, 2);
    expect(risultato).toBe(4);
});
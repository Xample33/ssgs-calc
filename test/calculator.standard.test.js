const calc = require('../src/calculator');

test('add: somma corretta', () => {
    expect(calc.add(2, 3)).toBe(5);
});

test('subtract: differenza corretta', () => {
    expect(calc.subtract(10, 4)).toBe(6);
});

test('multiply: prodotto corretto', () => {
    expect(calc.multiply(3, 7)).toBe(21);
});

test('divide: divisione corretta', () => {
    expect(calc.divide(10, 2)).toBe(5);
});

test('divide: divisione per zero genera errore', () => {
    expect(() => calc.divide(5, 0)).toThrow("Divisione per zero non consentita.");
});

test('power: potenza corretta', () => {
    expect(calc.power(2, 3)).toBe(8);
});
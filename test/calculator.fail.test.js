const calc = require('../src/calculator');

test.skip('add: somma sbagliata appositamente', () => {
    expect(calc.add(2, 2)).toBe(5);
});

test.skip('subtract: sottrazione sbagliata appositamente', () => {
    expect(calc.subtract(10, 5)).toBe(0);
});

test.skip('multiply: moltiplicazione sbagliata appositamente', () => {
    expect(calc.multiply(3, 3)).toBe(10);
});

test.skip('power: potenza sbagliata appositamente', () => {
    expect(calc.power(2, 4)).toBe(10);
});

test('divide: deve lanciare errore se divido per zero', () => {
    expect(() => calc.divide(10, 0)).toThrow("Divisione per zero non consentita.");
});

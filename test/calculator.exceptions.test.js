const calc = require('../src/calculator');

test('divide: deve lanciare errore se divido per zero', () => {
    expect(() => calc.divide(10, 0)).toThrow("Divisione per zero non consentita.");
});

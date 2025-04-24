const readline = require('readline');
const calc = require('./src/calculator');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const operations = {
  1: { name: "Addizione", func: calc.add },
  2: { name: "Sottrazione", func: calc.subtract },
  3: { name: "Moltiplicazione", func: calc.multiply },
  4: { name: "Divisione", func: calc.divide },
  5: { name: "Potenza", func: calc.power },
};

const greetings = [
  "Arrivederci!",
  "Alla prossima!",
  "Buona giornata!",
  "È stato un piacere calcolare con te!",
  "Ciao ciao, calcolatore pazzo!",
  "Operazione completata. A presto!"
];

function getRandomGreeting() {
  const i = Math.floor(Math.random() * greetings.length);
  return greetings[i];
}

console.log("Benvenuto nel calcolatore CLI!");
console.log("Operazioni disponibili:");
Object.entries(operations).forEach(([key, op]) => {
  console.log(`${key}. ${op.name}`);
});

rl.question("Seleziona l'operazione (numero): ", (choice) => {
  const operation = operations[choice];
  if (!operation) {
    console.log("Scelta non valida. Uscita...");
    rl.close();
    return;
  }

  rl.question("Inserisci il primo numero: ", (a) => {
    rl.question("Inserisci il secondo numero: ", (b) => {
      const num1 = Number(a);
      const num2 = Number(b);
      if (isNaN(num1) || isNaN(num2)) {
        console.log("Errore: uno o entrambi i parametri non sono numeri.");
        rl.close();
        return;
      }

      try {
        const result = operation.func(num1, num2);
        console.log(`Risultato: ${result}`);
      } catch (err) {
        console.error("Errore:", err.message);
      }

      console.log(getRandomGreeting());
      rl.close();
    });
  });
});

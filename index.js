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

function askQuestion(question) {
  return new Promise(resolve => rl.question(question, resolve));
}

async function mainLoop() {
  console.log("Benvenuto nel calcolatore CLI!");

  let continueLoop = true;
  while (continueLoop) {
    console.log("\nOperazioni disponibili:");
    Object.entries(operations).forEach(([key, op]) => {
      console.log(`${key}. ${op.name}`);
    });

    const choice = await askQuestion("Seleziona l'operazione (numero, oppure 'q' per uscire): ");

    if (choice.toLowerCase() === 'q') {
      continueLoop = false;
      break;
    }

    const operation = operations[choice];
    if (!operation) {
      console.log("Scelta non valida. Riprova.");
      continue;
    }

    let num1, num2;
    try {
      num1 = parseFloat(await askQuestion("Inserisci il primo numero: "));
      if (isNaN(num1)) throw new Error("Il primo parametro non è un numero valido.");

      num2 = parseFloat(await askQuestion("Inserisci il secondo numero: "));
      if (isNaN(num2)) throw new Error("Il secondo parametro non è un numero valido.");
    } catch (err) {
      console.error("Errore:", err.message);
      continue;
    }

    try {
      const result = operation.func(num1, num2);
      console.log(`Risultato: ${result}`);
    } catch (err) {
      console.error("Errore durante il calcolo:", err.message);
    }

    const another = await askQuestion("\nVuoi eseguire un'altra operazione? (s/n): ");
    if (another.toLowerCase() !== 's') {
      continueLoop = false;
    }
  }

  console.log("\n" + getRandomGreeting());
  rl.close();
}

mainLoop();

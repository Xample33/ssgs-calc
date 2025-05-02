
# 🧮 Progetto Calcolatrice CLI – SSGS

Questo progetto consiste nello sviluppo di una **calcolatrice da linea di comando (CLI)** usando **Node.js**.  
Include un sistema di **test automatizzati con Jest** e una **pipeline CI** configurata con **GitHub Actions** che verifica ogni modifica al codice, includendo la **code coverage**.
Sono state inoltre implementate tutte le **funzionalità facoltative** previste, tra cui:

- Estensione delle operazioni disponibili includendo la potenza.
- Gestione avanzata degli errori: in caso di input non valido, l’utente riceve un messaggio chiaro e può riprovare senza che il programma termini.
- Esecuzione continua: l’utente può effettuare più operazioni nella stessa sessione, senza dover riavviare il programma.
- Chiusura personalizzata: al termine dell’esecuzione viene mostrato un saluto casuale per rendere l'esperienza più simpatica e coinvolgente.


---

## ▶️ Istruzioni d'Uso

1. Clonare il repository  
   ```
   git clone https://github.com/Xample33/ssgs-calc.git
   ```

2. Entrare nella cartella del progetto  
   ```
   cd ssgs-calc
   ```

3. Installare le dipendenze  
   ```
   npm ci
   ```

4. Eseguire la calcolatrice da terminale  
   ```
   npm start
   ```

5. Eseguire i test  
   - Tutti i test:  
     ```
     npm run test
     ```
   - Solo i test che devono passare:  
     ```
     npm run test:success
     ```
   - Solo i test che devono fallire:  
     ```
     npm run test:fail
     ```

---

## 🧪 Testing & Coverage

I test sono scritti con **Jest** e suddivisi in due file:

- ✅ `calculator.success.test.js` – Test validi che **devono passare**
- ❌ `calculator.fail.test.js` – Test su casi limite o errori che **devono fallire** (alcuni sono skippati per far comunque passare il test generale)

La **code coverage** è attiva tramite Jest (`--coverage`) ed è visibile attraverso https://xample33.github.io/ssgs-calc/

---

## ⚙️ Ambiente di Sviluppo

- **Node.js** v22.x  
- **npm** v10.x  

---

## 🔁 CI con GitHub Actions

Ogni push su GitHub attiva automaticamente:

- L'installazione delle dipendenze
- L'esecuzione dei test con Jest
- Il calcolo e caricamento della code coverage

Il file della pipeline si trova in:

```
.github/workflows/test-and-deploy.yml
```

---

## 🗂️ Struttura del Progetto

```
ssgs-calc/
│
├── .github/
│   └── workflows/
│       └── test-and-deploy.yml     # Pipeline GitHub Actions per test e deploy
│
├── coverage/                       # Report di code coverage generato da Jest
├── node_modules/                   # Dipendenze installate da npm
│
├── src/
│   └── calculator.js               # Modulo con le funzioni matematiche
│
├── test/
│   ├── calculator.fail.test.js     # Test che devono fallire (es. input non validi)
│   └── calculator.success.test.js  # Test che devono passare (es. risultati corretti)
│
├── .gitignore                      # File per escludere directory/file dal versionamento
├── index.js                        # Entry point CLI della calcolatrice
├── LICENSE                         # Licenza del progetto
├── package.json                    # Configurazione del progetto e degli script npm
├── package-lock.json               # File di lock delle dipendenze
└── README.md                       # Documentazione del progetto
```

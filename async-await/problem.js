/* TODO: Übungsaufgabe (aus README.md)

Gegeben:
Eine Funktion delay(ms), die ein Promise nach ms Millisekunden erfüllt.

Aufgaben:

1. Schreibe eine async-Funktion run(), die:
   - "Start" loggt
   - await delay(1000) ausführt
   - danach "Ende" loggt
2. Baue einen Fehlerfall ein:
   - delay(ms) soll rejecten, wenn ms < 0
   - fange den Fehler mit try / catch ab
3. Ergänze ein finally, das immer "done" loggt

Erwartung:

- Bei ms = 1000: Start → (1s Pause) → Ende → done
- Bei ms < 0: Fehler → done
*/

// Optional: starter implementation hint (commented out)
// function delay(ms) {
//   return new Promise((resolve, reject) => {
//     if (ms < 0) return reject(new Error('ms must be >= 0'));
//     setTimeout(resolve, ms);
//   });
// }

// export { /* implement run and delay here */ };

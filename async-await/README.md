## Was bedeutet „der Code wird in Microtasks fortgesetzt“? (einfach erklärt)

JavaScript führt Code **nicht gleichzeitig**, sondern **Schritt für Schritt** aus.

Dabei gibt es vereinfacht **zwei Warteschlangen**:

1. **Call Stack** – das, was gerade **jetzt sofort** ausgeführt wird

## Was bedeutet „der Code wird in Microtasks fortgesetzt“? (einfach erklärt)

JavaScript führt Code **nicht gleichzeitig**, sondern **Schritt für Schritt** aus.

Dabei gibt es vereinfacht **zwei Warteschlangen**:

1. **Call Stack** – das, was gerade **jetzt sofort** ausgeführt wird
2. **Warteschlangen** – Dinge, die **später** drankommen

Für den Einstieg reicht dieses Modell:

## Die Idee hinter async / await (ohne Fachbegriffe)

Wenn JavaScript auf `await` trifft:

- JavaScript **stoppt nicht das ganze Programm**
- sondern sagt:
  > „Diese Funktion kann hier erstmal warten.
  > Mach mit anderem Code weiter."

Beispiel:

```js
async function run() {
  console.log('A');
  await promise;
  console.log('B');
}
```

Ablauf:

1. "A" wird sofort ausgeführt
2. bei `await promise` wird die Funktion **unterbrochen**
3. anderer JavaScript-Code darf weiterlaufen
4. sobald das Promise fertig ist → wird der Rest der Funktion fortgesetzt
5. "B" wird ausgeführt

## Was ist dabei eine Microtask? (ohne Vorwissen)

Eine **Microtask** ist:

> ein sehr hoch priorisierter „Merkzettel“ für JavaScript:
> _„Mach das als NÄCHSTES, sobald du kurz Zeit hast."_

Promises (und damit auch await) nutzen genau diese Art von Merkzettel.

Wichtig für das Verständnis:

- JavaScript führt **erst** den aktuellen Code zu Ende
- **danach** arbeitet es sofort alle Microtasks ab
- **erst danach** kommen Dinge wie Timer (setTimeout)

## Warum ist das wichtig für await?

Wenn ein Promise fertig ist:

- wird **kein Code direkt mitten im laufenden Code ausgeführt**
- stattdessen wird der Rest der async-Funktion als **Microtask vorgemerkt**
- dieser Code läuft **so früh wie möglich**, aber **nicht sofort**

Deshalb sagt man:

> „Der Code nach await wird als Microtask fortgesetzt."

## Mini-Beispiel zum Einprägen

Beispiel:

```js
console.log('1');

Promise.resolve().then(() => console.log('2'));

console.log('3');
```

Ausgabe:
1
3
2

Warum?

- "1" → sofort
- Promise.then → Microtask (für später vorgemerkt)
- "3" → sofort
- danach → Microtask läuft → "2"

## Übertragen auf async / await

Dieser Code:

```js
async function run() {
  console.log('A');
  await Promise.resolve();
  console.log('B');
}

run();
console.log('C');
```

Ausgabe:
A
C
B

Warum?

- "A" → sofort
- await → Funktion pausiert
- "C" → läuft weiter
- Promise ist sofort fertig → Rest von run() wird als Microtask ausgeführt
- "B"

## Merksatz für Einsteiger

- `await` blockiert **nicht JavaScript**
- es verschiebt den restlichen Code der Funktion **nach hinten**
- dieser Code kommt **sehr früh dran**, noch vor Timern
- dieses „sehr früh, aber nicht sofort" nennt man **Microtask**

Für den Einstieg reicht dieses mentale Modell vollkommen aus.

Die Übungsaufgabe wurde in die Datei `problem.js` ausgelagert.
Gegeben:

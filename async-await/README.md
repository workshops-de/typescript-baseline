# async / await in JavaScript

## Was ist async / await?

**async / await** ist eine **Syntax-Erweiterung** für Promises.
Sie ändert **nicht**, wie JavaScript asynchron arbeitet, sondern **wie der Code geschrieben und gelesen wird**.

Ziel:

- weniger then()-Ketten
- besser lesbarer, „synchron wirkender“ Code
- gleiche Promise-Mechanik unter der Haube

Merksatz:
async / await = **andere Schreibweise für Promises**, kein neues Konzept

## async – was bedeutet das?

Eine Funktion mit dem Schlüsselwort `async`:

- gibt **immer ein Promise zurück**
- auch dann, wenn explizit ein normaler Wert zurückgegeben wird

Beispiel:

```js
async function getNumber() {
  return 42;
}
```

Ergebnis:

- Rückgabewert ist **kein** 42
- Rückgabewert ist ein Promise, das mit 42 erfüllt wird

## await – was passiert hier?

`await`:

- wartet auf die **Erfüllung oder Ablehnung** eines Promises
- darf **nur innerhalb einer async-Funktion** verwendet werden
- „pausiert“ nur die async-Funktion, **nicht** den gesamten JavaScript-Thread

Beispiel:

```js
async function loadValue() {
  const result = await somePromise;
  console.log(result);
}
```

Was intern passiert:

- JavaScript blockiert nicht
- der Code wird in Microtasks fortgesetzt, sobald das Promise settled ist

## Was ist dabei eine Microtask? (ohne Vorwissen)

Eine **Microtask** ist:

> ein sehr hoch priorisierter „Merkzettel“ für JavaScript:
> _„Mach das als NÄCHSTES, sobald du kurz Zeit hast.“_

Promises (und damit auch await) nutzen genau diese Art von Merkzettel.

Wichtig für das Verständnis:

- JavaScript führt **erst** den aktuellen Code zu Ende
- **danach** arbeitet es sofort alle Microtasks ab
- **erst danach** kommen Dinge wie Timer (setTimeout)

## async / await vs. Promise-Chain (Vergleich)

Promise-Chain:

```js
fetchData()
  .then(data => process(data))
  .then(result => save(result))
  .catch(err => handle(err));
```

Mit async / await:

```js
async function run() {
  try {
    const data = await fetchData();
    const result = process(data);
    save(result);
  } catch (err) {
    handle(err);
  }
}
```

Wichtig:

- Lesbarkeit ist der Hauptgewinn
- Kontrollfluss wirkt linear, ist es aber technisch nicht

## Fehlerbehandlung mit async / await

Fehler in await:

- ein rejected Promise verhält sich wie ein throw
- muss mit try / catch behandelt werden

Beispiel:

```js
async function run() {
  try {
    const value = await riskyPromise;
    console.log(value);
  } catch (err) {
    console.error('Fehler:', err);
  }
}
```

Ohne try / catch:

- das zurückgegebene Promise ist rejected
- der Aufrufer muss catch verwenden

## Mehrere Promises mit await

### Seriell (nacheinander)

await blockiert **innerhalb der Funktion**, daher:

```js
async function run() {
  const a = await p1;
  const b = await p2;
}
```

p2 startet erst, nachdem p1 fertig ist.

### Parallel (empfohlen, wenn möglich)

```js
async function run() {
  const [a, b] = await Promise.all([p1, p2]);
}
```

Beide Promises laufen gleichzeitig.

## finally bei async / await

try / catch / finally verhält sich **analog** zu Promise.finally():

- finally läuft, wenn das Promise settled ist
- unabhängig von Erfolg oder Fehler
- außer: das Promise wird nie settled

Beispiel:

```js
async function run() {
  try {
    await p;
  } catch (e) {
    console.log('Fehler');
  } finally {
    console.log('Cleanup');
  }
}
```

## Typische Anfängerfehler

- await außerhalb von async verwenden
- async-Funktionen aufrufen, aber das Promise nicht behandeln
- mehrere await unnötig seriell ausführen
- glauben, await blockiert JavaScript komplett

## Übungsaufgabe (Beginner)

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

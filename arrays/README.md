# Arrays in JavaScript (für Einsteiger)

## Was ist ein Array?

Ein **Array** ist eine geordnete Liste von Werten. Die Elemente können unterschiedliche Datentypen haben.
Der Zugriff erfolgt über einen **Index**, der bei `0` beginnt.

Beispiel:
const fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]); // "apple"
console.log(fruits.length); // 3

# Arrays in JavaScript (für Einsteiger)

## Was ist ein Array?

Ein **Array** ist eine geordnete Liste von Werten. Die Elemente können unterschiedliche Datentypen haben.
Der Zugriff erfolgt über einen **Index**, der bei `0` beginnt.

Beispiel:

```js
const fruits = ['apple', 'banana', 'cherry'];
console.log(fruits[0]); // "apple"
console.log(fruits.length); // 3
```

## Mutable vs. Immutable (non-mutating) Methoden

### Mutable Methoden (verändern das Original-Array)

Diese Methoden **ändern das bestehende Array direkt**. Das kann zu Seiteneffekten führen, wenn das Array mehrfach verwendet wird.

Typische mutable Methoden:

| Methode   | Kurzbeschreibung                                                                                                  |
| --------- | ----------------------------------------------------------------------------------------------------------------- |
| push()    | Fügt ein oder mehrere Elemente ans Ende des Arrays hinzu (verändert das Original).                                |
| pop()     | Entfernt das letzte Element des Arrays und gibt es zurück (verändert das Original).                               |
| shift()   | Entfernt das erste Element des Arrays und gibt es zurück; alle Indizes verschieben sich (verändert das Original). |
| unshift() | Fügt ein oder mehrere Elemente an den Anfang des Arrays ein (verändert das Original).                             |
| splice()  | Fügt an einer beliebigen Position Elemente ein, entfernt oder ersetzt Elemente (verändert das Original).          |
| sort()    | Sortiert die Elemente des Arrays in-place nach einer Vergleichsfunktion (verändert das Original).                 |
| reverse() | Kehrt die Reihenfolge der Elemente um (verändert das Original).                                                   |

Beispiel:

```js
const numbers = [3, 1, 2];
numbers.sort();
console.log(numbers); // [1, 2, 3] → Original wurde verändert
```

### Non-Mutating Methoden (geben ein neues Array zurück)

Diese Methoden **verändern das Original nicht**, sondern erzeugen ein **neues Array**.
Das ist in moderner JavaScript-Entwicklung meist der bevorzugte Stil.

Klassische non-mutating Methoden:

| Methode  | Kurzbeschreibung                                                                                                 |
| -------- | ---------------------------------------------------------------------------------------------------------------- |
| map()    | Erzeugt ein neues Array mit den Rückgabewerten einer Funktion für jedes Element (Original bleibt unverändert).   |
| filter() | Erzeugt ein neues Array mit allen Elementen, die eine gegebene Bedingung erfüllen (Original bleibt unverändert). |
| slice()  | Gibt eine flache Kopie eines Abschnitts des Arrays als neues Array zurück (Original bleibt unverändert).         |
| concat() | Verbindet zwei oder mehr Arrays/Elemente und gibt ein neues Array zurück (Originale bleiben unverändert).        |

Beispiel:

```js
const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);

console.log(doubled); // [2, 4, 6]
console.log(numbers); // [1, 2, 3] → unverändert
```

## Neue Array-Methoden (ES2023 – „change by copy")

Diese Methoden sind moderne Alternativen zu mutierenden Methoden.
Sie verhalten sich gleich, **ändern aber nicht das Original-Array**.

| Methode            | Kurzbeschreibung                                                                                                       |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| toSorted()         | Gibt ein neues, sortiertes Array zurück, ohne das Original zu verändern (wie sort() ohne Mutation).                    |
| toReversed()       | Gibt ein neues Array mit umgekehrter Reihenfolge zurück, ohne das Original zu verändern (wie reverse() ohne Mutation). |
| toSpliced()        | Führt Einfügen/Entfernen/Ersetzen an einer Position durch und liefert ein neues Array (wie splice() ohne Mutation).    |
| with(index, value) | Liefert ein neues Array mit dem Element an `index` durch `value` ersetzt (Original bleibt unverändert).                |
| findLast()         | Gibt das letzte Element zurück, das eine Bedingung erfüllt (Suche von hinten).                                         |
| findLastIndex()    | Gibt den Index des letzten Elements zurück, das eine Bedingung erfüllt (Suche von hinten).                             |

Beispiel:

```js
const original = [3, 1, 2];

const sorted = original.toSorted();
console.log(sorted); // [1, 2, 3]
console.log(original); // [3, 1, 2]

const changed = original.with(0, 99);
console.log(changed); // [99, 1, 2]
```

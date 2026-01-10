# Promises in JavaScript (für Einsteiger)

## Was ist ein Promise?

Ein **Promise** ist ein Objekt für einen Wert, der **später** verfügbar ist (typisch bei asynchronen Vorgängen wie Netzwerk, Timer, Datei-IO).

Ein Promise hat drei Zustände:

- pending (läuft noch)
- fulfilled (erfolgreich)
- rejected (fehlgeschlagen)

## Ein einfaches Promise (Erzeugen)

Beispiel:

```js
const p = new Promise((resolve, reject) => {
  const ok = true;

  if (ok) resolve('Erfolg');
  else reject('Fehler');
});
```

## Promise konsumieren: then / catch / finally

- then(...) läuft bei **Erfolg** (fulfilled)
- catch(...) läuft bei **Fehler** (rejected)
- finally(...) läuft, wenn das Promise **settled** ist (also erfüllt oder abgelehnt)

Beispiel:

```js
p.then(value => {
  console.log('OK:', value);
  return value + '!';
})
  .catch(err => {
    console.log('ERR:', err);
    return 'Fallback';
  })
  .finally(() => {
    console.log('Cleanup (z.B. Spinner aus)');
  });
```

Hinweis: then(), catch(), finally() geben jeweils **ein neues Promise** zurück (dadurch kann man weiter verketten). :contentReference[oaicite:0]{index=0}

## Was ist eine Promise-Chain (kurz)?

Eine **Promise-Chain** ist eine Kette aus then()/catch()/finally()-Aufrufen, bei der:

- jeder Schritt das Ergebnis (oder den Fehler) des vorherigen Schritts verarbeitet
- ein return-Wert automatisch in das nächste then() “weitergereicht” wird
- ein throw (oder ein zurückgegebenes abgelehntes Promise) die Kette in den Fehlerpfad bringt

Mini-Beispiel:

```js
fetch('/api/user')
  .then(res => res.json())
  .then(user => user.name)
  .then(name => console.log('Name:', name))
  .catch(err => console.error('Irgendwo ist was schiefgelaufen:', err));
```

Merksatz:

- then-Kette = “Pipeline” für erfolgreiche Ergebnisse
- catch = “Fehlerkanal” für die ganze Kette ab dort

## Wird finally wirklich immer ausgeführt?

**Wenn** das Promise **settled** (fulfilled oder rejected), dann wird der finally-Callback ausgeführt – unabhängig davon, ob ein Fehler vorliegt. :contentReference[oaicite:1]{index=1}

Wichtige Nuancen, die in der Praxis wie “nicht immer” wirken können:

1. **Nie settled, nie finally**
   Wenn ein Promise nie aufgelöst/abgelehnt wird (z.B. ein hängender Request ohne Timeout), läuft finally nicht, weil es nichts gibt, “woran” es sich ausführen könnte. (Folgerung aus “runs when settled”.)

2. **finally kann das Ergebnis der Kette verändern**
   finally soll das Ergebnis “eigentlich” durchreichen, aber:
   - wirft der finally-Callback einen Fehler, wird die Kette ab da rejected
   - gibt der finally-Callback ein rejected Promise zurück, wird die Kette ebenfalls rejected
     Das bedeutet: finally wird zwar ausgeführt, kann aber den späteren Output beeinflussen.

Kurzfazit:

- Im Erfolgs- UND Fehlerfall eines settled Promises: **ja, finally läuft**.
- “Nicht immer” nur, wenn das Promise **nie** settled oder die Umgebung vorher abbricht.

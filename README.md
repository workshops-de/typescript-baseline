# JavaScript Hands-On

Kurz und prägnant: Dieses Repository enthält Lernmodule mit kurzen Übungen und Referenzlösungen.

## Lektionen

- `destructuring/` — Object Destructuring
- `spread-operator/` — Spread Operator (`...`)
- `modules/` — JavaScript Modules (ESM)

## Projektstruktur (Konvention)

- Jede Lektion liegt in einem eigenen Verzeichnis.
- In jedem Verzeichnis gibt es:
  - `README.md` — Know‑how & kurze Erklärungen zur Lektion
  - `problem.js` — Übungsaufgabe (zu lösen)
  - `solution.js` oder `solution/` — Referenzlösung(en)

## Wie benutzt man die Übungen

1. Öffne das Verzeichnis der Lektion, z. B. `cd destructuring`
2. Öffne `problem.js` und löse die Aufgabe, ohne die Lösung zu öffnen.
3. Nachdem du die Aufgabe gelöst hast, teste das Ergebnis mit Node (aus dem Projekt-Root):

   ```bash
   node ./destructuring/problem.js
   ```

   Nach dem Lösen kannst du zur Kontrolle die Referenzlösung ausführen:

   ```bash
   node ./destructuring/solution.js
   ```

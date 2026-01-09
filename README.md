# JavaScript Baseline

<p align="center">
  <img alt="workshops-de-logo-blue" src="docs/logo-workshops-de.png" width="120">
  <br>
  <em>The best way to get started with JavaScript for modern web frameworks</em>
  <br>
</p>

<p align="center">
  <a href="https://workshops.de/" target="_blank"><strong>workshops.de</strong></a>
  <br>
</p>

## Getting Started

- Voraussetzungen: [Node (LTS)](https://nodejs.org) ist installiert.
- Nur klonen (Es ist keine Installation von Abhängigkeiten erforderlich):

```bash
git clone https://github.com/workshops-de/javascript-baseline.git
cd javascript-baseline
```

### JavaScript mit Node ausführen

> Mit einem geöffneten Terminal im Verzeichnis `javascript-baseline` ...

```bash
node ./<lektion>/problem.js`
```

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

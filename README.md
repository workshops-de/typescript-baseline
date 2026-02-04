# JavaScript Baseline

<p align="center">
  <img alt="workshops-de-logo-blue" src=".docs/logo-workshops-de.png" width="120">
  <br>
  <em>The best way to get started with TypeScript for modern web frameworks</em>
  <br>
</p>

<p align="center">
  <a href="https://workshops.de/" target="_blank"><strong>workshops.de</strong></a>
  <br>
</p>

## Getting Started

- Voraussetzungen: [Node (LTS)](https://nodejs.org) & [VS Code](https://code.visualstudio.com/) sind installiert.
- Nur klonen (Es ist keine Installation von Abhängigkeiten erforderlich):

```bash
git clone https://github.com/workshops-de/typescript-baseline.git
cd javascript-baseline
```

### JavaScript mit Node ausführen

> Mit einem geöffneten Terminal im Verzeichnis `typescript-baseline` ...

```bash
node ./<lektion>/problem.ts`
```

Kurz und prägnant: Dieses Repository enthält Lernmodule mit kurzen Übungen und Referenzlösungen.

## Lektionen

| Verzeichnis                         | Thema                              | Kurzbeschreibung                                                                        |
| ----------------------------------- | ---------------------------------- | --------------------------------------------------------------------------------------- |
| `syntax-type-annotation/`           | Syntax & Type Annotation           | Variablen, Arrays, Objekte und Funktionen typisieren inkl. Type Inference               |
| `type-interface-wiederverwendung/`  | Type & Interface                   | Wiederverwendbare Domänenmodelle mit type und interface, inkl. extends und Intersection |
| `spezielle-typen/`                  | Spezielle Typen                    | null, undefined, any, unknown und never verstehen und bewusst einsetzen                 |
| `discriminated-unions-type-guards/` | Discriminated Unions & Type Guards | Unions mit Discriminator-Feld und eigene Type Guards für sichere Typunterscheidung      |
| `generics/`                         | Generics                           | Generische Funktionen, Interfaces und Klassen für flexible, typsichere Wiederverwendung |
| `es-modules/`                       | ES Modules                         | import/export, Modulstruktur und Type-Only Imports in TypeScript                        |
| `class/`                            | Klassen                            | Konstruktor, Methoden, Vererbung und Zugriffsmodifikatoren (public, private, protected) |

## Projektstruktur (Konvention)

- Jede Lektion liegt in einem eigenen Verzeichnis.
- In jedem Verzeichnis gibt es:
  - `README.md` — Know‑how & kurze Erklärungen zur Lektion
  - `problem.ts` — Übungsaufgabe (zu lösen)
  - `solution.ts` oder `solution/` — Referenzlösung(en)

## Wie benutzt man die Übungen?

1. Öffne das Verzeichnis der Lektion, z. B. `cd syntax-type-annotation`
2. Öffne `problem.ts` und löse die Aufgabe, ohne die Lösung zu öffnen.
3. Nachdem du die Aufgabe gelöst hast, teste das Ergebnis mit tsx (aus dem Projekt-Root):

   ```bash
   npx tsx ./syntax-type-annotation/problem.ts
   ```

   Nach dem Lösen kannst du zur Kontrolle die Referenzlösung ausführen:

   ```bash
   npx tsx ./syntax-type-annotation/solution.ts
   ```

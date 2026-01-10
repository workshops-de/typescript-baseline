const scores = [12, 5, 29, 29, 8, 17];

// Aufgabe 1 - Lösung
function determineTopScores(scores, countOfTopScores) {
  return scores
    .toSorted((previous, current) => current - previous)
    .slice(0, countOfTopScores);
}

const topScores = determineTopScores(scores, 3);
console.log(topScores);

// Aufgabe 2 - Lösung
function replaceScore(scores, index, newScore) {
  return scores.with(index, newScore);
}
const scoresWithReplacement = replaceScore(scores, 1, 100);
console.log(scoresWithReplacement);

// Aufgabe 3 (Bonus) - Lösung
const lastIndexOfValue29 = scores.findLastIndex(score => score == 29);
console.log(lastIndexOfValue29);

/* TODO:
 *
 * Gegeben ist folgendes Array:
 * const scores = [12, 5, 29, 29, 8, 17];
 *
 * Aufgabe 1
 * Implementiere die Funktion `determineTopScores(scores, countOfTopScores)`, die die höchsten "Scores" absteigend
 * sortiert zurückgibt, ohne das Original-Array zu verändern.
 *
 * Hinweis: toSorted() + slice()
 *
 * Aufgabe 2
 * Schreibe eine Funktion `replaceScore(scores, index, newScore)`, die einen Wert ersetzt,
 * ohne das Original-Array zu verändern.
 *
 * Hinweis: with(index, value)
 *
 * Aufgabe 3 (Bonus)
 * Finde den letzten Index, an dem der Wert `29` vorkommt.
 *
 * Hinweis: findLastIndex()
 *
 * Beispiel-Ergebnisse:
 * - topScores(scores, 3) -> [29, 29, 17]
 * - replaceScore(scores, 1, 99) -> [12, 99, 29, 29, 8, 17]
 * - scores bleibt immer unverändert
 */

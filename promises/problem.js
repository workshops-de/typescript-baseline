function getNumberAfter(ms, value) {
  return new Promise((resolve, reject) => {});
}

/* TODO:
 *
 * 1) Implementiere getNumberAfter(ms, value) mit new Promise + setTimeout.
 * 2) Erzeuge eine Chain, die:
 *   - erst 10 liefert,
 *   - dann verdoppelt,
 *   - dann 5 addiert,
 *   - am Ende das Ergebnis loggt.
 * 3) Baue einen Fehler ein:
 *   - Wenn value kleiner als 0 ist, soll reject("value must be >= 0") passieren.
 *   - Stelle sicher, dass catch den Fehler loggt.
 * 4) Nutze finally, um immer "done" zu loggen (egal ob Erfolg oder Fehler).
 *
 * Erwartung (Beispiel):
 * - getNumberAfter(200, 10) -> am Ende: 25 und "done"
 * - getNumberAfter(200, -1) -> Fehlerausgabe und "done"
 */

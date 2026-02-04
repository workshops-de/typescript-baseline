const selectedId: string | null = null;

let payload: unknown = JSON.parse("{}");

function upperCaseText(value: unknown): string {
  if (typeof value === "string") return value;
  return "DEFAULT";
}

console.log(upperCaseText(payload));

export { };

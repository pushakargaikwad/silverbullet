import { insertAtCursor } from "@plugos/plugos-silverbullet-syscall/editor";

const dateMatchRegex = /(\d{4}\-\d{2}\-\d{2})/g;

export function niceDate(d: Date): string {
  return d.toISOString().split("T")[0];
}

export async function insertToday() {
  await insertAtCursor(niceDate(new Date()));
}

export async function insertTomorrow() {
  let d = new Date();
  d.setDate(d.getDate() + 1);
  await insertAtCursor(niceDate(d));
}

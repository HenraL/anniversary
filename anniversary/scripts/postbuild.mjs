import { readFileSync, writeFileSync } from "fs";

const root = "out/index.html";
const sub = ["out/en/index.html", "out/fr/index.html"];

for (const file of [root, ...sub]) {
  let html = readFileSync(file, "utf8");
  const prefix = file === root ? "" : "../";
  html = html
    .replace(/="\/_next\//g, `="${prefix}_next/`)
    .replace(/="\/favicon/g, `="${prefix}favicon`);
  writeFileSync(file, html);
}

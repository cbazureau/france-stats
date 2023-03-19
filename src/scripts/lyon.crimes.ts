import nReadlines from "n-readlines";
import fs from "fs";
import path from "path";
import {
  CITIES as LYON_CITIES,
  DISTRICTS as LYON_DISTRICTS,
} from "~/data/data.lyon";
const lines = new nReadlines(
  path.resolve(
    process.cwd(),
    "./prisma/rawdata/donnee-data.gouv-2021-geographie2022-produit-le2022-07-27.csv"
  )
);

const codeInsees = [
  ...LYON_CITIES.map((city) => city.codeInsee),
  ...LYON_DISTRICTS.map((district) => district.codeInsee),
];

let line;
const entries = [];

while ((line = lines.next())) {
  const currentLine = line.toString("ascii") || "";
  const codeInsee = parseInt(currentLine.slice(0, 5), 10);
  const year = currentLine.toString().slice(6, 8) || "0";
  if (codeInsees.includes(codeInsee) && year === "21") {
    const tabs = currentLine.split(";");
    const value = tabs[5];
    if (value === "NA") continue;
    entries.push({
      codeInsee,
      year: 2000 + parseInt(year, 10),
      name: tabs[2],
      category: "crimes",
      value: parseInt(value || "", 10),
    });
  }
}

fs.writeFileSync(
  path.resolve(process.cwd(), "./src/data/data.lyon.crimes.ts"),
  "export const CRIMES = " + JSON.stringify(entries, null, 2) + ";"
);

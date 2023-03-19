import nReadlines from "n-readlines";
import fs from "fs";
import path from "path";
import {
  CITIES as LYON_CITIES,
  DISTRICTS as LYON_DISTRICTS,
} from "~/data/data.lyon";
import { type StatType } from "~/data/commun.types";
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
const entries: StatType[] = [];

while ((line = lines.next())) {
  const currentLine = line.toString("ascii") || "";
  const codeInsee = parseInt(currentLine.slice(0, 5), 10);
  const year = currentLine.toString().slice(6, 8) || "0";
  if (codeInsees.includes(codeInsee) && year === "21") {
    const tabs = currentLine.split(";");
    const value = tabs[5];
    const pop = tabs[9];
    if (
      pop &&
      !entries.some(
        (e) =>
          e.codeInsee === codeInsee &&
          e.year === 2021 &&
          e.category === "general" &&
          e.name === "Population"
      )
    ) {
      // Add general.Population stats
      entries.push({
        codeInsee,
        year: 2021,
        name: "Population",
        category: "general",
        value: parseInt(pop || "", 10),
      });
    }
    if (value !== "NA") {
      // Add crimes.XXX stats
      entries.push({
        codeInsee,
        year: 2000 + parseInt(year, 10),
        name: tabs[2] || "",
        category: "crimes",
        canBeRelative: true,
        value: parseInt(value || "", 10),
      });
    }
  }
}

fs.writeFileSync(
  path.resolve(process.cwd(), "./src/data/data.lyon.stats.ts"),
  'import { type StatType } from "./commun.types"; export const STATS: StatType[] = ' +
    JSON.stringify(entries, null, 2) +
    ";"
);

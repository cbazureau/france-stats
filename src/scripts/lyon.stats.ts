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

export const RAW_STATS_TYPE = [
  { id: 1, category: "general", name: "population", year: 2021 },
  { id: 2, category: "general", name: "density", year: 2021 },
  {
    id: 3,
    category: "crimes",
    name: "autres-coups-et-blessures-volontaires",
    year: 2021,
    canBeRelative: true,
  },
  {
    id: 4,
    category: "crimes",
    name: "cambriolages-de-logement",
    year: 2021,
    canBeRelative: true,
  },
  {
    id: 5,
    category: "crimes",
    name: "coups-et-blessures-volontaires",
    year: 2021,
    canBeRelative: true,
  },
  {
    id: 6,
    category: "crimes",
    name: "coups-et-blessures-volontaires-intrafamiliaux",
    year: 2021,
    canBeRelative: true,
  },
  {
    id: 7,
    category: "crimes",
    name: "violences-sexuelles",
    year: 2021,
    canBeRelative: true,
  },
  {
    id: 8,
    category: "crimes",
    name: "vols-avec-armes",
    year: 2021,
    canBeRelative: true,
  },
  {
    id: 9,
    category: "crimes",
    name: "vols-d'accessoires-sur-véhicules",
    year: 2021,
    canBeRelative: true,
  },
  {
    id: 10,
    category: "crimes",
    name: "vols-dans-les-véhicules",
    year: 2021,
    canBeRelative: true,
  },
  {
    id: 11,
    category: "crimes",
    name: "vols-de-véhicules",
    year: 2021,
    canBeRelative: true,
  },
  {
    id: 12,
    category: "crimes",
    name: "vols-sans-violence-contre-des-personnes",
    year: 2021,
    canBeRelative: true,
  },
  {
    id: 13,
    category: "crimes",
    name: "vols-violents-sans-arme",
    year: 2021,
    canBeRelative: true,
  },
];

const codeInsees = [
  ...LYON_CITIES.map((city) => city.codeInsee),
  ...LYON_DISTRICTS.map((district) => district.codeInsee),
];

const ALL_CITIES = [...LYON_CITIES, ...LYON_DISTRICTS];

let line;
const entries: StatType[] = [];

while ((line = lines.next())) {
  const currentLine = line.toString("utf8") || "";
  const codeInsee = parseInt(currentLine.slice(0, 5), 10);
  const year = currentLine.toString().slice(6, 8) || "0";
  if (codeInsees.includes(codeInsee) && year === "21") {
    const tabs = currentLine.split(";");
    const value = tabs[5];
    const pop = tabs[9];
    if (
      pop &&
      !entries.some((e) => e.codeInsee === codeInsee && e.statId === 1)
    ) {
      // Add general.Population stats
      entries.push({
        codeInsee,
        statId: 1,
        value: parseInt(pop || "", 10),
      });
      const area = ALL_CITIES.find((c) => c.codeInsee === codeInsee)?.area;
      if (area)
        entries.push({
          codeInsee,
          statId: 2,
          value: Math.round((parseInt(pop || "", 10) / area) * 100) / 100,
        });
    }
    if (value !== "NA") {
      const name = (tabs[2] || "").toLowerCase().replace(/ /g, "-");
      const currentYear = 2000 + parseInt(year, 10);
      const category = "crimes";
      // Add crimes.XXX stats
      const statId = RAW_STATS_TYPE.find(
        (s) =>
          s.name === name && s.year === currentYear && s.category === category
      )?.id;
      if (statId)
        entries.push({
          codeInsee,
          statId,
          value: parseInt(value || "", 10),
        });
    }
  }
}

fs.writeFileSync(
  path.resolve(process.cwd(), "./src/data/data.lyon.stats.ts"),
  'import { type StatType, StatTypeType } from "./commun.types"; export const STATS_TYPE:StatTypeType[] =' +
    JSON.stringify(RAW_STATS_TYPE, null, 2) +
    "; export const STATS: StatType[] = " +
    JSON.stringify(entries, null, 2) +
    ";"
);

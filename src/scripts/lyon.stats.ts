import nReadlines from "n-readlines";
import fs from "fs";
import path from "path";
import {
  CITIES as LYON_CITIES,
  DISTRICTS as LYON_DISTRICTS,
} from "~/data/data.lyon";
import { type StatType, type StatTypeType } from "~/data/commun.types";

// https://www.data.gouv.fr/fr/datasets/indices-de-position-sociale-dans-les-colleges-de-france-metropolitaine-et-drom/
const schoolLines = new nReadlines(
  path.resolve(process.cwd(), "./prisma/rawdata/fr-en-ips_colleges.csv")
);

// https://www.data.gouv.fr/fr/datasets/bases-statistiques-communale-et-departementale-de-la-delinquance-enregistree-par-la-police-et-la-gendarmerie-nationales/
const lines = new nReadlines(
  path.resolve(
    process.cwd(),
    "./prisma/rawdata/donnee-data.gouv-2021-geographie2022-produit-le2022-07-27.csv"
  )
);

export const RAW_STATS_TYPE: StatTypeType[] = [
  {
    id: 1,
    category: "general",
    name: "population",
    year: 2021,
    type: "manual-scale",
    scale: [0, 2500, 5000, 7500, 10000, 20000, 30000, 50000],
    unit: "habitants",
  },
  {
    id: 2,
    category: "general",
    name: "density",
    year: 2021,
    type: "manual-scale",
    scale: [0, 150, 250, 350, 500, 750, 1000, 1500],
    unit: "habitants/km²",
  },
  {
    id: 3,
    category: "crimes",
    name: "autres-coups-et-blessures-volontaires",
    year: 2021,
    type: "auto-scale-population-relative",
    unit: "/ 1000 habitants",
  },
  {
    id: 4,
    category: "crimes",
    name: "cambriolages-de-logement",
    year: 2021,
    type: "auto-scale-population-relative",
    unit: "/ 1000 habitants",
  },
  {
    id: 5,
    category: "crimes",
    name: "coups-et-blessures-volontaires",
    year: 2021,
    type: "auto-scale-population-relative",
    unit: "/ 1000 habitants",
  },
  {
    id: 6,
    category: "crimes",
    name: "coups-et-blessures-volontaires-intrafamiliaux",
    year: 2021,
    type: "auto-scale-population-relative",
    unit: "/ 1000 habitants",
  },
  {
    id: 7,
    category: "crimes",
    name: "violences-sexuelles",
    year: 2021,
    type: "auto-scale-population-relative",
    unit: "/ 1000 habitants",
  },
  {
    id: 8,
    category: "crimes",
    name: "vols-avec-armes",
    year: 2021,
    type: "auto-scale-population-relative",
    unit: "/ 1000 habitants",
  },
  {
    id: 9,
    category: "crimes",
    name: "vols-d'accessoires-sur-véhicules",
    year: 2021,
    type: "auto-scale-population-relative",
    unit: "/ 1000 habitants",
  },
  {
    id: 10,
    category: "crimes",
    name: "vols-dans-les-véhicules",
    year: 2021,
    type: "auto-scale-population-relative",
    unit: "/ 1000 habitants",
  },
  {
    id: 11,
    category: "crimes",
    name: "vols-de-véhicules",
    year: 2021,
    type: "auto-scale-population-relative",
    unit: "/ 1000 habitants",
  },
  {
    id: 12,
    category: "crimes",
    name: "vols-sans-violence-contre-des-personnes",
    year: 2021,
    type: "auto-scale-population-relative",
    unit: "/ 1000 habitants",
  },
  {
    id: 13,
    category: "crimes",
    name: "vols-violents-sans-arme",
    year: 2021,
    type: "auto-scale-population-relative",
    unit: "/ 1000 habitants",
  },
  {
    id: 14,
    category: "ecoles",
    name: "colleges",
    year: 2022,
    type: "manual-scale",
    unit: "IPS",
  },
];

const codeInsees = [
  ...LYON_CITIES.map((city) => city.codeInsee),
  ...LYON_DISTRICTS.map((district) => district.codeInsee),
];

const ALL_CITIES = [...LYON_CITIES, ...LYON_DISTRICTS];
const entries: StatType[] = [];

// Schools
let schoolLine;
while ((schoolLine = schoolLines.next())) {
  const currentLine = schoolLine.toString("utf8") || "";
  if (currentLine.startsWith("2021-2022;LYON;069;RHONE")) {
    const tabs = currentLine.toString().split(";");
    const codeInsee = parseInt(tabs[6] || "", 10);
    if (codeInsees.includes(codeInsee)) {
      const value = parseInt(tabs[9] || "", 10);
      const currentSchoolEntry = entries.find(
        (e) => e.codeInsee === codeInsee && e.statId === 14
      );
      const detail = [
        `Nom du collège : ${tabs[5] || ""}`,
        `Catégorie : ${tabs[8] || ""}`,
        `IPS : ${tabs[9] || ""}`,
        `EcartType IPS : ${tabs[10] || ""}`,
      ]
        .filter(Boolean)
        .join(" - ");
      if (!currentSchoolEntry) {
        entries.push({
          codeInsee,
          statId: 14,
          value,
          details: [detail],
        });
      } else currentSchoolEntry.details?.push(detail);
    }
  }
}

// Crimes and population
let line;
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

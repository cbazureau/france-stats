export type CityType = {
  name: string;
  inhabitant?: string;
  minHeight?: number;
  maxHeight?: number;
  area: number;
  codeInsee: number;
  zipCode: number;
  wikipediaLink: string;
  wikipediaPicture: string;
  svgLabel: {
    y: string;
    x: string;
    titles: {
      title: string;
      y: string;
      x: string;
    }[];
  };
  svgPath: {
    d: string;
    transform?: string;
  };
};

export type ZoneType = {
  name: string;
  label: string;
};

export type StatType = {
  statId: number;
  codeInsee: number;
  value: number;
  details?: string[];
};

export type StatTypeType = {
  id: number;
  name: string;
  year: number;
  category: string;
  type: "manual-scale" | "auto-scale-population-relative";
  scale?: number[];
  unit: string;
};

export type EnrichedStatType = {
  codeInsee: number;
  value: number;
  population?: number;
  computedValue?: number;
  details?: string[];
};

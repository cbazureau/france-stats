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
};

export type StatTypeType = {
  id: number;
  name: string;
  year: number;
  category: string;
  canBeRelative?: boolean;
};

export type EnrichedStatType = {
  codeInsee: number;
  value: number;
  population?: number;
  relativeValue?: number;
  gaussianValue?: number;
};

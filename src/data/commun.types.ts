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
  name: string;
  codeInsee: number;
  year: number;
  category: string;
  canBeRelative?: boolean;
  value: number;
};

export type EnrichedStatType = StatType & {
  population?: number;
  relativeValue?: number;
  gaussianValue?: number;
};

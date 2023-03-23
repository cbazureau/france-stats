import {
  type EnrichedStatType,
  type CityType,
  type StatTypeType,
} from "../data/commun.types";

const float2color = ({
  percentage,
  red = true,
  green = true,
  blue = true,
  max = 255,
  min = 0,
}: {
  percentage?: number;
  red?: boolean;
  green?: boolean;
  blue?: boolean;
  max?: number;
  min?: number;
}): string => {
  if (percentage === undefined) {
    return "transparent";
  }
  const color_part_dec = 255 - Math.round((max - min) * percentage + min);
  return `rgb(${red ? color_part_dec : "0"} ${green ? color_part_dec : "0"} ${
    blue ? color_part_dec : "0"
  })`;
};

type PathProps = {
  city: CityType;
  setHovered: (codeInsee: number | null) => void;
  stats: EnrichedStatType[];
  currentStat?: StatTypeType;
};

const Path = ({ city, setHovered, stats, currentStat }: PathProps) => {
  const { codeInsee, svgPath } = city;
  return (
    <path
      key={codeInsee}
      className="fill-indigo-50 stroke-indigo-600 stroke-1 opacity-80 hover:opacity-100"
      style={{
        fill: float2color({
          percentage: stats?.find((s) => s.codeInsee === codeInsee)
            ?.computedValue,
          green: false,
          blue: false,
          max: 200,
          min: 0,
        }),
      }}
      data-value={stats?.find((s) => s.codeInsee === codeInsee)?.computedValue}
      d={svgPath.d}
      id={codeInsee.toString()}
      onMouseEnter={() => setHovered(codeInsee)}
      onMouseLeave={() => setHovered(null)}
      transform={svgPath.transform}
    />
  );
};

export default Path;

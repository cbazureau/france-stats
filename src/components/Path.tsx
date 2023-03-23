import {
  type EnrichedStatType,
  type CityType,
  type StatTypeType,
} from "../data/commun.types";

const float2color = (percentage?: number): string => {
  if (percentage === undefined || percentage === -1) {
    return "transparent";
  }
  if (percentage === 0) {
    return "transparent";
  }
  const color_part_dec = Math.round(255 * percentage);
  const color_part_hex = Number(color_part_dec).toString(16);
  return "#" + color_part_hex + color_part_hex + color_part_hex;
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
        fill: float2color(
          stats?.find((s) => s.codeInsee === codeInsee)?.computedValue
        ),
      }}
      data-value={stats?.find((s) => s.codeInsee === codeInsee)?.computedValue}
      d={svgPath.d}
      id={codeInsee.toString()}
      onMouseEnter={() => setHovered(codeInsee)}
      //onMouseLeave={() => setHovered(null)}
      transform={svgPath.transform}
    />
  );
};

export default Path;

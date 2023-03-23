import {
  type EnrichedStatType,
  type CityType,
  type StatTypeType,
} from "../data/commun.types";

type LabelProps = {
  city: CityType;
  hovered: number | null;
  currentStat?: StatTypeType;
};

const Label = ({ city, hovered, currentStat }: LabelProps) => {
  const { codeInsee, svgLabel } = city;
  return (
    <text
      key={codeInsee}
      id={codeInsee.toString()}
      x={svgLabel.x}
      y={svgLabel.y}
      className={
        hovered === codeInsee
          ? "pointer-events-none fill-indigo-600 text-xs"
          : "pointer-events-none hidden fill-indigo-400 text-xs"
      }
    >
      {svgLabel.titles.map((t, i) => (
        <tspan key={i} x={t.x} y={t.y}>
          {t.title}
        </tspan>
      ))}
    </text>
  );
};

export default Label;

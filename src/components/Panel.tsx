import {
  type EnrichedStatType,
  type CityType,
  type StatTypeType,
} from "../data/commun.types";

type PanelProps = {
  city?: CityType;
  stats: EnrichedStatType[];
  currentStat?: StatTypeType;
};

const Panel = ({ city, stats, currentStat }: PanelProps) => {
  if (!city) {
    return null;
  }

  const { codeInsee, name } = city;
  let value: string | number | undefined = stats?.find(
    (s) => s.codeInsee === codeInsee
  )?.value;
  if (
    value !== undefined &&
    currentStat?.type === "auto-scale-population-relative"
  ) {
    value = stats?.find((s) => s.codeInsee === codeInsee)?.computedValue;
    if (value !== undefined) {
      value = `${Math.round(value * 100000) / 100} pour milles habitants`;
    }
  }
  if (currentStat && value === undefined) {
    value = "Pas de données";
  }

  return (
    <div className="fixed bottom-0 z-10 flex w-full justify-between bg-white p-0">
      <span className="p-4">{name}</span>
      {value !== undefined && (
        <span className="min-w-100 min-w-[200px] border-r bg-cyan-100 p-4">
          {value}
        </span>
      )}
    </div>
  );
};

export default Panel;

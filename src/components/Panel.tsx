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
  const formatter = new Intl.NumberFormat("fr-FR", {
    style: "decimal",
    maximumFractionDigits: 2,
  });

  const { codeInsee, name } = city;
  const currentStatData = stats?.find((s) => s.codeInsee === codeInsee);

  let value: string | number | undefined = currentStatData?.value;
  if (
    value !== undefined &&
    currentStat?.type === "auto-scale-population-relative"
  ) {
    const population = currentStatData?.population;
    if (value !== undefined && population !== undefined) {
      value = `${formatter.format(
        Math.round((value / population) * 100000) / 100
      )} ${currentStat?.unit}`;
    }
  } else if (currentStat && value !== undefined) {
    value = `${formatter.format(value)} ${currentStat?.unit}`;
  }

  if (currentStat && value === undefined) {
    value = "Pas de données";
  }

  return (
    <div className="fixed bottom-0 z-10 flex w-full justify-between bg-white p-0">
      <span className="border-r p-4">{name}</span>
      {currentStatData?.details !== undefined && (
        <span className="min-w-100 p-4 text-left">
          {currentStatData?.details?.map((detail) => (
            <div key={detail}>{detail}</div>
          ))}
        </span>
      )}
      {value !== undefined && (
        <span className="min-w-100 min-w-[300px] border-r bg-cyan-100 p-4 text-right">
          {value}
        </span>
      )}
    </div>
  );
};

export default Panel;

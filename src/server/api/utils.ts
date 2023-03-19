import { type EnrichedStatType, type StatType } from "~/data/commun.types";
export const getEnrichedStats = (
  fullStats: StatType[],
  stateName: string
): EnrichedStatType[] => {
  const enrichedStats: EnrichedStatType[] = fullStats
    .filter((s) => s.name === stateName)
    .map((stat) => {
      if (stat.canBeRelative) {
        const population =
          fullStats.find(
            (s) => s.name === "population" && s.codeInsee === stat.codeInsee
          )?.value || 0;
        return {
          ...stat,
          relativeValue: population ? stat.value / population : -1,
        };
      }
      return stat;
    });
  const max = Math.max(
    ...enrichedStats
      .filter((s) => s.relativeValue !== undefined && s.relativeValue !== -1)
      .map((s) => s.relativeValue || 0)
  );
  const min = Math.min(
    ...enrichedStats
      .filter((s) => s.relativeValue !== undefined && s.relativeValue !== -1)
      .map((s) => s.relativeValue || 0)
  );
  return enrichedStats.map((s) => ({
    ...s,
    gaussianValue: (s.relativeValue || 0 - min) / (max - min),
  }));
};

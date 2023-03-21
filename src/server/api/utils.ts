import {
  type EnrichedStatType,
  type StatType,
  type StatTypeType,
} from "~/data/commun.types";

const POPULATION_STAT_ID = 1;

export const getEnrichedStats = (
  fullStats: StatType[],
  statsType: StatTypeType[],
  statId: number
): EnrichedStatType[] => {
  const currentStat = statsType.find((s) => s.id === statId);
  if (currentStat === undefined) return [];
  const enrichedStats: EnrichedStatType[] = fullStats
    .filter((s) => s.statId === statId)
    .map((stat) => {
      if (currentStat.canBeRelative) {
        const population =
          fullStats.find(
            (s) =>
              s.statId === POPULATION_STAT_ID && s.codeInsee === stat.codeInsee
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

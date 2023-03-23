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
  const currentStats = fullStats.filter((s) => s.statId === statId);
  const max = Math.max(...currentStats.map((s) => s.value));
  const min = Math.min(
    ...currentStats.filter((s) => s.value > 0).map((s) => s.value)
  );
  return fullStats
    .filter((s) => s.statId === statId)
    .map((stat: StatType): EnrichedStatType => {
      const enrichedStat: EnrichedStatType = {
        codeInsee: stat.codeInsee,
        value: stat.value,
        computedValue: stat.value,
      };
      if (currentStat.type === "auto-scale-population-relative") {
        const population =
          fullStats.find(
            (s) =>
              s.statId === POPULATION_STAT_ID && s.codeInsee === stat.codeInsee
          )?.value || 0;
        const relativeValue =
          population && stat.value > 0 ? stat.value / population : undefined;
        const computedValue = relativeValue
          ? (relativeValue - min / population) / ((max - min) / population)
          : undefined;

        enrichedStat.computedValue = computedValue;
      }
      return enrichedStat;
    });
};

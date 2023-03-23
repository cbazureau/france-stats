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
  const currentStats: Array<EnrichedStatType & { population?: number }> =
    fullStats
      .filter((s) => s.statId === statId)
      .map((stat) => {
        if (currentStat.type === "auto-scale-population-relative") {
          const population = fullStats.find(
            (s) =>
              s.statId === POPULATION_STAT_ID && s.codeInsee === stat.codeInsee
          )?.value;
          return {
            ...stat,
            population,
          };
        }
        return stat;
      });
  let min: number;
  let max: number;
  if (currentStat.type === "auto-scale-population-relative") {
    max = Math.max(...currentStats.map((s) => s.value / (s.population || 1)));
    min = Math.min(
      ...currentStats
        .filter((s) => s.value > 0)
        .map((s) => s.value / (s.population || 1))
    );
  } else {
    max = Math.max(...currentStats.map((s) => s.value));
    min = Math.min(...currentStats.map((s) => s.value));
  }

  return currentStats.map(
    (stat: EnrichedStatType & { population?: number }): EnrichedStatType => {
      const enrichedStat: EnrichedStatType = {
        codeInsee: stat.codeInsee,
        value: stat.value,
        computedValue: stat.value,
        population: stat.population,
      };
      if (currentStat.type === "auto-scale-population-relative") {
        const relativeValue =
          stat.population && stat.value > 0
            ? stat.value / stat.population
            : undefined;
        const computedValue = relativeValue
          ? (relativeValue - min) / (max - min)
          : undefined;

        enrichedStat.computedValue = computedValue;
      }
      if (currentStat.type === "manual-scale") {
        const relativeValue = stat.value > 0 ? stat.value / max : undefined;
        enrichedStat.computedValue = relativeValue;
      }
      return enrichedStat;
    }
  );
};

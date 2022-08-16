import { Log } from '../../../../topLevelUtil/types/Log';
import { LogType } from '../../../../topLevelUtil/types/LogType';
import { AnalyticsLogTypePercent } from '../types/AnalyticsLogTypePercent';

export const calculateErrorPercentages = (
  logs: Log[],
  types: LogType[],
): AnalyticsLogTypePercent[] => {
  const typePercentages: AnalyticsLogTypePercent[] = [];

  types.forEach((type) => {
    const typeLogs = logs.filter((log) => {
      return log.type === type.name;
    });

    const typePercentage: AnalyticsLogTypePercent = {
      type: type,
      percentage: (typeLogs.length / logs.length) * 100,
    };

    typePercentages.push(typePercentage);
  });

  const sortedTypePercentages = typePercentages.sort(
    (a, b) => b.percentage - a.percentage,
  );

  return sortedTypePercentages;
};

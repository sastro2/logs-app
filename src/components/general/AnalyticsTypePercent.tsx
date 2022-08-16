import { Log } from '../../topLevelUtil/types/Log';
import { LogType } from '../../topLevelUtil/types/LogType';
import { calculateErrorPercentages } from '../pages/pagesUtil/methods/analyticsMethods';

type AnalyticsTypePercentProps = {
  logs: Log[];
  types: LogType[];
};

export default function AnalyticsTypePercent(props: AnalyticsTypePercentProps) {
  return (
    <section>
      {calculateErrorPercentages(props.logs, props.types).map((log) => {
        return (
          <p key={log.type.name}>
            {log.type.name}%: {log.percentage}
          </p>
        );
      })}
    </section>
  );
}

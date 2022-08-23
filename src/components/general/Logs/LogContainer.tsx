import LogManager from '../../../_state/general/LogManager';
import { Log } from '../../../topLevelUtil/types/Log';

type LogContainerProps = {
  logs: Log[];
};

export default function LogContainer(props: LogContainerProps) {
  const types = LogManager.projectTypes;

  if (types) {
    return (
      <div style={{ width: '500px' }}>
        {props.logs.map((log) => {
          const type = types.find((type) => {
            return type.name === log.type;
          });

          return (
            <div
              style={{
                display: 'flex',
                height: type?.styles.fontSize,
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: type?.styles.fontSize,
                color: type?.styles.colour,
                backgroundColor: type?.styles.backgroundColour,
                padding: type ? type.styles.fontSize * 0.5 : '5px',
                cursor: 'pointer',
              }}
            >
              {log.type}: {log.message}
            </div>
          );
        })}
      </div>
    );
  }

  return null;
}

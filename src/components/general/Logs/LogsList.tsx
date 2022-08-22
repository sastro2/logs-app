import { Dispatch, SetStateAction } from 'react';
import { Log } from '../../../topLevelUtil/types/Log';

export type LogsListProps = {
  logs: Log[];
  setLogsToDisplay: Dispatch<SetStateAction<Log[]>>;
};

export default function LogsList(props: LogsListProps) {
  return (
    <section>
      {props.logs.map((log) => {
        return (
          <article key={log.id}>
            <p>
              {log.type}
              {log.message}
              {log.timestamp}
              {log.id}
              {log.projectId}
            </p>
          </article>
        );
      })}
      <button onClick={() => props.setLogsToDisplay([])}>back</button>
    </section>
  );
}

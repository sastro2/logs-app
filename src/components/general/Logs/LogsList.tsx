import { Dispatch, SetStateAction } from 'react';
import { Log } from '../../../topLevelUtil/types/Log';
import LogContainer from './LogContainer';

export type LogsListProps = {
  logs: Log[];
  setLogsToDisplay: Dispatch<SetStateAction<Log[]>>;
};

export default function LogsList(props: LogsListProps) {
  return (
    <section>
      <LogContainer logs={props.logs} />
      <button onClick={() => props.setLogsToDisplay([])}>back</button>
    </section>
  );
}

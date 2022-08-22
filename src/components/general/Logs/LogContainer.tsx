import { Log } from '../../../topLevelUtil/types/Log';

export default function LogContainer(log: Log) {
  return <div style={{}}>{log.message}</div>;
}

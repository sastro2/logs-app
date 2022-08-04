import { useState } from 'react';
import { Error } from '../../topLevelUtil/types/Error';
import type { Log } from '../../topLevelUtil/types/Log';
import { fetchLogs } from './pagesUtil/methods/logsMethods';

export default function Logs() {
  const [currentLogs, setCurrentLogs] = useState<Log[]>([]);
  const [error, setError] = useState<Error | null>(null);

  fetchLogs(setCurrentLogs, setError);

  if (currentLogs.length > 0 || error) {
    return (
      <main>
        <div>
          {error
            ? error.errorMessage
            : currentLogs.map((log) => {
                return (
                  <p>{`${log.id} | ${log.projectId} | ${log.type} | ${log.message}`}</p>
                );
              })}
        </div>
      </main>
    );
  }

  return <h1>Loading...</h1>;
}
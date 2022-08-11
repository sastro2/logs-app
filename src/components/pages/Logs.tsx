import { useState } from 'react';
import { Error } from '../../topLevelUtil/types/Error';
import type { Log } from '../../topLevelUtil/types/Log';
import Navbar from '../general/Navbar';
import { fetchLogs, keepLogsUpdated } from './pagesUtil/methods/logsMethods';

export default function Logs() {
  const [currentLogs, setCurrentLogs] = useState<Log[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [updaterRunning, setUpdaterRunning] = useState<boolean>(false);
  const [initialFetchDone, setInitialFetchDone] = useState<boolean>(false);

  if (!initialFetchDone) {
    fetchLogs(setCurrentLogs, setError, setInitialFetchDone);
  }

  if (!updaterRunning && initialFetchDone) {
    keepLogsUpdated(setCurrentLogs, setUpdaterRunning, '/logs');
  }

  console.log(currentLogs);

  if (initialFetchDone || error) {
    return (
      <main>
        <Navbar />
        <section>
          {error
            ? error.errorMessage
            : currentLogs.map((log) => {
                return (
                  <p
                    key={log.id}
                  >{`${log.id} | ${log.projectId} | ${log.type} | ${log.message}`}</p>
                );
              })}
        </section>
      </main>
    );
  }

  return (
    <main>
      <Navbar />
      <h1>Loading...</h1>
    </main>
  );
}

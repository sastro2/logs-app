import { useState } from 'react';
import { Error } from '../../topLevelUtil/types/Error';
import type { Log } from '../../topLevelUtil/types/Log';
import Navbar from '../general/Navbar';
import { fetchLogs, keepLogsUpdated } from './pagesUtil/methods/logsMethods';

export default function Logs() {
  const [currentLogs, setCurrentLogs] = useState<Log[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [updaterRunning, setUpdaterRunning] = useState<boolean>(false);

  if (currentLogs.length === 0) {
    fetchLogs(setCurrentLogs, setError);
  }

  if (!updaterRunning && currentLogs.length > 0) {
    keepLogsUpdated(setCurrentLogs, setUpdaterRunning, '/logs');
  }

  console.log(currentLogs);

  if (currentLogs.length > 0 || error) {
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

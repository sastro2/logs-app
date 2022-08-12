import { useState } from 'react';
import { mockUserJourneys } from '../../mockData/mockUserJourneys';
import { Error } from '../../topLevelUtil/types/Error';
import { Log } from '../../topLevelUtil/types/Log';
import { UserJourney } from '../../topLevelUtil/types/UserJourney';
import LogsList from '../general/LogsList';
import ProjectNavbar from '../general/ProjectNavbar';
import UserJourneyList from '../general/UserJourneyList';
import { fetchLogs, keepLogsUpdated } from './pagesUtil/methods/logsMethods';

export default function Logs() {
  const [currentUserJourneys, setCurrentUserJourneys] =
    useState<UserJourney[]>(mockUserJourneys);
  const [logsToDisplay, setLogsToDisplay] = useState<Log[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [updaterRunning, setUpdaterRunning] = useState<boolean>(false);
  const [initialFetchDone, setInitialFetchDone] = useState<boolean>(true);

  if (!initialFetchDone && false) {
    fetchLogs(setCurrentUserJourneys, setError, setInitialFetchDone);
  }

  if (!updaterRunning && initialFetchDone && false) {
    keepLogsUpdated(setCurrentUserJourneys, setUpdaterRunning, '/logs');
  }

  if (logsToDisplay.length > 0) {
    return (
      <main>
        <ProjectNavbar />
        <LogsList logs={logsToDisplay} setLogsToDisplay={setLogsToDisplay} />
      </main>
    );
  }

  if (initialFetchDone || error) {
    return (
      <main>
        <ProjectNavbar />
        <UserJourneyList
          currentUserJourneys={currentUserJourneys}
          error={error}
          setLogsToDisplay={setLogsToDisplay}
        />
      </main>
    );
  }

  return (
    <main>
      <ProjectNavbar />
      <h1>Loading...</h1>
    </main>
  );
}

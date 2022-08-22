import { useState } from 'react';
import LogManager from '../../_state/general/LogManager';
import { mockUserJourneys } from '../../mockData/mockUserJourneys';
import { Error } from '../../topLevelUtil/types/Error';
import { Log } from '../../topLevelUtil/types/Log';
import { Project } from '../../topLevelUtil/types/Project';
import { UserJourney } from '../../topLevelUtil/types/UserJourney';
import LogsList from '../general/Logs/LogsList';
import UserJourneyList from '../general/Logs/UserJourneyList';
import ProjectNavbar from '../general/ProjectNavbar';
import { fetchLogs, keepLogsUpdated } from './pagesUtil/methods/logsMethods';

export default function Logs() {
  const [currentUserJourneys, setCurrentUserJourneys] =
    useState<UserJourney[]>(mockUserJourneys);
  const [logsToDisplay, setLogsToDisplay] = useState<Log[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [updaterRunning, setUpdaterRunning] = useState<boolean>(false);
  const [initialFetchDone, setInitialFetchDone] = useState<boolean>(true);
  const [selectedProject, setSelectedProject] = useState<Project | undefined>(
    LogManager.selectedProject,
  );

  if (selectedProject === undefined) {
    window.location.href = 'http://localhost:3000';
  }

  if (!initialFetchDone && false) {
    fetchLogs(setCurrentUserJourneys, setError, setInitialFetchDone);
  }

  if (!updaterRunning && initialFetchDone && false) {
    keepLogsUpdated(
      setCurrentUserJourneys,
      setUpdaterRunning,
      '/dashboard/logs',
    );
  }

  if (logsToDisplay.length > 0) {
    return (
      <main>
        <ProjectNavbar
          setSelectedProject={setSelectedProject}
          setInitialFetchDone={setInitialFetchDone}
        />
        <LogsList logs={logsToDisplay} setLogsToDisplay={setLogsToDisplay} />
      </main>
    );
  }

  if (initialFetchDone || error) {
    return (
      <main>
        <ProjectNavbar
          setSelectedProject={setSelectedProject}
          setInitialFetchDone={setInitialFetchDone}
          setError={setError}
        />
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
      <ProjectNavbar
        setSelectedProject={setSelectedProject}
        setInitialFetchDone={setInitialFetchDone}
      />
      <h1>Loading...</h1>
    </main>
  );
}

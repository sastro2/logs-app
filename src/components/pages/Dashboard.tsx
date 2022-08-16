import { useState } from 'react';
import LogManager from '../../_state/general/LogManager';
import { mockLogs } from '../../mockData/mockLogs';
import { mockTypes } from '../../mockData/mockTypes';
import { Log } from '../../topLevelUtil/types/Log';
import { LogType } from '../../topLevelUtil/types/LogType';
import { Project } from '../../topLevelUtil/types/Project';
import AnalyticsTypePercent from '../general/AnalyticsTypePercent';
import ProjectNavbar from '../general/ProjectNavbar';

export default function Dashboard() {
  const [selectedProject, setSelectedProject] = useState<Project | undefined>(
    LogManager.selectedProject,
  );
  const [logs, setLogs] = useState<Log[]>(mockLogs);
  const [types, setTypes] = useState<LogType[]>(mockTypes);

  if (selectedProject === undefined) {
    window.location.href = 'http://localhost:3000';
  }

  return (
    <main>
      <ProjectNavbar setSelectedProject={setSelectedProject} />
      <AnalyticsTypePercent logs={logs} types={types} />
    </main>
  );
}

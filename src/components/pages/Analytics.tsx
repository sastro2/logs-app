import { useState } from 'react';
import LogManager from '../../_state/general/LogManager';
import ProjectNavbar from '../general/ProjectNavbar';

export default function Analytics() {
  const [selectedProject, setSelectedProject] = useState<number | undefined>(
    LogManager.selectedProject,
  );

  if (selectedProject === undefined) {
    window.location.href = 'http://localhost:3000';
  }

  return (
    <main>
      <ProjectNavbar />
      <section>Analytics</section>
    </main>
  );
}

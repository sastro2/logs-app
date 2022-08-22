import { useState } from 'react';
import { Link } from 'react-router-dom';
import LogManager from '../../_state/general/LogManager';
import { mockTypes } from '../../mockData/mockTypes';
import { Error } from '../../topLevelUtil/types/Error';
import { LogType } from '../../topLevelUtil/types/LogType';
import { Project } from '../../topLevelUtil/types/Project';
import LogTypeList from '../general/LogTypeList';
import ProjectNavbar from '../general/ProjectNavbar';
import { fetchTypes } from './pagesUtil/methods/logTypesMethods';

export default function LogTypes() {
  const [types, setTypes] = useState<LogType[]>(mockTypes);
  const [error, setError] = useState<Error | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | undefined>(
    LogManager.selectedProject,
  );
  const [initialFetchDone, setInitialFetchDone] = useState<boolean>(true);

  if (!initialFetchDone && false) {
    fetchTypes(setError, setTypes, setInitialFetchDone);
  }

  if (selectedProject === undefined) {
    window.location.href = 'http://localhost:3000';
  }

  if (initialFetchDone || error) {
    return (
      <main>
        <ProjectNavbar
          setSelectedProject={setSelectedProject}
          setInitialFetchDone={setInitialFetchDone}
          setError={setError}
        />
        <section>
          <h3>Your Types</h3>
          {types.length > 0 ? (
            <LogTypeList types={types} />
          ) : (
            <h4>No types found for project {selectedProject!.id} </h4>
          )}
        </section>
        <section>
          <h3>Create Type</h3>
          <Link
            to={{
              pathname: '/dashboard/types/editor',
            }}
          >
            editor
          </Link>
        </section>
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

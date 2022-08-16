import { Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';
import LogManager from '../../_state/general/LogManager';
import { Error } from '../../topLevelUtil/types/Error';
import { Project } from '../../topLevelUtil/types/Project';

type ProjectNavbarProps = {
  setSelectedProject: Dispatch<SetStateAction<Project | undefined>>;
  setInitialFetchDone?: Dispatch<SetStateAction<boolean>>;
  setError?: Dispatch<SetStateAction<Error | null>>;
};

export default function ProjectNavbar(props: ProjectNavbarProps) {
  return (
    <section>
      <Link
        to={{
          pathname: '/',
        }}
      >
        Projects
      </Link>
      <Link
        to={{
          pathname: '/dashboard',
        }}
      >
        Dashboard
      </Link>
      <Link
        to={{
          pathname: '/dashboard/logs',
        }}
      >
        Logs
      </Link>
      <Link
        to={{
          pathname: '/dashboard/types',
        }}
      >
        Types
      </Link>
      <select
        defaultValue={LogManager.selectedProject!.id}
        onChange={(e) => [
          LogManager.setSelectedProject(
            LogManager.allProjects.find((project) => {
              return project.id === parseInt(e.currentTarget.value);
            }),
          ),
          props.setSelectedProject(
            LogManager.allProjects.find((project) => {
              return project.id === parseInt(e.currentTarget.value);
            }),
          ),
          props.setInitialFetchDone ? props.setInitialFetchDone(false) : null,
          props.setError ? props.setError(null) : null,
        ]}
      >
        {LogManager.allProjects.map((project) => {
          return <option value={project.id}>{project.id}</option>;
        })}
      </select>
    </section>
  );
}

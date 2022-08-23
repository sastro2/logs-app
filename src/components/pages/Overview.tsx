import { useState } from 'react';
import { Link } from 'react-router-dom';
import LogManager from '../../_state/general/LogManager';
import { mockProjects } from '../../mockData/mockProjects';
import { mockTypes } from '../../mockData/mockTypes';
import { Project } from '../../topLevelUtil/types/Project';

export default function Overview() {
  const [projects, setProjects] = useState<Project[]>(mockProjects);

  return (
    <main>
      <section>
        <h3>Your Projects</h3>
        {projects.map((project) => {
          return (
            <Link
              key={project.id}
              to={{
                pathname: '/dashboard',
              }}
            >
              <button onClick={() => LogManager.Init(project, mockTypes)}>
                {project.name}
              </button>
            </Link>
          );
        })}
      </section>
      <section>
        <h3>Create Project</h3>
        <button
          onClick={() =>
            setProjects([
              ...projects,
              {
                id: projects[projects.length - 1].id + 1,
                name: `Project ${projects[projects.length - 1].id + 1}`,
              },
            ])
          }
        >
          create
        </button>
      </section>
    </main>
  );
}

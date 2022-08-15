import { useEffect, useState } from 'react';
import LogManager from '../../_state/general/LogManager';
import { Error } from '../../topLevelUtil/types/Error';
import { LogType } from '../../topLevelUtil/types/LogType';
import ProjectNavbar from '../general/ProjectNavbar';
import { createType, fetchTypes } from './pagesUtil/methods/logTypesMethods';

export default function LogTypes() {
  const [types, setTypes] = useState<LogType[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [selectedProject, setSelectedProject] = useState<number | undefined>(
    LogManager.selectedProject,
  );
  const [typeNameInput, setTypeNameInput] = useState<string>('');
  const [sendImmediatelyChecked, setSendImmediatelyChecked] =
    useState<boolean>(false);

  useEffect(() => {
    fetchTypes(setError, setTypes);
  }, []);

  if (selectedProject === undefined) {
    window.location.href = 'http://localhost:3000';
  }

  return (
    <main>
      <ProjectNavbar />
      <section>
        <h3>Your Types</h3>
        {types.length > 0 ? (
          types.map((type) => {
            return (
              <p key={type.name}>
                {`${type.name}, Send immediately: ${type.sendImmediately}`}
              </p>
            );
          })
        ) : (
          <h4>No types found for project {selectedProject} </h4>
        )}
      </section>
      <section>
        <h3>Create Type</h3>
        <input onChange={(e) => setTypeNameInput(e.currentTarget.value)} />
        <input
          type="checkbox"
          onChange={() => setSendImmediatelyChecked(!sendImmediatelyChecked)}
        />
        {typeNameInput ? (
          <button
            onClick={() => [
              createType(
                typeNameInput,
                selectedProject!,
                sendImmediatelyChecked,
                setError,
              ),
              setTypes([
                ...types,
                {
                  name: typeNameInput,
                  projectId: selectedProject!,
                  sendImmediately: sendImmediatelyChecked,
                },
              ]),
            ]}
          >
            create
          </button>
        ) : (
          <button disabled>create</button>
        )}
        {error ? error.errorMessage : null}
      </section>
    </main>
  );
}

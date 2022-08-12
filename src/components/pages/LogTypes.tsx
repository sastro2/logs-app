import { useState } from 'react';
import { Error } from '../../topLevelUtil/types/Error';
import ProjectNavbar from '../general/ProjectNavbar';
import { createType } from './pagesUtil/methods/logTypesMethods';

export default function LogTypes() {
  const [error, setError] = useState<Error | null>(null);

  return (
    <main>
      <ProjectNavbar />
      <section>
        <h3>Your Types</h3>
      </section>
      <section>
        <h3>Create Type</h3>
        <button onClick={() => createType('test', 1, false, setError)}>
          create
        </button>
        {error ? error.errorMessage : null}
      </section>
    </main>
  );
}

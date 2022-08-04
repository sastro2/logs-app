import { Dispatch, SetStateAction } from 'react';
import { Error } from '../../../../topLevelUtil/types/Error';
import type { Log } from '../../../../topLevelUtil/types/Log';

export const fetchLogs = async (
  currentLogsStateFunc: Dispatch<SetStateAction<Log[]>>,
  errorsStateFunc: Dispatch<SetStateAction<Error | null>>,
) => {
  let response;

  try {
    response = await fetch('https://localhost:44370/Logs', {
      method: 'GET',
      headers: { accept: 'text/plain' },
      mode: 'cors',
    });
  } catch {
    const error = {
      errorMessage: 'Fetching logs failed',
    };

    errorsStateFunc(error);
    return;
  }

  const logs: Log[] = await response.json();

  if (!logs) {
    const error = {
      errorMessage: 'Fetching logs failed',
    };

    errorsStateFunc(error);
    return;
  }

  if (!Array.isArray(logs)) {
    const error = {
      errorMessage: 'Fetch did not return an array',
    };

    errorsStateFunc(error);
    return;
  }

  currentLogsStateFunc(logs);
};

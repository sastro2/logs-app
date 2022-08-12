import { Dispatch, SetStateAction } from 'react';
import { Error } from '../../../../topLevelUtil/types/Error';

export const fetchTypes = async (
  setError: Dispatch<SetStateAction<Error | null>>,
) => {
  let response;

  try {
    response = await fetch('https://localhost:44370/Types/1', {
      method: 'GET',
      mode: 'cors',
    });
  } catch {
    const newError: Error = {
      errorMessage: 'Could not fetch types',
    };

    setError(newError);
  }
};

export const createType = async (
  name: string,
  projectId: number,
  sendImmediately: boolean,
  setError: Dispatch<SetStateAction<Error | null>>,
) => {
  try {
    await fetch('https://localhost:44370/Types', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        projectId: projectId,
        sendImmediately: sendImmediately,
      }),
    });
  } catch {
    const newError: Error = {
      errorMessage: 'Could not create type',
    };

    setError(newError);
    return;
  }
};

import { Error } from '../../../../topLevelUtil/types/Error';

export const validateApiResponse = (res: any[]): Error | null => {
  if (!res) {
    return { errorMessage: 'Fetching failed' };
  }
  if (!Array.isArray(res)) {
    return { errorMessage: 'Fetching failed' };
  }
  return null;
};

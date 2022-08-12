import { Log } from './Log';

export type UserJourney = {
  id: number;
  projectId: number;
  timestamp: number;
  logs: Log[];
};

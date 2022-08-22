import { Dispatch, SetStateAction } from 'react';
import { Error } from '../../../topLevelUtil/types/Error';
import { Log } from '../../../topLevelUtil/types/Log';
import { UserJourney } from '../../../topLevelUtil/types/UserJourney';

export type UserJourneyListProps = {
  currentUserJourneys: UserJourney[];
  error: Error | null;
  setLogsToDisplay: Dispatch<SetStateAction<Log[]>>;
};

export default function UserJourneyList(props: UserJourneyListProps) {
  return (
    <section>
      {props.error
        ? props.error.errorMessage
        : props.currentUserJourneys.map((userJourney) => {
            return (
              <article key={userJourney.id} style={{ display: 'flex' }}>
                <p>
                  {userJourney.logs[userJourney.logs.length - 1].type}
                  {userJourney.logs[userJourney.logs.length - 1].message}
                  {userJourney.logs[userJourney.logs.length - 1].timestamp}
                  {userJourney.logs[userJourney.logs.length - 1].id}
                  {userJourney.logs[userJourney.logs.length - 1].projectId}
                </p>
                <button
                  onClick={() => props.setLogsToDisplay(userJourney.logs)}
                >
                  open
                </button>
              </article>
            );
          })}
    </section>
  );
}

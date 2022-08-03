import { fetchLogs } from './pagesUtil/methods/logsMethods';

function fetch() {
  fetchLogs().then((l) => console.log(l));
}

export default function Logs() {
  fetch();

  return <main></main>;
}

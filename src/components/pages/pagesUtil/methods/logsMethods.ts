export const fetchLogs = async () => {
  const response = await fetch('https://localhost:44370/Logs', {
    method: 'GET',
    headers: { accept: 'text/plain' },
    mode: 'cors',
  });
  console.log(response);
  const response1 = await response.json();
  return response1;
};

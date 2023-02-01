export const createScore = async ({ user, score }) => {
  const requestURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/VMtXKJ13vD2AuGu5jYsU/scores';

  const res = await fetch(requestURL, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify({ user, score }),
  });
  const data = await res.json();

  return { status: res.status, data };
};

export const getScores = async () => {
  const request = new Request('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/VMtXKJ13vD2AuGu5jYsU/scores');

  const res = await fetch(request);
  const data = await res.json();

  return { status: res.status, data };
};
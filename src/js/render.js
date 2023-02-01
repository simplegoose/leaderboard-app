export const render = (data = []) => {
  const tableList = document.querySelector('#table-list');

  let html = '';

  data.forEach((score) => {
    html += `
      <li>${score.user}: ${score.score}</li>
    `;
  });

  tableList.innerHTML = html;
};

export const addListItem = ({ user, score }) => {
  const tableList = document.querySelector('#table-list');

  const listItem = document.createElement('li');

  listItem.innerHTML = `${user}: ${score}`;

  tableList.appendChild(listItem);
};
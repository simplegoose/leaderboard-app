export const render = (data = []) => {
  const tableList = document.querySelector('#table-list');
  const tbody = tableList.querySelector('tbody');

  let html = '';

  data.forEach((score, index) => {
    html += `
      <tr>
        <td>${index + 1}</td>
        <td>${score.user}</td>
        <td>${score.score}</td>
      </tr>
    `;
  });

  tbody.innerHTML = html;
};

export const addListItem = ({ user, score }) => {
  const tableList = document.querySelector('#table-list tbody');
  const tableRows = tableList.querySelectorAll('tr');

  const listItem = document.createElement('tr');

  listItem.innerHTML = `
    <td>${tableRows.length + 1}</td>
    <td>${user}</td>
    <td>${score}</td>
  `;

  tableList.appendChild(listItem);
};
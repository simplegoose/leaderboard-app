import './css/style.css';

const btn = document.querySelector('.btn.refresh');

btn.addEventListener('click', (e) => {
  e.target.blur();
});
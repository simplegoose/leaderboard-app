import { createScore, getScores } from './api.js';
import { addListItem, render } from './render.js';

export const formSubmit = async (e) => {
  e.preventDefault();
  const submitBtn = e.target.querySelector('.submit');
  submitBtn.setAttribute('disabled', true);

  const user = e.target.name.value;
  const score = e.target.score.value;

  const { status } = await createScore({ user, score });

  if (status === 200 || status === 201) {
    addListItem({ user, score });
    submitBtn.removeAttribute('disabled');
    e.target.reset();
  }
};

export const refreshBtnListener = async (e) => {
  e.target.blur();
  e.target.setAttribute('disabled', true);

  const { status, data } = await getScores();

  render(data.result);

  if (status === 200 || status === 201) {
    e.target.removeAttribute('disabled');
  }
};

export const addEventListeners = () => {
  const form = document.querySelector('form');
  const btnRefresh = document.querySelector('.btn.refresh');

  btnRefresh.addEventListener('click', refreshBtnListener);

  form.addEventListener('submit', formSubmit);

  window.addEventListener('load', async () => {
    const { data } = await getScores();

    render(data.result);
  });
};
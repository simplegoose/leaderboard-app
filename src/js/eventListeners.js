import { createScore, getScores } from './api.js';
import { addListItem, render } from './render.js';

export const formSubmit = async (e) => {
  e.preventDefault();
  const submitBtn = e.target.querySelector('.submit');
  submitBtn.setAttribute('disabled', true);

  const user = e.target.name.value;
  const score = e.target.score.value;

  if (!user) {
    submitBtn.removeAttribute('disabled');
    return e.target.name.classList.add('input-invalid');
  }

  if (!score) {
    submitBtn.removeAttribute('disabled');
    return e.target.score.classList.add('input-invalid');
  }

  const { status, data } = await createScore({ user, score });

  if (status === 200 || status === 201) {
    addListItem({ user, score });
    submitBtn.removeAttribute('disabled');
    e.target.reset();
  }

  return data;
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

const inputListener = (e) => {
  if (e.target.value && e.target.classList.contains('input-invalid')) {
    e.target.classList.remove('input-invalid');
  }
};

export const addEventListeners = () => {
  const form = document.querySelector('form');
  const btnRefresh = document.querySelector('.btn.refresh');
  const inputName = document.querySelector('#name');
  const inputScore = document.querySelector('#score');

  inputName.addEventListener('change', inputListener);
  inputScore.addEventListener('change', inputListener);

  btnRefresh.addEventListener('click', refreshBtnListener);

  form.addEventListener('submit', formSubmit);

  window.addEventListener('load', async () => {
    const { data } = await getScores();

    render(data.result);
  });
};
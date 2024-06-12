import { createErrorMessageHTML } from './createErrorMessageHTML';

export const createErrorMessageAnimation = (message) => {
  const errorMessage = createErrorMessageHTML(message);
  const closeBtn = errorMessage.querySelector('a');
  closeBtn.onclick = () => (errorMessage.style.animation = 'closeNotifications .7s ease forwards');
  setTimeout(() => (errorMessage.style.animation = 'closeNotifications .7s ease forwards'), 9700);
};

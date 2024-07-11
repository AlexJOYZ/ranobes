import { createErrorMessageAnimation } from '../animations/createErrorAnimation';
import { dataFromArrToObject } from '../utils/dataFromArrToObject';
import { getDataFromDB } from '../utils/getDataFromDB';
import { getDataFromForm } from '../utils/getDataFromForm';

let countFailedAuth = 0;
const loginForm = document.querySelector('.unauth');
loginForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const data = dataFromArrToObject(getDataFromForm(loginForm).entries());
  const { login: formLogin, password: formPassword } = data;
  console.log(formLogin,formPassword)
  const requiredData = await getDataFromDB('users', 'login', formLogin);
  const { login: userLogin, password: userPassword,id } = requiredData[0] || {};
  if (formLogin === userLogin && formPassword === userPassword) {
    window.localStorage.setItem('userId', id);
    window.location.reload();
  } else if (formLogin === '' || formPassword === '') {
    createErrorMessageAnimation(
      'Warning! Failed to login. The login and password fields cannot be empty, please enter the data.',
    );
  } else if (formLogin.length < 3 || formPassword.length < 3) {
    createErrorMessageAnimation(
      'Warning! Failed to login. The data entry fields must contain information of at least 3 characters in length.',
    );
  } else {
    countFailedAuth++;
    loginForm.password.value = '';
    createErrorMessageAnimation(
      'Warning! Failed to login. You may have entered an incorrect username or password.',
    );
  }
  countFailedAuth >= 5
    ? createErrorMessageAnimation(
        'Attention! The system noticed that you tried to log in to your account more than 5 times, maybe you should click the button Forgot password?',
      )
    : '';
});

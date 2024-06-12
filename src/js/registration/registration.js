import { getDataFromDB } from '../utils/getDataFromDB';
import { createErrorMessageAnimation } from '../animations/createErrorAnimation';
import { dataFromArrToObject } from '../utils/dataFromArrToObject';
import { specificSymbols } from '../const/CONST';
import { getDataFromForm } from '../utils/getDataFromForm';

const registrationForm = document.querySelector('.registration-form');
const registrationLoginParent = document.querySelector('.registration-login');
const registrationCheckButton = registrationLoginParent?.querySelector('a');
const resulRegistrationLogin = registrationLoginParent?.querySelector('div');

const sendDataToServer = async (data) => {
  const dataFiltered = data.filter((element) => element[0] !== 'passwordConfirm');
  const { login, email, password } = dataFromArrToObject(dataFiltered);
  const userData = JSON.stringify({
    login: login,
    email: email,
    password: password,
    isAdmin: false,
    novelColections: {
      Viewed: [],
      ReadingNow: [],
      WillRead: [],
      Awaiting: [],
      Delayed: [],
      Dropped: [],
      Finished: [],
    },
  });
  await fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: { 'Content-Type': 'multipart/form-data' },
    body: userData,
  });
};

const showRegistrationResult = (textResult, colorResult = 'red') => {
  registrationLoginParent.classList.add('registration-text');
  resulRegistrationLogin.className = '';
  resulRegistrationLogin.classList.add(colorResult);
  resulRegistrationLogin.textContent = textResult;
};

const checkLogin = async () => {
  const data = [...getDataFromForm(registrationForm).entries()];
  const { login } = dataFromArrToObject(data);
  const users = await getDataFromDB('users');
  if (!(login.length >= 3)) {
    showRegistrationResult('Invalid length of the name. Username must be from 3 to 30 characters!');
    return true;
  } else if (specificSymbols.some((item) => login.includes(item))) {
    showRegistrationResult('You are using an invalid name!');
    return true;
  } else if (users.some((item) => item.login === login)) {
    showRegistrationResult('This name is already registered. Please, try another one.');
    return true;
  } else {
    showRegistrationResult('You can use this name to register', 'green');
    return false;
  }
};
!!registrationCheckButton ? (registrationCheckButton.onclick = checkLogin) : '';

const checkEmail = async (email) => {
  const users = await getDataFromDB('users');
  if (users.some((item) => item.email === email)) {
    createErrorMessageAnimation('This email is already registered. Please, try another one.');
    return true;
  } else {
    return false;
  }
};

const checkPassword = async (password, passwordConfirm) => {
  if (!(password.length >= 6)) {
    createErrorMessageAnimation('The password must be at least 6 characters!');
    return true;
  } else if (!specificSymbols.some((item) => password.includes(item))) {
    createErrorMessageAnimation('The password must contain special characters such as !@#$...');
    return true;
  } else if (password !== passwordConfirm) {
    createErrorMessageAnimation('Both passwords must match');
    return true;
  } else {
    return false;
  }
};

const checkDataForRegistration = async (data) => {
  const { email, password, passwordConfirm } = dataFromArrToObject(data);

  return (
    (await checkLogin()) ||
    (await checkEmail(email)) ||
    (await checkPassword(password, passwordConfirm))
  );
};

registrationForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = [...getDataFromForm(registrationForm).entries()];
  if (!(await checkDataForRegistration(data))) {
    sendDataToServer(data);
    const { login } = dataFromArrToObject(data);
    const { id } = (await getDataFromDB('users', 'login', login))[0];
    window.localStorage.setItem('userId', id);
    window.localStorage.setItem('registrationRes', true);
    setTimeout(
      () => (window.location = 'http://localhost:3500/registration/result.html?redirect=true'),
      300,
    );
  } else {
    window.localStorage.setItem('registrationRes', false);
    // setTimeout(
    //   // () => (window.location = 'http://localhost:3500/registration/result.html?redirect=true'),
    //   () => 10000,
    // );
  }
});

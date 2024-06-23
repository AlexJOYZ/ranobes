import { createErrorMessageAnimation } from '../animations/createErrorAnimation';
import { checkPassword } from '../registration/registration';
import { getDataFromDB } from '../utils/getDataFromDB';
import { updateTheme } from './updateTheme';

export const updateDataForAccount = (form) => {
  const inputEmail = form.email;
  const inputOldPassword = form['old-password'];
  const inputNewPassword = form['new-password'];
  const inputRepeatPassword = form['repeat-password'];

  const aboutInput = document.querySelector('#about-info');


  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const users = await getDataFromDB('users');
    const userId = window.localStorage.getItem('userId');
    const { email: userEmail, password } = (await getDataFromDB('users', 'id', userId))[0];
    const sortedUser = users.filter(
      (user) => user.email === inputEmail.value && userEmail !== inputEmail.value,
    );

    if (sortedUser.length > 0) {
      createErrorMessageAnimation('This email is already registered. Please, try another one.');
    } else if (sortedUser.length === 0 &&inputEmail.value!==userEmail) {
      await fetch(`http://localhost:3000/users/${userId}`, {
        method: 'PATCH',
        body: JSON.stringify({
          email: inputEmail.value,
        }),
      });
      window.localStorage.setItem('updateStatus', 'success');
      window.location.reload();
    }
    if (
      inputOldPassword.value !== '' &&
      inputNewPassword.value !== '' &&
      inputRepeatPassword.value !== ''
    ) {
      if (inputOldPassword.value === password) {
        if (!(await checkPassword(inputNewPassword.value, inputRepeatPassword.value))) {
          await fetch(`http://localhost:3000/users/${userId}`, {
            method: 'PATCH',
            body: JSON.stringify({
              password: inputRepeatPassword.value,
            }),
          });
          window.localStorage.setItem('updateStatus', 'success');
          window.location.reload();
        }
      } else {
        createErrorMessageAnimation(
          'Warning! Failed to update. You may have entered an incorrect password.',
        );
      }
    };
    if (!!aboutInput.value){
      await fetch(`http://localhost:3000/users/${userId}`, {
        method: 'PATCH',
        body: JSON.stringify({
          aboutSelf: aboutInput.value,
        }),
      });
      window.location.reload();

    }
    updateTheme()
  });
};

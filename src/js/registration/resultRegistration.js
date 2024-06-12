const registrationResultPage = document.querySelector('.registration-result');


window.localStorage.getItem('registrationRes') ==="true"
  ? registrationResultPage?.classList.add('reg-suc')
  : registrationResultPage?.classList.add('reg-fail');

window.localStorage.removeItem('registrationRes');

const changeThemes = (event) => {
  const themeLink = event.target.closest('a');
  window.localStorage.setItem('themes', themeLink.id);
  window.location.reload();
};

export const setThemes = () => {
  const documentElement = document.querySelector('html');
  const buttonTheme = document.querySelector('.header__theme');
  const themesPopUp = document.querySelector('.themes__pop-up');
  const themeBtns = themesPopUp.querySelectorAll('a');
  const theme = window.localStorage.getItem('themes');
  if (theme == 'green') {
    buttonTheme.onclick = () => {
      window.localStorage.removeItem('themes');
      window.location.reload();
    };
  }
  if (!!theme) {
    const themeList = themesPopUp.querySelectorAll('li');
    const themeLink = document.getElementById(theme);
    const themeItem = themeLink.closest('li');
    themeList.forEach((item) => {
      item !== themeItem ? item.classList.remove('active') : item.classList.add('active');
    });
    documentElement.classList = '';
    documentElement.classList.add(theme);
  }
  themeBtns.forEach((themeBtn) => (themeBtn.onclick = changeThemes));
};

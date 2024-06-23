export const updateTheme = () => {
  const themesSelect = document.querySelector('.themes-select');
  const themeName = themesSelect.value.toLowerCase();
  if (!(themeName === window.localStorage.getItem('themes'))) {
    window.localStorage.setItem('themes', themeName);
    window.location.reload();
  } else {
    console.log(1);
  }
};

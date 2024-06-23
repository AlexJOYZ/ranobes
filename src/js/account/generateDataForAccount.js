import { getDataFromDB } from '../utils/getDataFromDB';
import { showModalWindow } from './showModalWindow';
import { updateDataForAccount } from './updateDataForAccount';

const changeTab = (currentTab, previousTab, currentLink, previousLink) => {
  currentTab.classList.add('active-tab');
  previousTab.classList.remove('active-tab');
  currentLink.classList.add('active');
  previousLink.classList.remove('active');
};

export const generateDataForAccount = async () => {
  showModalWindow();
  if (window.location.href.includes('account')) {
    const nickNameSpan = document.querySelector('.nickname');
    const userInfoTop = document.querySelector('.user-info-top');
    const headingAccount = document.querySelector('h1');
    const userTabs = document.querySelector('.user-tabs');
    const tabInfoLink = document.querySelector('.info-link');
    const tabSettingsLink = document.querySelector('.settings-link');
    const tabContentInfo = document.querySelector('.tab-info');
    const rankUser = document.querySelector('.rank');
    const tabContentSettings = document.querySelector('.form-account');
    const emailInput = tabContentSettings.querySelector('.input-email');
    const userId = window.localStorage.getItem('userId');
    const { login, isAdmin, email, aboutSelf } = (await getDataFromDB('users', 'id', userId))[0];

    const theme = window.localStorage.getItem('themes');
    const themesSelect = document.querySelector('.themes-select');
    const themesOptions = themesSelect.querySelectorAll('option');

    const aboutText = document.querySelector('.about-user');
    document.title = `${login} | Ranobes`;
    nickNameSpan.textContent = login;
    headingAccount.textContent = `User: ${login}`;
    !!aboutSelf ? (aboutText.textContent = aboutSelf) : '';

    emailInput.value = email;

    userTabs.addEventListener('click', (event) => {
      if (event.target.textContent.includes('Information')) {
        changeTab(tabContentInfo, tabContentSettings, event.target, tabSettingsLink);
      } else if (event.target.textContent.includes('Settings')) {
        changeTab(tabContentSettings, tabContentInfo, event.target, tabInfoLink);
      }
    });
    if (isAdmin) {
      rankUser.textContent = 'Admin';
      userInfoTop.classList.add('admin');
    } else rankUser.textContent = 'Visitors';
    themesOptions.forEach((themesOption) => {
      if (!!theme) {
        themesOption.classList.contains(theme)
          ? themesOption.setAttribute('selected', 'true')
          : themesOption.removeAttribute('selected');
      }
    });
    updateDataForAccount(tabContentSettings);
  }
};

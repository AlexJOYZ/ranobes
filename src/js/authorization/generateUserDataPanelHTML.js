import { getDataFromDB } from '../utils/getDataFromDB';

export const generateUserDataPanelHTML = async () => {
  const loginPanel = document.querySelector('.login__panel');
  const loginName = loginPanel.querySelector('.login-title');
  const countBookmarksSpan = loginPanel.querySelector('.count-bookmarks');
  const logoutBtn = loginPanel.querySelector('.btn-logout');

  const userId = window.localStorage.getItem('userId');
  const userData = (await getDataFromDB('users', 'id', userId))[0];
  const { login, isAdmin, novelColections } = userData;
  isAdmin ? loginPanel.classList.add('admin') : '';
  loginName.textContent = login;
  const nameColections = Object.keys(novelColections);
  let countBookmarks = 0;
  nameColections.forEach((collection) => {
    countBookmarks += novelColections[collection].length;
  });
  countBookmarksSpan.textContent = countBookmarks;
  logoutBtn.onclick = () => {
    window.localStorage.removeItem('userId');
    window.location.reload();
  };
};

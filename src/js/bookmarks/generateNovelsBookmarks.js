import { countFolders } from '../utils/countNovelInCollection';
import { getDataFromDB } from '../utils/getDataFromDB';

export const generateNovelsBookmarks = async () => {
  let novels = document.querySelectorAll('.novel');

  const userId = window.localStorage.getItem('userId');
  const { novelColections } = (await getDataFromDB('users', 'id', userId))[0];
  novels.forEach((novel) => {
    let novelName = novel.querySelector('.novel__link');
    !!novelName
      ? (novelName = novelName.textContent)
      : (novelName = novel.querySelector('.novel-title').textContent);
    const bookmarkBtnName = novel.querySelector('.bookmark__title');
    const listBookmarks = novel.querySelectorAll('.popup-item');
    const countFolder = countFolders(novelColections, novelName);
    if (countFolder === 1) {
      const nameCollection = countFolders(novelColections, novelName, 'searchNovelCollection');
      bookmarkBtnName.textContent = nameCollection;
    } else if (countFolder === 0) {
      bookmarkBtnName.textContent = 'Bookmark';
    } else {
      bookmarkBtnName.textContent = `${countFolder} folders`;
    }
    listBookmarks.forEach((collectionName) => {
      const nameCollection = collectionName.textContent.trim();
      let nameCollectionForJSON;
      nameCollection.split(' ').length === 2
        ? (nameCollectionForJSON =
            nameCollection.split(' ')[0] +
            nameCollection.split(' ')[1][0].toUpperCase() +
            nameCollection.split(' ')[1].slice(1))
        : (nameCollectionForJSON = nameCollection);
      for (const key in novelColections) {
        console.log(nameCollectionForJSON);
        if (novelColections[key].includes(novelName) && key === nameCollectionForJSON) {
          collectionName.classList.add('active');
        }
      }
    });
  });
};

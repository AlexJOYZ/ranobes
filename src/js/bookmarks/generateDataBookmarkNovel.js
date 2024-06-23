import { getDataFromDB } from '../utils/getDataFromDB';
import { addNovelsInBookmarks } from './addNovelsInBookmarks';
import { generateBookmarkForAccountHTML } from './generateBookmarkForAccountHTML';
import { generateNovelsBookmarks } from './generateNovelsBookmarks';

const nameForJSON = (str) => {
  let nameCollectionForJSON;
  str.split(' ').length === 2
    ? (nameCollectionForJSON =
        str.split(' ')[0] + str.split(' ')[1][0].toUpperCase() + str.split(' ')[1].slice(1))
    : (nameCollectionForJSON = str);
  return nameCollectionForJSON;
};
const toggleClassLink = (selectedLink, masLinks) => {
  masLinks.forEach((link) => {
    selectedLink === link ? link.classList.add('active') : link.classList.remove('active');
  });
};
const updateData = async (userId) => {
  const { novelColections } = (await getDataFromDB('users', 'id', userId))[0];
  const setNovels = new Set();
  const countNovelObj = {};
  for (const key in novelColections) {
    novelColections[key].forEach((novel) => setNovels.add(novel));
    countNovelObj[key] = novelColections[key].length;
  }
  const masNovels = Array.from(setNovels);
  return { masNovels, novelColections, countNovelObj };
};
const updateCountInSpan = (bookmarkName, countNovelObject) => {
  let nameCollection = nameForJSON(bookmarkName.textContent.trim());
  if (nameCollection !== 'All') {
    const countSpan = bookmarkName.querySelector('span');
    nameCollection = nameCollection.replace(countSpan.textContent.trim(), '');
    countSpan.textContent = countNovelObject[nameCollection];
  }
};

export const generateDataBookmarkNovel = async () => {
  if (window.location.href.includes('bookmarks')) {
    const bookmarkName = document.querySelector('.bookmark-name');
    const bookmarksTabContentParent = document.querySelector('.bookmarks-tab-content');
    const bookmarksNavigation = document.querySelector('.bookmarks-nav');
    const bookmarkLinks = bookmarksNavigation.querySelectorAll('.bookmark-link');
    const userId = window.localStorage.getItem('userId');
    const { masNovels, countNovelObj } = await updateData(userId);
    masNovels.forEach((novel) => generateBookmarkForAccountHTML(novel));
    setTimeout(async () => {
      await generateNovelsBookmarks();
      addNovelsInBookmarks(true);
    }, 100);
    bookmarkLinks.forEach((link) => {
      link.addEventListener('click', async (event) => {
        const { masNovels, novelColections } = await updateData(userId);
        toggleClassLink(event.target, bookmarkLinks);
        let selectedTab = nameForJSON(link.textContent.trim());
        if (!selectedTab.includes('All')) {
          const countSpanText = link.querySelector('span').textContent.trim();
          selectedTab = selectedTab.replace(countSpanText, '');
          const titleTab = document.createElement('h3');
          titleTab.textContent = selectedTab;
          bookmarksTabContentParent.innerHTML = '';
          bookmarksTabContentParent.appendChild(titleTab);
          bookmarkName.textContent = ` » ${selectedTab}`;
          if (novelColections[selectedTab].length !== 0) {
            novelColections[selectedTab].forEach((novel) => generateBookmarkForAccountHTML(novel));
          } else {
            const alertDIV = document.createElement('div');
            alertDIV.classList.add('alert');
            alertDIV.textContent = ' No bookmarks have been created yet ';
            bookmarksTabContentParent.appendChild(alertDIV);
          }
        } else {
          bookmarksTabContentParent.innerHTML = '';
          masNovels.forEach(async (novel) => await generateBookmarkForAccountHTML(novel));
          bookmarkName.textContent = ``;
        }
        setTimeout(async () => {
          await generateNovelsBookmarks();
          addNovelsInBookmarks(true);
        }, 50);
        bookmarkLinks.forEach(async (bookmarkName) => {
          const { countNovelObj: countNovelObject } = await updateData(userId);
          updateCountInSpan(bookmarkName, countNovelObject);
        });
      });

      updateCountInSpan(link, countNovelObj);
    });
  }
};

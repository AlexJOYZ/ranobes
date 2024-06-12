import { createErrorMessageAnimation } from '../animations/createErrorAnimation';
import { countFolders } from '../utils/countNovelInCollection';
import { getDataFromDB } from '../utils/getDataFromDB';


const showErrorAnimations = () =>
  createErrorMessageAnimation("You don't have access, go through authorization");

const switchPopUp = (event) => {
  const bookmarkParent = event.target.closest('.bookmark-container');
  const popUp = bookmarkParent.querySelector('.bookmark-popup');
  popUp.classList.toggle('active-poup');
};

const closePopUp = (event) => {
  const bookmarkParent = event.target.closest('.bookmark-container');
  const popUp = bookmarkParent.querySelector('.bookmark-popup');
  setTimeout(() => popUp.classList.remove('active-poup'), 500);
};

const addBookmarkToDB = async (event) => {
  const bookmarkName = event.target.closest('a');
  const currentNovel = bookmarkName.closest('.novel');
  const bookmarkBtn = currentNovel.querySelector('.bookmark__title');
  const nameNovel = currentNovel.querySelector('.novel__link').textContent;

  bookmarkName.classList.toggle('active');
  const userId = window.localStorage.getItem('userId');
  const nameCollection = bookmarkName.textContent.trim();
  let nameCollectionForJSON;
  nameCollection.split(' ').length === 2
    ? (nameCollectionForJSON =
        nameCollection.split(' ')[0] +
        nameCollection.split(' ')[1][0].toUpperCase() +
        nameCollection.split(' ')[1].slice(1))
    : (nameCollectionForJSON = nameCollection);

  const { novelColections } = (await getDataFromDB('users', 'id', userId))[0];
  let { [nameCollectionForJSON]: newnameCollection, ...mas } = novelColections;
  if (newnameCollection.includes(nameNovel)) {
    newnameCollection = newnameCollection.filter((novel) => novel !== nameNovel);
  } else {
    newnameCollection.push(nameNovel);
  }
  const novelCollections = {
    [nameCollectionForJSON]: newnameCollection,
    ...mas,
  };
  const countFolder = countFolders(novelCollections, nameNovel);

  if (countFolder === 1) {
    const nameCollection = countFolders(novelCollections, nameNovel, 'searchNovelCollection');
    bookmarkBtn.textContent = nameCollection;
  } else if (countFolder === 0) {
    bookmarkBtn.textContent = 'Bookmark';
  } else {
    bookmarkBtn.textContent = `${countFolder} folders`;
  }
  const newNovelCollection = JSON.stringify({
    novelColections: {
      ...novelCollections,
    },
  });
  await fetch(`http://localhost:3000/users/${userId}`, {
    method: 'PATCH',
    body: newNovelCollection,
  });
};
export const addNovelsInBookmarks = (isAuth) => {
  const bookmarkBtns = document.querySelectorAll('.btn-bookmark');
  const bookmarksPopUp = document.querySelectorAll('.bookmark-popup');
  const listsBookmarks = document.querySelectorAll('.popup-list');
  console.log(bookmarkBtns,bookmarksPopUp,listsBookmarks)
  if (isAuth) {
    bookmarkBtns?.forEach((button) => button?.addEventListener('click', switchPopUp));
    listsBookmarks?.forEach((listBookmarks) =>
      listBookmarks?.addEventListener('click', addBookmarkToDB),
    );
    bookmarksPopUp?.forEach((popUp) => popUp?.addEventListener('mouseleave', closePopUp));
  } else {
    bookmarkBtns?.forEach((button) => button?.addEventListener('click', showErrorAnimations));
  }
};

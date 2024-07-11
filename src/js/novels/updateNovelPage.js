import { addNovelsInBookmarks } from '../bookmarks/addNovelsInBookmarks';
import { generateNovelsBookmarks } from '../bookmarks/generateNovelsBookmarks';
import { generateNovelHTML } from '../utils/generateNovelHTML';
import { generateNovelNavigation } from './generateNovelNavigation';

export const updateNovelPage = async (novels, pageNumber) => {
  const novelsParent = document.querySelector('.novel-content');

  const countPages = Math.ceil(novels.length / 10);

  window.scroll({
    top: 0,
    behavior: 'smooth',
  });
  novelsParent.innerHTML = '';
  for (let i = 0; i < 10; i++) {
    if (!!novels[i + 10 * pageNumber]) generateNovelHTML(novels[i + 10 * pageNumber], novelsParent);
  }
  if (novels.length === 0) {
    const blockInner = document.createElement('div');
    blockInner.classList.add('block');
    const errorMessage = document.createElement('div');
    errorMessage.classList.add('error-message');
    const errorHeading = document.createElement('h3');
    errorHeading.textContent = 'Information';
    const errorParagraph = document.createElement('p');
    errorParagraph.textContent = `No novels found for this request.`;
    errorMessage.appendChild(errorHeading);
    errorMessage.appendChild(errorParagraph);
    blockInner.appendChild(errorMessage);
    novelsParent.appendChild(blockInner);

    
    document.querySelector('.novel-navigation')?.remove()
    
  } else {
    addNovelsInBookmarks(true);
    generateNovelsBookmarks();
    generateNovelNavigation(countPages, pageNumber, novels);
  }
};

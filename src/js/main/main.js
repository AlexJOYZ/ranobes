import { generateDataForMainPage } from '../newNovels/generateDataForMainPage';
import { addNovelsInBookmarks } from '../bookmarks/addNovelsInBookmarks';
import { generateUserDataPanelHTML } from '../authorization/generateUserDataPanelHTML';
import { isAuthorized } from '../authorization/isAuthorized';
import { generateNovelsBookmarks } from '../bookmarks/generateNovelsBookmarks';
import { generateDataForAside } from './aside/generateDataForAside';
import { searchNovelsMenu } from '../menu/searchNovelsMenu';
import { generateDataForTags } from '../tags/generateDataForTags';

const page = document.querySelector('.page');
const newNovelsDIV = document.querySelector('.new__novels');
const newChaptersDIV = document.querySelector('.new__chapters');
!!newNovelsDIV && !!newChaptersDIV ? await generateDataForMainPage() : '';
const asideContent = document.querySelector('.aside__top-content');
!!asideContent?await generateDataForAside():await generateDataForAside('small');

await searchNovelsMenu()

await generateDataForTags()

if (isAuthorized()) {
  const novel  = document.querySelector('.novel')
  page.classList.add('authorized');
  await generateUserDataPanelHTML();
  !!novel?await generateNovelsBookmarks():console.log(novel);
  addNovelsInBookmarks(true);
} else {
  addNovelsInBookmarks(false);
}

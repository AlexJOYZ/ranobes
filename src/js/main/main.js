import { generateDataForMainPage } from '../newNovels/generateDataForMainPage';
import { addNovelsInBookmarks } from '../bookmarks/addNovelsInBookmarks';
import { generateUserDataPanelHTML } from '../authorization/generateUserDataPanelHTML';
import { isAuthorized } from '../authorization/isAuthorized';
import { generateNovelsBookmarks } from '../bookmarks/generateNovelsBookmarks';
import { generateDataForAside } from './aside/generateDataForAside';
import { searchNovelsMenu } from '../menu/searchNovelsMenu';
import { generateDataForTags } from '../tags/generateDataForTags';
import { generateDataBookmarkNovel } from '../bookmarks/generateDataBookmarkNovel';
import { generateDataForAccount } from '../account/generateDataForAccount';
import { submitFormSort } from '../novels/submitFormSort';
import { generateDataForMenu } from '../menu/generateDataForMenu';

const page = document.querySelector('.page');
const loader = document.querySelector('.loader-inner');
window.addEventListener('load', async () => {
  loader.classList.add('hide');
});
const newNovelsDIV = document.querySelector('.new__novels');
const newChaptersDIV = document.querySelector('.new__chapters');
!!newNovelsDIV && !!newChaptersDIV ? await generateDataForMainPage() : '';
const asideContent = document.querySelector('.aside__top-content');
!!asideContent ? await generateDataForAside() : await generateDataForAside('small');

await searchNovelsMenu();
await generateDataForMenu()
await generateDataForTags();

submitFormSort();
if (isAuthorized()) {
  const novel = document.querySelector('.novel');
  const bookmarkNovel = document.querySelector('.bookmark-novel');
  const novelContentParent = document.querySelector('.novel-content');
  await generateDataBookmarkNovel();
  page.classList.add('authorized');
  generateDataForAccount();
  await generateUserDataPanelHTML();
  !!novel || !!bookmarkNovel || !!novelContentParent
    ? await generateNovelsBookmarks()
    : console.log(novel);
  addNovelsInBookmarks(true);
} else {
  addNovelsInBookmarks(false);
}

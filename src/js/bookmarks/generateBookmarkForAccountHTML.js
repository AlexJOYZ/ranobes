import { getDataFromDB } from '../utils/getDataFromDB';
import currentStarIcon from '../../img/stars-rate-current.svg';
import unitStarIcon from '../../img/stars-rate.svg';
import bookmarkIcon from '../../img/bookmark-icon.svg';
import novelBookmarkIcon from '../../img/bookmarks.png';
import bookmarkNoteCornerIconDark from '../../img/bookmark-note-corner-dark.svg';
import bookmarkNoteCornerIconGreen from '../../img/bookmark-note-corner-green.svg';
import { calculateDiffTimeFromPresent } from '../utils/calculateDiffTimeFromPresent';

export const generateBookmarkForAccountHTML = async (novel) => {
  const { title, posterName, uploadDate, stars, status, totalChapters, availableChapters } = (
    await getDataFromDB('novels', 'title', novel)
  )[0];
  const theme = window.localStorage.getItem('themes')
  const bookmarksTabContentParent = document.querySelector('.bookmarks-tab-content');
  const bookmarkNovelDIV = document.createElement('div');
  bookmarkNovelDIV.classList.add('bookmark-novel');

  const novelTopDIV = document.createElement('div');
  novelTopDIV.classList.add('novel-top');

  const novelImg = document.createElement('img');
  const novelImgLink = require(`../../img/${posterName}`);
  novelImg.classList.add('novel-img');
  novelImg.setAttribute('alt', 'novel image');
  novelImg.setAttribute('src', novelImgLink);
  novelTopDIV.appendChild(novelImg);

  const novelInfoDIV = document.createElement('div');
  novelInfoDIV.classList.add('novel-info');

  const novelTitle = document.createElement('a');
  novelTitle.classList.add('novel-title');
  novelTitle.textContent = title;
  novelInfoDIV.appendChild(novelTitle);
  const novelSubTitle = document.createElement('a');
  novelSubTitle.classList.add('novel-sub-title');
  novelSubTitle.textContent = `Chapter ${availableChapters}`;
  novelInfoDIV.appendChild(novelSubTitle);

  const novelTools = document.createElement('div');
  novelTools.classList.add('novel-tools');

  const novelRateDIV = document.createElement('div');
  novelRateDIV.classList.add('novel__rate-date');
  const unitRatingDIV = document.createElement('div');
  unitRatingDIV.classList.add('unit__rating');
  const currentRatingDIV = document.createElement('div');
  currentRatingDIV.classList.add('current__rating');
  currentRatingDIV.style.width = `${stars * 20}%`;
  for (let i = 0; i < 5; i++) {
    const starImg = document.createElement('img');
    starImg.setAttribute('src', currentStarIcon);
    starImg.setAttribute('alt', `star-rate`);
    currentRatingDIV.appendChild(starImg);
  }
  unitRatingDIV.appendChild(currentRatingDIV);
  for (let i = 0; i < 5; i++) {
    const starImg = document.createElement('img');
    starImg.setAttribute('src', unitStarIcon);
    starImg.setAttribute('alt', `star-rate`);
    unitRatingDIV.appendChild(starImg);
  }
  novelRateDIV.appendChild(unitRatingDIV);
  novelTools.appendChild(novelRateDIV);

  const novelMetaDIV = document.createElement('div');
  novelMetaDIV.classList.add('novel-meta');
  const novelUpdateDIV = document.createElement('div');
  novelUpdateDIV.classList.add('novel-update');
  const updateImg = document.createElement('i');
  updateImg.classList.add('fas', 'fa-sync');
  novelUpdateDIV.appendChild(updateImg);
  const updateSpan = document.createElement('span');
  updateSpan.classList.add('up__date');
  const { years, months, days, hours, minutes } = calculateDiffTimeFromPresent(uploadDate);
  if (years === 0 && months === 0 && days === 0 && hours > 0) {
    updateSpan.textContent = `${hours} ${hours > 1 ? 'hours' : 'hour'} ago`;
  } else if (years === 0 && months === 0 && days > 0) {
    updateSpan.textContent = `${days} ${days > 1 ? 'days' : 'day'} ago`;
  } else if (years === 0 && months > 0) {
    updateSpan.textContent = `${months} ${months > 1 ? 'months' : 'month'} ago`;
  } else if (years > 0) {
    updateSpan.textContent = `${years} ${years > 1 ? 'years' : 'year'} ago`;
  } else {
    updateSpan.textContent = `${minutes} ${minutes > 1 ? 'minutes' : 'minute'} ago`;
  }
  novelUpdateDIV.appendChild(updateSpan);
  novelMetaDIV.appendChild(novelUpdateDIV);
  const novelStatusDIV = document.createElement('div');
  novelStatusDIV.classList.add('novel-status');
  const statusImg = document.createElement('i');
  let statusText;
  if (status === 'Completed') {
    statusImg.classList.add('fas', 'fa-clipboard-check');
    statusText = `${totalChapters} chapters`;
  } else {
    statusImg.classList.add('fas', 'fa-hourglass-end');
    statusText = `${availableChapters} ≥ ${totalChapters}+`;
  }
  novelStatusDIV.appendChild(statusImg);
  novelStatusDIV.append(statusText);
  novelMetaDIV.appendChild(novelStatusDIV);
  novelTools.appendChild(novelMetaDIV);
  novelInfoDIV.appendChild(novelTools);
  novelTopDIV.appendChild(novelInfoDIV);

  const novelBookmarksInner = document.createElement('div');
  novelBookmarksInner.classList.add('bookmark-inner');

  const novelBookmarksDIV = document.createElement('div');
  novelBookmarksDIV.classList.add('bookmark-container');

  const novelBookmarkBtn = document.createElement('a');
  novelBookmarkBtn.classList.add('btn-bookmark');
  const novelBookmarkDIV = document.createElement('div');
  novelBookmarkDIV.classList.add('bookmark');
  const novelBookmarkImg = document.createElement('img');
  novelBookmarkImg.setAttribute('src', bookmarkIcon);
  novelBookmarkImg.setAttribute('alt', 'bookmark');
  novelBookmarkDIV.appendChild(novelBookmarkImg);
  const novelBookmarkTitle = document.createElement('p');
  novelBookmarkTitle.classList.add('bookmark__title');
  novelBookmarkTitle.textContent = 'Bookmark';
  novelBookmarkDIV.appendChild(novelBookmarkTitle);
  novelBookmarkBtn.appendChild(novelBookmarkDIV);
  novelBookmarksDIV.appendChild(novelBookmarkBtn);

  const novelBookmarkPopUp = document.createElement('div');
  novelBookmarkPopUp.classList.add('bookmark-popup');
  const novelPopUpList = document.createElement('div');
  novelPopUpList.classList.add('popup-list');
  const bookmarksNames = [
    'Viewed',
    'Reading now',
    'Will read',
    'Awaiting',
    'Delayed',
    'Dropped',
    'Finished',
  ];
  bookmarksNames.forEach((bookmarkName) => {
    const popUpItem = document.createElement('a');
    popUpItem.classList.add('popup-item');
    const popUpImgDIV = document.createElement('div');
    popUpImgDIV.classList.add('poup-img');
    const popUpImg = document.createElement('img');
    popUpImg.setAttribute('src', novelBookmarkIcon);
    popUpImg.setAttribute('alt', 'dote picture');
    popUpImg.classList.add('poup-img-dote');
    popUpImgDIV.appendChild(popUpImg);
    popUpItem.appendChild(popUpImgDIV);
    popUpItem.append(bookmarkName);
    novelPopUpList.appendChild(popUpItem);
  });
  novelBookmarkPopUp.appendChild(novelPopUpList);

  novelBookmarksDIV.appendChild(novelBookmarkPopUp);

  novelBookmarksInner.appendChild(novelBookmarksDIV);
  novelTopDIV.appendChild(novelBookmarksInner);

  const bookmarkSmDIV = document.createElement('div');
  bookmarkSmDIV.classList.add('bookmark-sm');
  const bookmarkLine = document.createElement('div');
  bookmarkLine.classList.add('bookmark-line');
  bookmarkLine.append('bookmark');
  const lineDIV = document.createElement('div');
  lineDIV.classList.add('line');
  bookmarkLine.appendChild(lineDIV);
  bookmarkSmDIV.appendChild(bookmarkLine);
  novelTopDIV.appendChild(bookmarkSmDIV);
  bookmarkNovelDIV.appendChild(novelTopDIV);

  const novelNoteDIV = document.createElement('div');
  novelNoteDIV.classList.add('novel-note');
  const noteImg = document.createElement('img');
  noteImg.setAttribute('alt', 'note corner');
  if (!!theme && theme==='green') noteImg.setAttribute('src', bookmarkNoteCornerIconGreen)
  else noteImg.setAttribute('src', bookmarkNoteCornerIconDark);
  novelNoteDIV.appendChild(noteImg)
  novelNoteDIV.append('Double click here to edit a note...')
  bookmarkNovelDIV.appendChild(novelNoteDIV)
  bookmarksTabContentParent.appendChild(bookmarkNovelDIV);
};

import { calculateDiffTimeFromPresent } from '../utils/calculateDiffTimeFromPresent';
import novelBookmarkIcon from '../../img/bookmarks.png';
import currentStarIcon from '../../img/stars-rate-current.svg';
import unitStarIcon from '../../img/stars-rate.svg';
import bookmarkIcon from '../../img/bookmark-icon.svg';

export const generateNovelHTML = (novel,novelsParent) => {
  const { title, tags, posterName, description, uploadDate, stars } = novel;
  const novelArticle = document.createElement('article');
  novelArticle.classList.add('novel');

  const novelInfoDIV = document.createElement('div');
  novelInfoDIV.classList.add('novel__info', 'block');

  const novelImgLink = document.createElement('a');
  novelImgLink.setAttribute('href', '#');
  const novelImg = document.createElement('img');
  const novelImageLink = require(`../../img/${posterName}`);
  novelImg.setAttribute('src', novelImageLink);
  novelImg.setAttribute('alt', `Novel cover`);
  novelImg.classList.add('novel__img');
  novelImgLink.appendChild(novelImg);

  novelInfoDIV.appendChild(novelImgLink);

  const novelTextDIV = document.createElement('div');
  novelTextDIV.classList.add('novel__text');

  const novelTitleH2 = document.createElement('h2');
  novelTitleH2.classList.add('novel__title');
  const novelTitleLink = document.createElement('a');
  novelTitleLink.setAttribute('href', '#');
  novelTitleLink.classList.add('novel__link');
  novelTitleLink.textContent = title;
  novelTitleH2.appendChild(novelTitleLink);

  novelTextDIV.appendChild(novelTitleH2);

  const novelTags = document.createElement('p');
  novelTags.classList.add('novel__tags');
  let tagsText = '';
  tags.forEach((tag, index) => {
    if (index >= 9) return;
    else if (index === tags.length - 1) tagsText += `${tag}`;
    else if (index === 8) tagsText += `${tag}...`;
    else tagsText += `${tag}, `;
  });
  novelTags.textContent = tagsText;
  novelTextDIV.appendChild(novelTags);

  const novelDescriptionDIV = document.createElement('div');
  novelDescriptionDIV.classList.add('novel__description');
  const novelDescriptionText = document.createElement('p');
  novelDescriptionText.textContent = description;
  novelDescriptionDIV.appendChild(novelDescriptionText);
  const novelDescriptionBtn = document.createElement('a');
  novelDescriptionBtn.setAttribute('href', '#');
  novelDescriptionBtn.classList.add('description-more');
  novelDescriptionBtn.textContent = 'Read more';
  novelDescriptionDIV.appendChild(novelDescriptionBtn);
  novelTextDIV.appendChild(novelDescriptionDIV);

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

  const uploadDateLink = document.createElement('a');
  uploadDateLink.setAttribute('href', '#');
  uploadDateLink.classList.add('upload__date');
  uploadDateLink.textContent = '• UP: ';
  const upDateSPAN = document.createElement('span');
  upDateSPAN.classList.add('up__date');
  const { years, months, days, hours, minutes } = calculateDiffTimeFromPresent(uploadDate);
  if (years === 0 && months === 0 && days === 0 && hours > 0) {
    upDateSPAN.textContent = `${hours} ${hours > 1 ? 'hours' : 'hour'} ago`;
  } else if (years === 0 && months === 0 && days > 0) {
    upDateSPAN.textContent = `${days} ${days > 1 ? 'days' : 'day'} ago`;
  } else if (years === 0 && months > 0) {
    upDateSPAN.textContent = `${months} ${months > 1 ? 'months' : 'month'} ago`;
  } else if (years > 0) {
    upDateSPAN.textContent = `${years} ${years > 1 ? 'years' : 'year'} ago`;
  } else {
    upDateSPAN.textContent = `${minutes} ${minutes > 1 ? 'minutes' : 'minute'} ago`;
  }
  uploadDateLink.appendChild(upDateSPAN);
  novelRateDIV.appendChild(uploadDateLink);
  novelTextDIV.appendChild(novelRateDIV);
  novelInfoDIV.appendChild(novelTextDIV);

  novelArticle.appendChild(novelInfoDIV);

  const borderDIV = document.createElement('div');
  borderDIV.classList.add('border');
  novelArticle.appendChild(borderDIV);

  const novelToolsDIV = document.createElement('div');
  novelToolsDIV.classList.add('novel__tools');

  const novelReadBtn = document.createElement('a');
  novelReadBtn.setAttribute('href', '#');
  novelReadBtn.classList.add('btn', 'btn-read');
  novelReadBtn.textContent = '◃ Read ▹';
  novelToolsDIV.appendChild(novelReadBtn);

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
  const popUpTrigger = document.createElement('a');
  popUpTrigger.classList.add('popup-trigger');
  const popUpImgDIV = document.createElement('div');
  popUpImgDIV.classList.add('poup-img');
  const popUpImg = document.createElement('img');
  popUpImg.setAttribute('src', novelBookmarkIcon);
  popUpImg.setAttribute('alt', 'pen picture');
  popUpImg.classList.add('poup-img-pen');
  popUpImgDIV.appendChild(popUpImg);
  popUpTrigger.appendChild(popUpImgDIV);
  popUpTrigger.append('My note');
  novelBookmarkPopUp.appendChild(popUpTrigger);
  novelBookmarksDIV.appendChild(novelBookmarkPopUp);

  novelToolsDIV.appendChild(novelBookmarksDIV);

  novelArticle.appendChild(novelToolsDIV);

  novelsParent.appendChild(novelArticle);
};

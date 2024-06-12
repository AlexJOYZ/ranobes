import { calculateDiffTimeFromPresent } from "../utils/calculateDiffTimeFromPresent";

export const generateNewChapters = (novel) => {
  const newChaptersParent = document.querySelector('.new__chapters');

  const { title, posterName, uploadDate, availableChapters } = novel;

  const newChapterLink = document.createElement('a');
  newChapterLink.setAttribute('href', '#');
  newChapterLink.classList.add('new__chapter', 'block');

  const novelImgDIV = document.createElement('div');
  novelImgDIV.classList.add('novel__img');
  const novelImgLink = require(`../../img/${posterName}`);
  const novelImg = document.createElement('img');
  novelImg.setAttribute('src', novelImgLink);
  novelImg.setAttribute('alt', 'novel image');
  novelImgDIV.appendChild(novelImg);
  const animationDIV1 = document.createElement('div');
  animationDIV1.classList.add('animation_1');
  const animationDIV2 = document.createElement('div');
  animationDIV2.classList.add('animation_2');
  novelImgDIV.appendChild(animationDIV1);
  novelImgDIV.appendChild(animationDIV2);
  newChapterLink.appendChild(novelImgDIV);

  const novelInfoDIV = document.createElement('div');
  novelInfoDIV.classList.add('info');
  const novelTitle = document.createElement('h3');
  novelTitle.classList.add('title__novel');
  novelTitle.textContent = title;
  novelInfoDIV.appendChild(novelTitle)
  const novelSubTitle = document.createElement('h3');
  novelSubTitle.classList.add('sub__title');
  novelSubTitle.textContent = 'Charter ';
  const novelSubTitleSpan = document.createElement('span')
  novelSubTitleSpan.textContent = `${availableChapters}`
  novelSubTitle.appendChild(novelSubTitleSpan)
  novelInfoDIV.appendChild(novelSubTitle)
  const novelUploadTimeEM  = document.createElement('em')

  const { years, months, days, hours, minutes } = calculateDiffTimeFromPresent(uploadDate);
  if (years === 0 && months === 0 && days === 0 && hours > 0) {
    novelUploadTimeEM.textContent = `${hours} ${hours > 1 ? 'hours' : 'hour'} ago`;
  } else if (years === 0 && months === 0 && days > 0) {
    novelUploadTimeEM.textContent = `${days} ${days > 1 ? 'days' : 'day'} ago`;
  } else if (years === 0 && months > 0) {
    novelUploadTimeEM.textContent = `${months} ${months > 1 ? 'months' : 'month'} ago`;
  } else if (years > 0) {
    novelUploadTimeEM.textContent = `${years} ${years > 1 ? 'years' : 'year'} ago`;
  } else {
    novelUploadTimeEM.textContent = `${minutes} ${minutes > 1 ? 'minutes' : 'minute'} ago`;
  }
  novelInfoDIV.appendChild(novelUploadTimeEM)
  newChapterLink.appendChild(novelInfoDIV);
  newChaptersParent.appendChild(newChapterLink);
};

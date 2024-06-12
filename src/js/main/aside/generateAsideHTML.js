
export const generateAsideHTML = (novel, tab) => {
  
  const bestTabAsideParent = document.querySelector('.novels__best');
  const discussedTabAsideParent = document.querySelector('.novels__discussed');


  const { title, authors, posterName, stars, language, yearOfPublishing, totalChapters, comments } =
    novel;

  const smallNovel = document.createElement('a');
  smallNovel.classList.add('novel-small');
  smallNovel.setAttribute('href', '#');

  const novelPosterDIV = document.createElement('div');
  novelPosterDIV.classList.add('novel__img');

  const novelPoster = document.createElement('img');
  const novelPosterLink = require(`../../../img/${posterName}`)
  novelPoster.setAttribute('src', novelPosterLink);
  novelPoster.setAttribute('alt', `novel image`);
  novelPosterDIV.appendChild(novelPoster);

  const animationDIV1 = document.createElement('div');
  const animationDIV2 = document.createElement('div');
  animationDIV1.classList.add('animation_1');
  animationDIV2.classList.add('animation_2');
  novelPosterDIV.appendChild(animationDIV1);
  novelPosterDIV.appendChild(animationDIV2);

  smallNovel.appendChild(novelPosterDIV);

  const novelInfoDIV = document.createElement('div');
  novelInfoDIV.classList.add('info');
  const nameNovelH3 = document.createElement('h3');
  nameNovelH3.classList.add('title__novel');
  nameNovelH3.textContent = title;
  const authorNovelH3 = document.createElement('h3');
  authorNovelH3.classList.add('sub__title');
  tab === 'bestTab'
    ? (authorNovelH3.textContent = authors)
    : (authorNovelH3.textContent = `${language}; ${yearOfPublishing} year; ≈${totalChapters}+ chapters`);

  const ratingEM = document.createElement('em');
  tab === 'bestTab'
    ? (ratingEM.textContent = `Rating: ${stars} / 5`)
    : (ratingEM.textContent = `${comments} comments`);
  novelInfoDIV.appendChild(nameNovelH3);
  novelInfoDIV.appendChild(authorNovelH3);
  novelInfoDIV.appendChild(ratingEM);

  smallNovel.appendChild(novelInfoDIV);

  tab === 'bestTab'
    ? bestTabAsideParent.appendChild(smallNovel)
    : discussedTabAsideParent.appendChild(smallNovel);
};

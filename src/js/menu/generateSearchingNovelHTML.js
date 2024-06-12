export const generateSearchingNovelHTML = ({ title, authors, posterName }) => {
  const searchResultParent = document.querySelector('.result-inner');
  const searchingNovel = document.createElement('a');
  searchingNovel.classList.add('search-novel');
  searchingNovel.setAttribute('href', '#');

  const novelTextDiv = document.createElement('div');
  novelTextDiv.classList.add('novel-text');
  const novelTitle = document.createElement('h3');
  novelTitle.textContent = title;
  const novelAuthor = document.createElement('p');
  novelAuthor.textContent = `by ${authors}`;
  novelTextDiv.appendChild(novelTitle);
  novelTextDiv.appendChild(novelAuthor);
  searchingNovel.appendChild(novelTextDiv);

  const novelImgLink = require(`../../img/${posterName}`);
  const novelImg = document.createElement('img');
  novelImg.setAttribute('src', novelImgLink);
  novelImg.setAttribute('alt', 'novel poster');
  searchingNovel.appendChild(novelImg);
  searchResultParent.appendChild(searchingNovel);
};

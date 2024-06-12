export const generateGenreHTML = ({ title, description }) => {
  const tabContentDIV = document.querySelector('.tab-content');

  const genreLink = document.createElement('a');
  genreLink.setAttribute('href', '#');
  genreLink.classList.add('genre');
  const genreTitle = document.createElement('h3');
  genreTitle.textContent = title;
  const genreDescription = document.createElement('p');
  genreDescription.textContent = description;
  genreLink.appendChild(genreTitle)
  genreLink.appendChild(genreDescription)
  tabContentDIV.appendChild(genreLink)
};

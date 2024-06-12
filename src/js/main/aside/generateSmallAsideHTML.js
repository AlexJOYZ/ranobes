export const generateSmallAsideHTML = ({ title, tags, authors }) => {
  const asideParent = document.querySelector('aside');
  const asideBlockDIV = asideParent.querySelector('.block');

  const newNovelAside = document.createElement('a');
  newNovelAside.classList.add('new-novel');
  newNovelAside.setAttribute('href', '#');

  const novelTitle = document.createElement('h3');
  novelTitle.textContent = title;
  newNovelAside.appendChild(novelTitle);

  const novelText = document.createElement('p');
  novelText.classList.add('text');
  const novelAuthor = document.createElement('span');
  novelAuthor.classList.add('new-author')
  novelAuthor.textContent = `${authors} `
  novelText.appendChild(novelAuthor)
  novelText.append('·')
  const novelTag = document.createElement('span');
  novelTag.classList.add('new-genre')
  novelTag.textContent = ` ${tags[3]}`
  novelText.appendChild(novelTag)
  newNovelAside.appendChild(novelText);

  asideBlockDIV.appendChild(newNovelAside)

};

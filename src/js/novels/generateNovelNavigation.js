import { updateNovelPage } from './updateNovelPage';

export const generateNovelNavigation = (countPages, currentPage, novels) => {
  !!document.querySelector('.novel-navigation') ? document.querySelector('.novel-navigation').remove() : '';
  const novelParent = document.querySelector('.novels');
  if (countPages===1) return ;
  const novelNav = document.createElement('nav');
  novelNav.classList.add('block', 'novel-navigation');

  const navigationBtns = document.createElement('div');
  navigationBtns.classList.add('navigation-btns');

  const prevBtn = document.createElement('a');
  prevBtn.classList.add('btn-prev');
  if (currentPage === 0) prevBtn.classList.add('not-active');
  prevBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1755 1024">
                    <path
                      fill="currentColor"
                      d="M1682.286 585.143h-1433.6l316.952 316.952c29.257 29.257 29.257 73.143 0 102.4s-73.143 29.257-102.4 0l-429.105-429.105c-4.876-4.876-9.752-4.876-14.629-9.752-14.629-19.505-19.505-39.010-19.505-63.39 0-4.876 0-9.752 0-9.752s0-4.876 0-4.876c4.876-14.629 14.629-24.381 24.381-29.257l433.981-433.981c29.257-29.257 73.143-29.257 102.4 0s29.257 73.143 0 102.4l-312.076 312.076h1433.6c39.010 0 73.143 34.133 73.143 73.143v0c0 39.010-34.133 73.143-73.143 73.143z"
                    />
                  </svg>`;
  const nextBtn = document.createElement('a');
  nextBtn.classList.add('btn-next');
  if (countPages === currentPage + 1) nextBtn.classList.add('not-active');
  nextBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1755 1024">
                    <path fill="currentColor" d="M73.143 438.857h1433.6l-316.952-316.952c-29.257-29.257-29.257-73.143 0-102.4s73.143-29.257 102.4 0l429.105 429.105c4.876 4.876 9.752 4.876 14.629 9.752 14.629 14.629 24.381 39.010 19.505 63.39 0 4.876 0 9.752 0 9.752s0 4.876 0 4.876c-4.876 14.629-14.629 24.381-24.381 29.257l-433.981 433.981c-29.257 29.257-73.143 29.257-102.4 0s-29.257-73.143 0-102.4l316.952-316.952-1438.476 4.876c-39.010 0-73.143-34.133-73.143-73.143v0c0-43.886 34.133-73.143 73.143-73.143z"></path></svg>`;

  navigationBtns.appendChild(prevBtn);
  navigationBtns.appendChild(nextBtn);

  prevBtn.onclick = () => updateNovelPage(novels, currentPage - 1);

  nextBtn.onclick = () => updateNovelPage(novels, currentPage + 1);

  novelNav.appendChild(navigationBtns);

  const pagesParent = document.createElement('div');
  pagesParent.classList.add('pages');

  for (let i = 0; i < countPages; i++) {
    const pageLink = document.createElement('a');
    pageLink.textContent = i + 1;
    if (currentPage === i) {
      pageLink.classList.add('current');
    }
    pageLink.onclick = (event) => {
      updateNovelPage(novels, +event.target.textContent - 1);
    };

    pagesParent.appendChild(pageLink);
  }
  novelNav.appendChild(pagesParent);
  novelParent.appendChild(novelNav);
};

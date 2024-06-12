import { clickOutside } from '../utils/clickOutside';
import { getDataFromDB } from '../utils/getDataFromDB';
import { generateSearchingNovelHTML } from './generateSearchingNovelHTML';

export const searchNovelsMenu = async () => {
  const novels = await getDataFromDB('novels');
  const searchMenuForm = document.querySelector('.search');
  const searchInput = searchMenuForm.querySelector('.search__bar');
  const searchParentDIV = document.querySelector('.search-result');
  const resultDIV = searchMenuForm.querySelector('.result-inner');
  searchInput.addEventListener('input', () => {
    const inputText = searchInput.value.toLowerCase();
    if (inputText.length > 2) {
      searchParentDIV.classList.add('search-active');
      const newNovels = novels.filter(
        (novel) =>
          novel.title.toLowerCase().includes(inputText) ||
          novel.authors.toLowerCase().includes(inputText),
      );
      resultDIV.innerHTML = '';
      if (newNovels.length === 0) {
        const errorSearchMessage = document.createElement('a');
        errorSearchMessage.setAttribute('href', '#');
        errorSearchMessage.textContent = 'No novels found for this query.';
        resultDIV.appendChild(errorSearchMessage);
        searchParentDIV.classList.add('error-search');
      } else {
        newNovels.forEach((novel) => generateSearchingNovelHTML(novel));
        searchParentDIV.classList.remove('error-search');
      }
    } else{
      searchParentDIV.classList.remove('search-active');
    }
    if (searchParentDIV.classList.contains('search-active'))
      clickOutside(searchParentDIV, 'search-active');
  });
};

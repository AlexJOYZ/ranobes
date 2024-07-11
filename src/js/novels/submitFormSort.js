import { displayDataNovels } from './displayDataNovels';
import { sortSelector } from './sortSelector/sortSelector';
import { getDataFromForm } from '../utils/getDataFromForm';
import { dataFromArrToObject } from '../utils/dataFromArrToObject';
import { getDataFromDB } from '../utils/getDataFromDB';
import { changeSortMode } from '../main/header';

const getChoicesMas = (choicesLists) => {
  const choicesMas = [];
  const choicesSpans = choicesLists.querySelectorAll('span');
  choicesSpans.forEach((choicesSpan) => choicesMas.push(choicesSpan.textContent.trim()));
  return choicesMas;
};
const checkForEmptyValue = (string, mode) => {
  if (mode === 'from') string === '' ? (string = 0) : (string = string);
  else string === '' ? (string = 9999) : (string = string);
  return string;
};
const contains = (where, what, mode = '') => {
  if (mode === 'not') {
    let count = 0;
    if (what.length === 0) return false;
    for (let i = 0; i < what.length; i++) {
      if (where.indexOf(what[i]) === -1) count++;
    }
    if (count === what.length) return false;
    return true;
  }

  for (let i = 0; i < what.length; i++) {
    if (where.indexOf(what[i]) === -1) return false;
  }
  return true;
};

export const submitFormSort = async () => {
  if (window.location.href.includes('novels')) {
    const searchForm = document.querySelector('.novel__heading');
    const resetBtn = searchForm.querySelector('.btn-reset');
    const novels = await getDataFromDB('novels');
    const authorsSet = new Set();
    novels.forEach((novel) => authorsSet.add(novel.authors));
    const authors = Array.from(authorsSet);
    const showBtn = document.querySelector('.btn-show');
    sortSelector();
    searchForm.addEventListener('submit', (event) => {
      event.preventDefault();
      let {
        ['input-title']: inputValueTitle,
        ['input-year-from']: inputValueYearFrom,
        ['input-year-to']: inputValueYearTo,
        ['select-status']: selectorStatus,
        ['input-chapters-from']: inputValueChaptersFrom,
        ['input-chapters-to']: inputValueChaptersTo,
        ['input-rating-from']: inputValueRatingFrom,
        ['input-rating-to']: inputValueRatingTo,
        ['textarea-authors']: textareaAuthorsValue,
        ['textarea-ex_authors']: textareaExcludeAuthorsValue,
      } = dataFromArrToObject(getDataFromForm(searchForm).entries());
      const languagesContainers = searchForm.querySelectorAll('.languages');
      let authorsMas = [];
      const authorsExcludeMas = [];
      let languagesMas = [];
      const languagesExcludeMas = [];
      languagesContainers.forEach((languagesContainer) => {
        const languageCheckboxes = languagesContainer.querySelectorAll('input[type=checkbox]');
        languageCheckboxes.forEach((languageCheckbox) => {
          if (languageCheckbox.checked && languageCheckbox.id.includes('ex_'))
            languagesExcludeMas.push(languageCheckbox.closest('label').textContent.trim());
          else if (languageCheckbox.checked)
            languagesMas.push(languageCheckbox.closest('label').textContent.trim());
        });
      });
      languagesMas.length === 0
        ? (languagesMas = ['Chinese', 'Korean', 'English', 'Japanese'])
        : '';
      inputValueYearFrom = checkForEmptyValue(inputValueYearFrom, 'from');
      inputValueYearTo = checkForEmptyValue(inputValueYearTo, 'to');
      inputValueChaptersFrom = checkForEmptyValue(inputValueChaptersFrom, 'from');
      inputValueChaptersTo = checkForEmptyValue(inputValueChaptersTo, 'to');
      inputValueRatingFrom = checkForEmptyValue(inputValueRatingFrom, 'from');
      inputValueRatingTo = checkForEmptyValue(inputValueRatingTo, 'to');

      let statusMas = [];

      selectorStatus === 'Any'
        ? (statusMas = ['Ongoing', 'Completed', 'Hiatus', 'Dropped'])
        : statusMas.push(selectorStatus);
      textareaAuthorsValue
        .trim()
        .split(',')
        .forEach((item) => authorsMas.push(item.trim()));
      textareaExcludeAuthorsValue
        .trim()
        .split(',')
        .forEach((item) => authorsExcludeMas.push(item.trim()));
      authorsMas[authorsMas.length - 1] === '' ? (authorsMas = authors) : '';
      const choicesGenreMas = getChoicesMas(searchForm.querySelector('.choices-genre'));
      const choicesExcludeGenreMas = getChoicesMas(
        searchForm.querySelector('.choices-exclude-genre'),
      );
      const choicesTagsMas = getChoicesMas(searchForm.querySelector('.choices-tags'));
      const choicesExcludeTagsMas = getChoicesMas(
        searchForm.querySelector('.choices-exclude-tags'),
      );
      const newNovelsMas = novels.filter(
        (novel) =>
          contains(novel.tags, choicesGenreMas) &&
          !contains(novel.tags, choicesExcludeGenreMas, 'not') &&
          contains(novel.events, choicesTagsMas) &&
          !contains(novel.events, choicesExcludeTagsMas, 'not') &&
          novel.title.toLowerCase().includes(inputValueTitle.toLowerCase()) &&
          +inputValueYearFrom <= novel.yearOfPublishing &&
          novel.yearOfPublishing <= +inputValueYearTo &&
          languagesMas.includes(novel.language) &&
          !languagesExcludeMas.includes(novel.language) &&
          statusMas.includes(novel.status) &&
          +inputValueChaptersFrom <= novel.availableChapters &&
          novel.availableChapters <= +inputValueChaptersTo &&
          +inputValueRatingFrom <= novel.stars &&
          novel.stars <= +inputValueRatingTo &&
          authorsMas.includes(novel.authors) &&
          !authorsExcludeMas.includes(novel.authors),
      );
      console.log(newNovelsMas);
      displayDataNovels(newNovelsMas, 'dateAscending');
      changeSortMode(newNovelsMas);
    });
    resetBtn.addEventListener('click', async () => {
      await sortSelector();
      const choiceSelectors = document.querySelectorAll('.selector-choices');
      const dropSelectors = document.querySelectorAll('.selector__drop');
      choiceSelectors.forEach((choiceSelector) => {
        const listElements = choiceSelector.querySelectorAll('li');
        listElements.forEach((listElement) => listElement.remove());
      });
      dropSelectors.forEach((dropSelector) => {
        const listElements = dropSelector.querySelectorAll('li');
        listElements.forEach((listElement) => (listElement.classList = ''));
      });
    });
    showBtn.onclick = () => searchForm.classList.add('more');
    await displayDataNovels(novels, 'dateAscending');
  }
};

import { getDataFromDB } from '../../utils/getDataFromDB';
import { generateContentDropHTML } from './generateContentDropHTML';

const getContentFromNovels = (content, data) => {
  const set = new Set();
  data.forEach((novel) => novel[content].forEach((item) => set.add(item)));
  const mas = Array.from(set);
  mas.sort();
  return mas;
};

export const sortSelector = async () => {
  const sortInputs = [];
  const selectorsSort = document?.querySelectorAll('.selector-sort');
  const selectedChoicesMasTags = [];
  const selectedChoicesMasExcludeTags = [];
  const selectedChoicesMasEvents = [];
  const selectedChoicesMasExcludeEvents = [];
  selectorsSort.forEach((selectorSort) =>
    sortInputs.push(...selectorSort.querySelectorAll('input')),
  );

  const renderFilteredData = (inputValue, searchPattern, mas, selectedChoicesMas, dropMenuUL) => {
    const newMas = mas.filter((item) => item.match(searchPattern));
    dropMenuUL.innerHTML = '';
    if (newMas.length === 0) {
      const errorResult = document.createElement('li');
      errorResult.classList.add('no-result');
      errorResult.textContent = `No results match ${inputValue}`;
      dropMenuUL.appendChild(errorResult);
    } else
      newMas.forEach((item) => generateContentDropHTML(item, dropMenuUL, mas, selectedChoicesMas));
  };

  const novels = await getDataFromDB('novels');
  const masTags = getContentFromNovels('tags', novels);
  const masEvent = getContentFromNovels('events', novels);
  sortInputs.forEach((sortInput) => {
    const selectorChoices = sortInput.closest('ul');
    const selectorParent = selectorChoices.closest('div');
    const dropMenuUL = selectorParent.querySelector('.selector__drop');

    const selectSortDIV = sortInput.closest('.selector-sort');
    const labelName = selectSortDIV.querySelector('label').textContent.toLowerCase();
    dropMenuUL.innerHTML = '';
    if (labelName.includes('genres') && labelName.includes('exclude')) {
      masTags.forEach((tag) =>
        generateContentDropHTML(tag, dropMenuUL, masTags, selectedChoicesMasExcludeTags),
      );
    } else if (labelName.includes('tags') && labelName.includes('exclude')) {
      masEvent.forEach((event) =>
        generateContentDropHTML(event, dropMenuUL, masEvent, selectedChoicesMasExcludeEvents),
      );
    } else if (labelName.includes('genres')) {
      masTags.forEach((tag) =>
        generateContentDropHTML(tag, dropMenuUL, masTags, selectedChoicesMasTags),
      );
    } else if (labelName.includes('tags')) {
      masEvent.forEach((event) =>
        generateContentDropHTML(event, dropMenuUL, masEvent, selectedChoicesMasEvents),
      );
    }

    sortInput.addEventListener('focus', (event) => {
      const selectorChoices = event.target.closest('ul');
      const selectorParent = selectorChoices.closest('div');
      const dropMenu = selectorParent.querySelector('.drop-container');
      selectorChoices.classList.add('active-input');
      dropMenu.classList.add('open-drop');
    });
    sortInput.addEventListener('blur', (event) => {
      const selectorChoices = event.target.closest('ul');
      const selectorParent = selectorChoices.closest('div');
      const dropMenu = selectorParent.querySelector('.drop-container');
      setTimeout(() => {
        selectorChoices.classList.remove('active-input');
        dropMenu.classList.remove('open-drop');
      }, 150);
    });
    sortInput.addEventListener('input', () => {
      const inputValue = sortInput.value;
      const reg = `\\b${inputValue}`;
      const searchPattern = new RegExp(reg, 'gi');
      if (labelName.includes('genres') && labelName.includes('exclude')) {
        renderFilteredData(
          inputValue,
          searchPattern,
          masTags,
          selectedChoicesMasExcludeTags,
          dropMenuUL,
        );
      } else if (labelName.includes('tags') && labelName.includes('exclude')) {
        renderFilteredData(
          inputValue,
          searchPattern,
          masEvent,
          selectedChoicesMasExcludeEvents,
          dropMenuUL,
        );
        
      } else if (labelName.includes('genres')) {
        renderFilteredData(inputValue, searchPattern, masTags, selectedChoicesMasTags, dropMenuUL);
      } else if (labelName.includes('tags')) {
        renderFilteredData(
          inputValue,
          searchPattern,
          masEvent,
          selectedChoicesMasEvents,
          dropMenuUL,
        );

      }
    });
  });
};

import { generateSelectedContentHTML } from './generateSelectedContentHTML';

export const generateContentDropHTML = (text, HTMLElement, masElements, mas = []) => {
  const listElement = document.createElement('li');
  listElement.textContent = text;
  mas.length !== 0 && mas.includes(text) ? listElement.classList.add('selected') : '';
  listElement.onclick = function () {
    this.classList.add('selected');
    const selectedParent = this.closest('.selector__inner');
    const selectedChoices = selectedParent.querySelector('ul');
    const input = selectedParent.querySelector('input');
    input.setAttribute('placeholder', '');
    mas.push(this.textContent);
    console.log(mas)
    generateSelectedContentHTML(this.textContent, selectedChoices, mas, masElements);
  };
  HTMLElement.appendChild(listElement);
  return mas;
};

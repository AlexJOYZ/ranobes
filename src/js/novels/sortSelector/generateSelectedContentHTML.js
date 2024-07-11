import { generateContentDropHTML } from './generateContentDropHTML';

export const generateSelectedContentHTML = (text, element, mas, masElements) => {
  const selectedListElement = document.createElement('li');
  const selectedSpan = document.createElement('span');
  selectedSpan.textContent = text;
  const closeBtn = document.createElement('i');
  closeBtn.classList.add('fa-solid', 'fa-xmark');
  selectedListElement.appendChild(selectedSpan);
  closeBtn.onclick = () => {
    console.log(1)
    const listEl = event.target.closest('li');
    const selectedParent = listEl.closest('.selector__inner');
    const dropMenuUL = selectedParent.querySelector('.selector__drop');
    const index= mas.indexOf(listEl.textContent.trim());
    if (index >= 0) {
      mas.splice(index, 1);
    }
    listEl.remove();
    dropMenuUL.innerHTML = '';
    masElements.forEach((tag) => generateContentDropHTML(tag, dropMenuUL, masElements, mas));
  };
  selectedListElement.appendChild(closeBtn);

  element.prepend(selectedListElement);
};

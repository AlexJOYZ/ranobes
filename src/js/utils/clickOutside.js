export const clickOutside = (element, classElement) => {
  const page = document.querySelector('.page')
  page.addEventListener('click', (e) =>
    e.target !== element ? element.classList.remove(classElement) : '',
  );
};

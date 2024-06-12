export const generateTagsHTML = ( tagText ) => {
  const tabContent = document.querySelector('.tab-content') ;
  const tagLink = document.createElement('a');
  tagLink.setAttribute('href', '#');
  tagLink.classList.add('tag');
  tagLink.textContent = tagText
  tabContent.appendChild(tagLink)
};

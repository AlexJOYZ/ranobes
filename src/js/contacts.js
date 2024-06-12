const fagGuestions = document.querySelectorAll('.fag-guestion');

const setClassOpen = (element) => element.closest('li').classList.toggle('answer-open');

fagGuestions.forEach((el) => (el.onclick = () => setClassOpen(el)));

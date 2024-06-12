const bestTopBtn = document.querySelector('.btn-best') || null;
const discussedTopBtn = document.querySelector('.btn-discussed') || null;

const bestTab = document.querySelector('.novels__best');
const discussedTab = document.querySelector('.novels__discussed');

const setCurrentTab = (btn, tab) => {
  btn.classList.add('active');
  btn !== bestTopBtn
    ? bestTopBtn.classList.remove('active')
    : discussedTopBtn.classList.remove('active');
  tab.classList.add('current');
  tab !== bestTab ? bestTab.classList.remove('current') : discussedTab.classList.remove('current');
};

bestTopBtn === null ? '' : (bestTopBtn.onclick = () => setCurrentTab(bestTopBtn, bestTab));
discussedTopBtn === null
  ? ''
  : (discussedTopBtn.onclick = () => setCurrentTab(discussedTopBtn, discussedTab));



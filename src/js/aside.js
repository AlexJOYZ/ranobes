const bestTopBtn = document.querySelector('.btn-best');
const discussedTopBtn = document.querySelector('.btn-discussed');

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

bestTopBtn.onclick = () => setCurrentTab(bestTopBtn, bestTab);
discussedTopBtn.onclick = () => setCurrentTab(discussedTopBtn, discussedTab);

// asidesBtns.addEventListener('click', function (e){
//   e.target.classList.add('active');
// })

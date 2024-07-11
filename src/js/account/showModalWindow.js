 export const  showModalWindow = () => {
  
  if (window.localStorage.getItem('updateStatus')==='success'){
    const modalWindow = document.querySelector('.modal');
    const closeButton = modalWindow.querySelector('i');
    modalWindow.classList.add('open')
    closeButton.onclick = () => modalWindow.classList.remove('open');
    window.localStorage.removeItem('updateStatus')
  }
};

export const createErrorMessageHTML = (message) => {
  const errorMessagesParent = document?.querySelector('.notifications');

  const notificationDIV = document.createElement('div');
  notificationDIV.classList.add('notification');

  const infoImg = document.createElement('i');
  infoImg.classList.add('fa-solid', 'fa-circle-info', 'fa-2xl');
  notificationDIV.appendChild(infoImg);

  const notificationTextDIV = document.createElement('div');
  notificationTextDIV.classList.add('notification-text');
  const notificationHeader = document.createElement('h3');
  const notificationMessage = document.createElement('p');

  notificationHeader.textContent = 'Information';
  notificationMessage.textContent = message;

  notificationTextDIV.appendChild(notificationHeader);
  notificationTextDIV.appendChild(notificationMessage);

  notificationDIV.appendChild(notificationTextDIV);

  const lineDIV = document.createElement('div');
  lineDIV.classList.add('line-on-time');

  const closeBtn = document.createElement('a');
  const closeImg = document.createElement('i');
  closeImg.classList.add('fa-solid', 'fa-xmark');
  closeBtn.appendChild(closeImg);

  notificationDIV.appendChild(lineDIV);
  notificationDIV.appendChild(closeBtn);

  errorMessagesParent.appendChild(notificationDIV);
  return notificationDIV;
};

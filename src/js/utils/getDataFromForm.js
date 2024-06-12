export const getDataFromForm = (form) => {
  // const { elements } = form;
  // const data = new FormData();
  // [...elements]
  //   .filter((item) => !!item.value)
  //   .forEach((element) => {
  //     const { name, value } = element;
  //     data.append(name,value)
  //   });
  // return userData;
  return new FormData(form);
};
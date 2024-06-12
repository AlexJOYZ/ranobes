export const dataFromArrToObject = (data) => {
  const obj = {};
  data.forEach((item) => {
    obj[item[0]] = item[1];
  });
  return obj;
};

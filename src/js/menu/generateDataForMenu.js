import { getDataFromDB } from "../utils/getDataFromDB";

export const generateDataForMenu = async () => {
  const novelsSpan=document.querySelector('.link-novels>span')
  const novelData = await getDataFromDB('novels')
  novelsSpan.textContent=novelData.length
};

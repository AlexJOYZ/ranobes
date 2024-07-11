import { calculateDiffTimeFromPresent } from '../utils/calculateDiffTimeFromPresent';
import { generateNovelHTML } from '../utils/generateNovelHTML';
import { getDataFromDB } from '../utils/getDataFromDB';
import { generateNewChapters } from './generateNewChapters';

export const generateDataForMainPage = async () => {
  const novels = await getDataFromDB('novels');
  const newNovelsParent = document.querySelector('.new__novels');

  novels.sort((a, b) => {
    if (a.yearOfPublishing > b.yearOfPublishing && a.stars > b.stars && a.views > b.views)
      return -1;
    else if (a.yearOfPublishing < b.yearOfPublishing && a.stars < b.stars && a.views < b.views)
      return 1;
    return 0;
  });
  for (let i = 0; i < 3; i++) generateNovelHTML(novels[i], newNovelsParent);
  novels.sort((a, b) => {
    if (
      calculateDiffTimeFromPresent(a.uploadDate, 'returnDiffTime') >
      calculateDiffTimeFromPresent(b.uploadDate, 'returnDiffTime')
    )
      return 1;
    else if (
      calculateDiffTimeFromPresent(a.uploadDate, 'returnDiffTime') <
      calculateDiffTimeFromPresent(b.uploadDate, 'returnDiffTime')
    )
      return -1;
    return 0;
  });
  for (let i = 0; i < 10; i++) generateNewChapters(novels[i]);
};

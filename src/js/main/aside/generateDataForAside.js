import { getDataFromDB } from '../../utils/getDataFromDB';
import { generateAsideHTML } from './generateAsideHTML';
import { generateSmallAsideHTML } from './generateSmallAsideHTML';

export const generateDataForAside = async (type = 'default') => {
  const novels = await getDataFromDB('novels');
  if (type === 'small') {
    novels.sort((a, b) => {
      if (a.yearOfPublishing > b.yearOfPublishing && a.stars > b.stars && a.views > b.views)
        return -1;
      else if (a.yearOfPublishing < b.yearOfPublishing && a.stars < b.stars && a.views < b.views)
        return 1;
      return 0;
    });
    for (let i = 0; i < 3; i++) {
      generateSmallAsideHTML(novels[i], 'bestTab');
    }
  } else{

    novels.sort((a, b) => {
      if (a.stars > b.stars && a.views > b.views) return -1;
      else if (a.stars < b.stars && a.views < b.views) return 1;
      return 0;
    });
    for (let i = 0; i < 10; i++) {
      generateAsideHTML(novels[i], 'bestTab');
    }
    novels.sort((a, b) => {
      if (a.comments > b.comments) return -1;
      else if (a.comments < b.comments) return 1;
      return 0;
    });
    for (let i = 0; i < 10; i++) {
      generateAsideHTML(novels[i], 'discussedTab');
    }
  }
};

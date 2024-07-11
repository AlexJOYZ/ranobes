import { calculateDiffTimeFromPresent } from '../utils/calculateDiffTimeFromPresent';
import { generateNovelNavigation } from './generateNovelNavigation';
import { updateNovelPage } from './updateNovelPage';

export const displayDataNovels = async (novels, searchMode) => {
  const countPages = Math.ceil(novels.length / 10);
  let pageNumber = 0;
  switch (searchMode) {
    case 'dateAscending':
      novels.sort(
        (a, b) =>
          calculateDiffTimeFromPresent(a.uploadDate, 'returnDiffTime') -
          calculateDiffTimeFromPresent(b.uploadDate, 'returnDiffTime'),
      );
      break;
    case 'dateDecreasing':
      novels.sort(
        (a, b) =>
          calculateDiffTimeFromPresent(b.uploadDate, 'returnDiffTime') -
          calculateDiffTimeFromPresent(a.uploadDate, 'returnDiffTime'),
      );
      break;
    case 'ratingAscending':
      novels.sort((a, b) => {
        if (a.stars > b.stars && a.views > b.views) return -1;
        else if (a.stars < b.stars && a.views < b.views) return 1;
        return 0;
      });
      break;

    case 'ratingDecreasing':
      novels.sort((a, b) => {
        if (a.stars > b.stars && a.views > b.views) return 1;
        else if (a.stars < b.stars && a.views < b.views) return -1;
        return 0;
      });
      break;
    case 'viewsAscending':
      novels.sort((a, b) => b.views - a.views);
      break;
    case 'viewsDecreasing':
      novels.sort((a, b) => a.views - b.views);
      break;

    case 'commentsAscending':
      novels.sort((a, b) => b.comments - a.comments);
      break;

    case 'commentsDecreasing':
      novels.sort((a, b) => a.comments - b.comments);
      break;
    case 'titleAscending':
      novels.sort((a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) return 1;
        else if (a.title.toLowerCase() > b.title.toLowerCase()) return -1;
        return 0;
      });
      break;
    case 'titleDecreasing':
      novels.sort((a, b) => {
        if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
        else if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
        return 0;
      });
      break;
    case 'onlyRatingAscending':
      novels.sort((a, b) => b.stars - a.stars);
      break;
    case 'onlyRatingDecreasing':
      novels.sort((a, b) => a.stars - b.stars);
      break;
  }
  // generateNovelNavigation(countPages, pageNumber, novels);
  updateNovelPage(novels, pageNumber);
};

export const countFolders = (object, searchingNovels, mode = 'default') => {
  let count = 0;
  let novelCollection;
  for (const key in object) {
    if (object[key].includes(searchingNovels)) {
      count++;
      novelCollection = key;
    }
  }
  if (mode === 'searchNovelCollection' && count === 1) {
    return novelCollection;
  }
  return count;
};
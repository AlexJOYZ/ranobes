import { getDataFromDB } from '../utils/getDataFromDB';
import { generateGenreHTML } from './generateGenreHTML';
import {  generateTagsHTML } from './generateTagsHTML';

export const generateDataForTags = async () => {
  if (window.location.href.includes('tags')) {
    const novels = await getDataFromDB('novels');
    const masURL = window.location.href.split('/');
    const pageName = masURL[masURL.length - 1];
    if (pageName.includes('authors')) {
      const setAuthors = new Set();
      novels.forEach((novel) => setAuthors.add(novel.authors));
      const masAuthors = Array.from(setAuthors);
      masAuthors.sort()
      masAuthors.forEach((author) => generateTagsHTML(author));
    } else if (pageName.includes('catalog')) {
      const setEvents = new Set();
      novels.forEach((novel) => novel.events.forEach((event) => setEvents.add(event)));
      const masEvents = Array.from(setEvents);
      masEvents.sort()
      masEvents.forEach((event) => generateTagsHTML(event));
    } else if (pageName.includes('genre')) {
      const genres = await getDataFromDB('genres');
      genres.forEach((genre)=> generateGenreHTML(genre))
    }
  }
};

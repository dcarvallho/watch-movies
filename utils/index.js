export const URL_IMAGE = 'https://image.tmdb.org/t/p/original';

export const formatedUrlParams = (title) => {
  if (!title) {
    return;
  }

  return title.split(' ').join('-');
}

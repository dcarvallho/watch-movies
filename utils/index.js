export const fetchMoviesResults = (fetch) => {
  fetch.map((fetchs) => {
    return <li key={fetchs.id}>{fetchs.title}</li>;
  });
};

export const URL_IMAGE = 'https://image.tmdb.org/t/p/original';
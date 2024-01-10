export const fetchMoviesResults = (fetch) => {
  fetch.map((fetchs) => {
    return <li key={fetchs.id}>{fetchs.title}</li>;
  });
};

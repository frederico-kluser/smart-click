export const get = (url) => new Promise((resolve) =>
fetch(url)
  .then((response) => response.json())
  .then(({ data }) => {
    resolve(data);
  }),
);

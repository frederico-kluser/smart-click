export const get = (url) => new Promise((resolve) =>
fetch(url)
  .then((response) => response.json())
  .then(({ data }) => {
    resolve(data);
  }),
);

export const del = (url, id) => new Promise((resolve) =>
fetch(`http://localhost:8080/macro/delete/?id=${id}`, {
  method: 'DELETE',
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((response) => response.json())
  .then(({ data }) => {
    resolve(data);
  }),
);
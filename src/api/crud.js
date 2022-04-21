export const get = (url) => new Promise((resolve) =>
fetch(url)
  .then((response) => response.json())
  .then(({ data }) => {
    resolve(data);
  }),
);

export const del = (url) => new Promise((resolve, reject) =>
fetch(url, {
  method: 'DELETE',
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((response) => response.json())
  .then(({ data }) => {
    resolve(data);
  }).catch((err) => {
    reject(err);
  }),
);

export const put = (url, actived) => new Promise((resolve, reject) => {
  fetch(url, {
			method: 'PUT',
			body: JSON.stringify({ actived: !actived }),
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => response.json())
			.then(({ data }) => {
        resolve(data);
			});
});

export const post = (url, data) => new Promise((resolve, reject) => {
  fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then(({ data }) => {
        resolve(data);
      });
});
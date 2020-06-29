const ENDPOINT = "https://jsonplaceholder.typicode.com";

export default {
  getUsers() {
    return fetch(`${ENDPOINT}/users`)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(json => json);
  },
  getPosts() {
    return fetch(`${ENDPOINT}/posts`)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(json => json);
  },
};
const ENDPOINT = "https://api.convertkit.com/v3/subscribers?api_secret=secret_key";
export default {
  subs() {
    return fetch(`${ENDPOINT}&page=1`)
      .then(response => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
    .then(json => json);
  }
};
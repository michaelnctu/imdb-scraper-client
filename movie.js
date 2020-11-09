const main = document.querySelector('main');
const imdbID = window.location.search.match(/imdbID=(.*)/)[1];
const BASE_URL = 'https://imdb-scrpr.now.sh/';

function getMovie(imdbID) {
  return fetch(`${BASE_URL}movie/${imdbID}`)
    .then(res => res.json());
}

getMovie(imdbID)
  .then(showMovie)
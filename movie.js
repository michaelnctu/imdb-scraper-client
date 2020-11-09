const main = document.querySelector('main');
const imdbID = window.location.search.match(/imdbID=(.*)/)[1];
const BASE_URL = 'https://imdb-scrpr.now.sh/';

function getMovie(imdbID) {
  return fetch(`${BASE_URL}movie/${imdbID}`)
    .then(res => res.json());
}

function showMovie(movie) {
  const section = document.createElement('section')
  main.appendChild(section)

  section.outerHTML = `
    <section class="row">
      <h1 class="text-center">${movie.title}</h1>
      <div class="col-sm-12">
        <img src="${movie.poster}" class="img-fluid" />
      </div>
      <div class="col-sm-12">
        <dl class="row">
          ${descriptionHTML}
        </dl>
      </div>
    </section>
  `;

}

getMovie(imdbID)
  .then(showMovie)
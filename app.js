
const form = document.querySelector('form');
const searchInput = document.querySelector('input');
const resultsList = document.querySelector('#results')
const dataPanel = document.querySelector('#data-panel')

// const BASE_URL = 'http://node-env.eba-9dp3chmx.us-east-2.elasticbeanstalk.com/'; //aws
const BASE_URL = 'http://localhost:3000/'

form.addEventListener('submit', formSubmitted);

function formSubmitted(event) {
  event.preventDefault(); //page doesn't refresh

  const searchTerm = searchInput.value; //從前端取得輸入的資訊
  getSearchResults(searchTerm) //已含有res
    .then(showResults)  //前端顯示
    .then(results => {
      console.log(results)
    })
}

function getSearchResults(searchTerm) {


  return axios.get(`${BASE_URL}search/${searchTerm}`)
    .then(res => {
      const data = res.data
      return data
    })

}

// function showResults(results) {

//   results.forEach(movie => {
//     const li = document.createElement('li');
//     const img = document.createElement('img');
//     li.appendChild(img);

//     img.src = movie.image;
//     const a = document.createElement('a');
//     a.textContent = movie.title;

//     a.href = '/movie.html?imdbID=' + movie.imdbID;
//     li.appendChild(a);
//     resultsList.appendChild(li);
//   });
// }

// function showResults(results) {
//   results.forEach(movie => {
//     const li = document.createElement('li');
//     const img = document.createElement('img');
//     li.appendChild(img);

//     img.src = movie.image;
//     const a = document.createElement('a');
//     a.textContent = movie.title;

//     a.href = '/movie.html?imdbID=' + movie.imdbID;
//     li.appendChild(a);
//     resultsList.appendChild(li);
//   });
// }

function showResults(results) {
  let rawHTML = ''
  results.forEach((movie) => {
    // title, image
    rawHTML += `<div class="col-sm-3">
    <div class="mb-2">
      <div class="card">
        <img src="${movie.image}" class="card-img-top cover" alt="Movie Poster"
        >
        <div class="card-body">
        
        <h5 class="card-title">${movie.title}</h5>
          
        </div>
        <div class="card-footer">

        <input type ="button"
        class="btn btn-primary btn-show-movie"
        onclick="javascript:location.href='/movie.html?imdbID=${movie.imdbID}'" value="More"></input>


   
        </div>
      </div>
    </div>
  </div>`
  })
  dataPanel.innerHTML = rawHTML
}
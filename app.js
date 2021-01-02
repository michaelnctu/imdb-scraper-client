
const form = document.querySelector('form');
const searchInput = document.querySelector('input');
const resultsList = document.querySelector('#results')

const BASE_URL = 'http://node-env.eba-9dp3chmx.us-east-2.elasticbeanstalk.com/'; //aws
// const BASE_URL = 'http://localhost:3000/'

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

function showResults(results) {

  results.forEach(movie => {
    const li = document.createElement('li');
    const img = document.createElement('img');
    li.appendChild(img);

    img.src = movie.image;
    const a = document.createElement('a');
    a.textContent = movie.title;

    a.href = '/movie.html?imdbID=' + movie.imdbID;
    li.appendChild(a);
    resultsList.appendChild(li);
  });
}
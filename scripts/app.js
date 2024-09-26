const container = document.querySelector('.container');
const movieTitle = document.querySelector('.userInputTitle');
const movieYear = document.querySelector('.userInputReleaseYear');
const moviePosterUrl = document.querySelector('.userInputPosterUrl');
const btn = document.querySelector('.button');
const movieTitleToDisplay = document.querySelector('.favoriteMovieTitle');
const movieYearToDisplay = document.querySelector('.favoriteMovieYear');

let titleInStorage = localStorage.getItem('title');
let imageUrlInStorage = localStorage.getItem('imageUrl');
let movieYearInStorage = localStorage.getItem('movieYear');

if(titleInStorage && imageUrlInStorage && movieYearInStorage){
    movieTitleToDisplay.textContent = titleInStorage;
    movieYearToDisplay.textContent = movieYearInStorage;
    container.style.backgroundImage = `linear-gradient(#33336888, #a75b5bc5),
    url('${imageUrlInStorage}')`;
}


btn.addEventListener('click', () =>  {
    let movieTitleInput = movieTitle.value;
    let posterUrlInput = moviePosterUrl.value;
    let movieYearInput = movieYear.value;

    localStorage.setItem('title', movieTitleInput);
    localStorage.setItem('imageUrl', posterUrlInput);
    localStorage.setItem('movieYear', movieYearInput);

    movieTitleToDisplay.textContent = movieTitleInput;
    movieYearToDisplay.textContent = movieYearInput; 

    container.style.backgroundImage = `linear-gradient(#33336888, #a75b5bc5),
    url('${posterUrlInput}')`;

    movieTitle.value = ''; 
    moviePosterUrl.value = '';
    movieYear.value = '';
});
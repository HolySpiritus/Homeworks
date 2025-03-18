// script.js

const searchButton = document.getElementById('search-button');
const movieInput = document.getElementById('movie-input');
const movieContainer = document.getElementById('movie-container');

const apiKey = 'd97929d2'; // Replace with your actual API key

// Function to fetch movie data
async function fetchMovie() {
    const movieTitle = movieInput.value.trim();

    if (!movieTitle) {
        alert('Please enter a movie title!');
        return;
    }

    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(movieTitle)}`);
        const data = await response.json();

        if (data.Response === 'False') {
            movieContainer.innerHTML = '<p>Movie not found. Try another title!</p>';
        } else {
            displayMovie(data);
        }
    } catch (error) {
        console.error('Error fetching movie data:', error);
        movieContainer.innerHTML = '<p>Something went wrong. Please try again later.</p>';
    }
}

// Function to display movie information
function displayMovie(movie) {
    movieContainer.innerHTML = `
        <div>
            <img src="${movie.Poster}" alt="${movie.Title}" />
            <h2>${movie.Title}</h2>
            <p>Year: ${movie.Year}</p>
        </div>
    `;
}

// Event listener for the search button
searchButton.addEventListener('click', fetchMovie);

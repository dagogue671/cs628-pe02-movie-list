// Import React Library
import React from 'react';
// Import the movies data from the movies.js file
import movies from './movies';
// Import the CSS file for styling
import './MovieList.css';
// Use useState hook to manage the state of the component
import { useState } from 'react';


function MovieList() {
// Initialize the useState hook to manage selectedGenere state. Default 'All Genres'
const [selectedGenre, setSelectedGenre] = useState('All Genres');
// Create list of Genres from movie data set, and map them
const genres = ['All Genres', ...new Set(movies.map(movie => movie.genre))];
// If the filter is set to 'All Genres' display all movies, otherwise filter seletected
const movieList = selectedGenre === 'All Genres' ? movies 
    : movies.filter(movie => movie.genre === selectedGenre);

return(
    <>
    <div className="movie-list-container">
        <h1>Movie List</h1>
        {/*Drop Down List */}
        <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
            {genres.map((genre, index) => (
                <option key={index} value={genre}>
                    {genre}
                </option>
            ))}
        </select>
        {/* Movie Card */}
        <div 
        className="movie-list">
            {movieList.map((movie, index) => (
            <div 
            className="movie-card" 
            key={index}
            onClick={() => alert(`You clicked on \"${movie.title}\"`)}
            >
                <h3>{movie.title}</h3>
                <p>{movie.genre}</p>
                <p>Released: {movie.releaseYear}</p>
            </div>
        ))}
        </div>
    </div>
    </>
    );
}

export default MovieList;
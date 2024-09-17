import { useEffect, useState } from 'react';
import './App.css';
import searchIcon from './search.svg';
import MovieCard from './MovieCard';

//e3768f
const API_URL = 'https://www.omdbapi.com/?apikey=e3768f';

const App = () => {

   const [movies, setmovies] = useState([]);

   const [searchTerm, setSearchTerm] = useState('');

   const searchMovies = async (title) => {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();

      setmovies(data.Search);
   }

   useEffect(() => {
      searchMovies('spiderman');
   }, []);

   return (
      <div className='app'>
         <h1>MOVES</h1>
         <div className='search'>
            <input
               placeholder='Search for movies'
               value={searchTerm}
               onChange={(e) => {
                  setSearchTerm(e.target.value);
               }}
            />
            <img
               src={searchIcon}
               alt='search'
               onClick={() => {
                  searchMovies(searchTerm);
               }}
            />
         </div>
         <div className='container'>
            {movies.length > 0
               ? (
                  <div className='movie-container'>
                     {movies.map((movie) => (
                        <MovieCard movie={movie} />
                     ))}                     
                  </div>               
               ) : (
                  <div className='empty'>
                     <h2>No movies found</h2>
                  </div>
               )
            }            
         </div>
      </div>
   );
}

export default App;
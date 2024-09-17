import { useEffect, useState } from 'react';
import './App.css';
import searchIcon from './search.svg';
import MovieCard from './MovieCard';

//e3768f
const API_URL = 'https://www.omdbapi.com/?apikey=e3768f';

const movie1 = {
   'Poster': 'https://m.media-amazon.com/images/M/MV5BMjE3Mzg0MjAxMl5BMl5BanBnXkFtZTcwNjIyODg5Mg@@._V1_SX300.jpg',
   'Title': 'Spiderman and Grandma',
   'Type': 'movie',
   'Year': '2009',
   'imdbID': 'tt1433184'
}

const App = () => {

   const [movies, setmovies] = useState([]);

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
               value={'Spiderman'}
               onChange={() => {}}
            />
            <img
               src={searchIcon}
               alt='search'
               onClick={() => {}}
            />
         </div>
         <div className='container'>
            {movies ? (
               <MovieCard movie1={movie1}/>
            ) :  (
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
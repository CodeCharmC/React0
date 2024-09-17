import { useEffect } from 'react';
import './App.css';
import searchIcon from './search.svg';

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

   const searchMovies = async (title) => {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();


      console.log(data)
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
            <div className='movie'>
               <div>
                  <p>{movie1.Year}</p>
               </div>
               <div>
                  <img
                     src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'}
                     alt={movie1.Title}
                  />
               </div>
               <div>
                  <span>{movie1.Type}</span>
                  <h3>{movie1.Title}</h3>
               </div>
            </div>
         </div>
      </div>
   );
}

export default App;
import React from 'react';
{/*here we dont have access to priviously used movie1 that's why we use props but just so we dont have to repit ourself we can destructure the props by using object destructuring {movie1} instant of props*/}
const MovieCard = ({ movie1 }) => {
   return (
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
   );
}

export default MovieCard;
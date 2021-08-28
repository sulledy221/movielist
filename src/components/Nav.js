import React, { useContext } from 'react';
import { MovieContext } from '../MovieContext';


export default function Nav () {
  const [movies, setMovies] = useContext(MovieContext)
  return (
    <div>
      <h3>Dev Sully</h3>
      <p>List of Movies: {movies.length}</p>
    </div>
  )
}
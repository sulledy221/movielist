import React, { useState, useContext } from 'react'
import Movie from './Movie'
import { MovieContext } from '../MovieContext'

export default function MovieList () {
  const [movies, setMovies] = useContext(MovieContext)
  return (
    <div>
      {movies.map(movie => (
        <Movie name={movie.name} location={movie.location} key={movie.id}/>
      ))}
    </div>
  )
}

import React,{ useState, createContext } from "react";


export const MovieContext = createContext();


export const MovieProvider = props => {
  const [ movies, setMovies ] = useState([
    {
      name: "Harry Potter",
      location: "Peacock",
      id: 123
    },
    {
      name: "Aladdin",
      location: "Disneyplus",
      id: 124
    },
    {
      name: "Billy Madison",
      location: "Netflix",
      id: 125
    }
  ])
  return (
    <div>
      <MovieContext.Provider value={[movies, setMovies]}>
        {props.children}
      </MovieContext.Provider>
    </div>
  );
}
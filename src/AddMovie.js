import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";

export const AddMovie = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [movies, setMovies] = useContext(MovieContext)

  const updateName = (e) => {
    setName(e.target.value);
  };
  const updateLocation = (e) => {
    setLocation(e.target.value);
  };
  const addMovie = (e) => {
    e.preventDefault();
    setMovies(prevMovies => [...prevMovies, {name: name, location: location}])
  };
  return (
    <form onSubmit={addMovie}>
      <input type="text" name="name" value={name} onChange={updateName} />
      <input
        type="text"
        name="location"
        value={location}
        onChange={updateLocation}
      />
      <button>Submit</button>
    </form>
  );
};

import "./App.css";
import MovieList from "./components/MovieList";
import Nav from "./components/Nav";
import { MovieProvider } from "./MovieContext";
import { AddMovie } from "./AddMovie";

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;

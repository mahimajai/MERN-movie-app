import { useEffect, useState } from "react";
import api from "../api/axios";
import MovieCard from "../components/MovieCard";

const Watchlist = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    api.get("/watchlist")
      .then((res) => setMovies(res.data))
      .catch((err) => console.error(err));
  }, []);

  const removeMovie = (movieId) => {
    api.delete(`/watchlist/${movieId}`)
      .then(() => setMovies(movies.filter(movie => movie._id !== movieId)))
      .catch((err) => console.error(err));
  };

  if (!movies.length) return <p>No movies in watchlist</p>;


  return (
    <>
      <h2>My Watchlist</h2>

      {movies.map(movie => (
        <div key={movie._id}>
          <img src={movie.poster} width="100" />
          <p>{movie.title}</p>
          <button onClick={() => removeMovie(movie._id)}>Remove</button>
        </div>
      ))}
    </>
  );
};

export default Watchlist;

import { useEffect, useState } from "react";
import api from "../api/axios";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    api.get("/movies").then((res) => setMovies(res.data.movies));
  }, []);

  return (
    <div>

      <SearchBar setMovies={setMovies} />

{movies.map((m) => (
  <MovieCard key={m._id} movie={m} />
))}

  
    </div>
  );
};

export default Home;

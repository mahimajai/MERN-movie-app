import api from "../api/axios";

const SearchBar = ({ setMovies }) => {
  const search = async (e) => {
    const q = e.target.value;

    if (!q) {
  const res = await api.get("/movies");
  setMovies(res.data.movies);
  return;
}
 // empty search guard

    const res = await api.get(`/movies/search?q=${q}`);
    setMovies(res.data);
  };

  return <input placeholder="Search" onChange={search} />;
};

export default SearchBar;

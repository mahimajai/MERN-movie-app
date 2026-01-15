import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => (
  <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
    <Link to={`/movie/${movie._id}`} style={{ textDecoration: "none" }}>
      <h3>{movie.title}</h3>
      <p>{movie.year}</p>
      <p>{movie.rating}</p>
    </Link>
  </div>
);

export default MovieCard;

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
         const res = await axios.get(
          `http://localhost:5000/api/movies/${id}`
        );

        setMovie(res.data);
      } catch (err) {
        console.error("Movie fetch failed", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (loading) return <h2>Loading...</h2>;
  if (!movie) return <h2>Movie not found</h2>;

  return (
    <div>
      <h1>{movie.title}</h1>

      <p>
        <strong>Year:</strong>{" "}
        {movie.year ? movie.year : "Not provided"}
      </p>

      <p>
        <strong>Rating:</strong>{" "}
        {movie.rating ? movie.rating : "Not rated"}
      </p>

      <p>
        <strong>Description:</strong>{" "}
        {movie.description ? movie.description : "No description"}
      </p>
    </div>
  );
};

export default MovieDetail;

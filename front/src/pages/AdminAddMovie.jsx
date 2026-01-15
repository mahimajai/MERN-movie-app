import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

const AdminAddMovie = () => {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");

  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();

    await api.post("/movies", {
      title,
      year,
      description,
      rating,
    });

    navigate("/");
  };

  return (
    <form onSubmit={submit}>
      <h2>Add Movie</h2>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <input
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />

      <input
        placeholder="Rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AdminAddMovie;

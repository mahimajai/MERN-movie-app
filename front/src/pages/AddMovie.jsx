import { useState } from "react";
import api from "../api/axios";

const AddMovie = () => {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");

  const submit = async (e) => {
    e.preventDefault(); 

    try {
      const res = await api.post("/movies", {
        title,
        year,
        rating,
        description,
      });

      alert("Movie added");
      console.log(res.data);

      setTitle("");
      setYear("");
      setRating("");
      setDescription("");
    } catch (err) {
      console.error(err);
      alert("Add movie failed");
    }
  };

  return (
    <form onSubmit={submit}>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
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
      window.location.href = "/";

    </form>
  );
};

export default AddMovie;

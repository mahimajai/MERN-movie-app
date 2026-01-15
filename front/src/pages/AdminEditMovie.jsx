import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../../front/src/api/axios";

const AdminEditMovie = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    api.get(`/movies/${id}`).then((res) => setTitle(res.data.title));

  }, [id]);

  const update = async () => {
    await api.put(`/movies/${id}`, { title });
    navigate("/");
  };

  const del = async () => {
    await api.delete(`/movies/${id}`);
    navigate("/");
  };

  return (
    <>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button onClick={update}>Update</button>
      <button onClick={del}>Delete</button>
    </>
  );
};

export default AdminEditMovie;

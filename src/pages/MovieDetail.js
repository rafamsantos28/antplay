// url=https://github.com/rafamsantos28/antplay-plus/blob/main/src/pages/MovieDetail.js
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

// Dummy data
const movieData = {
  "1": { title: "F1: O Filme", description: "Descrição do Filme 1", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
  "2": { title: "Hotel Amor", description: "Descrição do Filme 2", videoUrl: "https://www.w3schools.com/html/movie.mp4" },
  "3": { title: "The Long Walk", description: "Descrição do Filme 3", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" }
};

const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movieData[id];

  if (!movie)
    return <div><h3>Filme não encontrado</h3></div>

  return (
    <div style={{ padding: "2rem" }}>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <button className="btn-primary" onClick={() => navigate(`/player/${id}`)}>
        Assistir agora
      </button>
    </div>
  );
};

export default MovieDetail;

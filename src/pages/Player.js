// url=https://github.com/rafamsantos28/antplay-plus/blob/main/src/pages/Player.js
import React from "react";
import { useParams } from "react-router-dom";

const movieData = {
  "1": { title: "F1: O Filme", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
  "2": { title: "Hotel Amor", videoUrl: "https://www.w3schools.com/html/movie.mp4" },
  "3": { title: "The Long Walk", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" }
};

const Player = () => {
  const { id } = useParams();
  const videoUrl = movieData[id]?.videoUrl;

  if (!videoUrl) return <div>Vídeo não encontrado.</div>;

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Player</h2>
      <video controls width="800" style={{ borderRadius: "8px" }}>
        <source src={videoUrl} type="video/mp4" />
        O teu navegador não suporta vídeo.
      </video>
    </div>
  );
};

export default Player;

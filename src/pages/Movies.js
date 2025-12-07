// url=https://github.com/rafamsantos28/antplay-plus/blob/main/src/pages/Movies.js
import React from "react";
import { Link } from "react-router-dom";

// Dummy movies for example
const movies = [
  { id: "1", title: "F1: O Filme", cover: "https://via.placeholder.com/200x300?text=Filme+1" },
  { id: "2", title: "Hotel Amor", cover: "https://via.placeholder.com/200x300?text=Filme+2" },
  { id: "3", title: "The Long Walk", cover: "https://via.placeholder.com/200x300?text=Filme+3" }
];

const Movies = () => (
  <div style={{ padding: "2rem" }}>
    <h2>Todos os Filmes</h2>
    <div style={{ display: "flex", gap: "32px", flexWrap: "wrap" }}>
      {movies.map(movie => (
        <Link key={movie.id} to={`/movie/${movie.id}`}>
          <div className="card">
            <img src={movie.cover} alt={movie.title} style={{ width: '180px', borderRadius: '6px' }} />
            <h4>{movie.title}</h4>
            <button className="btn-primary">Ver detalhes</button>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

export default Movies;

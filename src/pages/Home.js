// url=https://github.com/rafamsantos28/antplay-plus/blob/main/src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div style={{ padding: "2rem" }}>
    <h1>Bem-vindo à AnTPlay+</h1>
    <p>Os melhores filmes com qualidade!</p>
    <Link to="/movies">
      <button className="btn-primary">Ver todos os conteúdos</button>
    </Link>
  </div>
);

export default Home;

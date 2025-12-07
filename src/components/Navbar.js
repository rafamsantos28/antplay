// url=https://github.com/rafamsantos28/antplay-plus/blob/main/src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-brand">AnTPlay+</div>
    <div className="navbar-menu">
      <Link to="/">Início</Link>
      <Link to="/movies">Filmes</Link>
      <Link to="/profiles">Perfis</Link>
    </div>
    <Link to="/login">
      <button className="btn-primary">Entrar</button>
    </Link>
  </nav>
);

export default Navbar;

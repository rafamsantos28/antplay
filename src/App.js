// url=https://github.com/rafamsantos28/antplay-plus/blob/main/src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetail from "./pages/MovieDetail";
import Player from "./pages/Player";
import Login from "./pages/Login";
import ProfileManagement from "./pages/ProfileManagement";

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movie/:id" element={<MovieDetail />} />
      <Route path="/player/:id" element={<Player />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profiles" element={<ProfileManagement />} />
    </Routes>
  </Router>
);

export default App;

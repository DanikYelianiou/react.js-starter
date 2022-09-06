import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Home from "./pages/home/index";
import Blog from "./pages/blog/index";
import Contacts from "./pages/contacts/index";
import Movie from "./pages/movie/index";
import Pricing from "./pages/pricing/index";
import TVShow from "./pages/tvShow/index";

import { Header } from "./components";
import { Footer } from "./components";


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/contacts" element={<Contacts />}/>
        <Route path="/movie" element={<Movie />}/>
        <Route path="/pricing" element={<Pricing />}/>
        <Route path="/tvShow" element={<TVShow />}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

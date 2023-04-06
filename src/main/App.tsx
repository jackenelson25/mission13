import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from '../Home';
import Layout from '../Layout';
import MovieList from '../Movies';
import Podcasts from '../podcasts';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={<Home saying="The Joel Hilton Movie Collection" />}
            />
            <Route path="podcasts" element={<Podcasts />} />
            <Route path="movies" element={<MovieList />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

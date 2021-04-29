import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div id="nav">
    <h1>Movie Dashboard</h1>
    <nav>
      <div id="nav_right">
        <div id="nav_links">
          <Link to="/home">Home</Link>
          <Link to="/movies">All Titles</Link>
        </div>
        <p id="source">
          *This site uses data from the
          <Link
            to={{ pathname: 'https://developers.themoviedb.org/3' }}
            target="_blank"
          >
            {' '}
            TMDB Api
          </Link>
        </p>
      </div>
    </nav>
  </div>
);

export default Navbar;

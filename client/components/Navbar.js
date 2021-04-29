import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div>
    <h1>Stackathon</h1>
    <nav>
      <div>
        <p>
          This site uses data from the
          <Link
            to={{ pathname: 'https://developers.themoviedb.org/3' }}
            target="_blank"
          >
            {' '}
            TMDB Api
          </Link>
        </p>
        <Link to="/home">Home</Link>
      </div>
    </nav>
    <hr />
  </div>
);

export default Navbar;

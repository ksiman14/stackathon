import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPopMovies } from '../store/popularMovies';
import GenrePie from './GenrePie';
import GenreScatter from './GenreScatter';

export class Home extends Component {
  componentDidMount() {
    this.props.fetchPopMovies();
  }

  render() {
    const popMovies = this.props.popularMovies || [];
    return (
      <div>
        <div className="row_container">
          <div className="row_box">
            <h3>Today's Most Popular Movies</h3>
            <div id="most_popular">
              {popMovies.map((movie) => (
                <div key={movie.id} className="single_movie">
                  <Link to={`/movies/${movie.id}`}>
                    <img
                      src={
                        'https://image.tmdb.org/t/p/w200' + movie.poster_path
                      }
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="row_box">
            <h3>Movie Roulette</h3>
          </div>
        </div>
        <div className="row_container">
          <GenrePie className="row_box" component={GenrePie} />
          <GenreScatter className="row_box" component={GenreScatter} />
        </div>
      </div>
    );
  }
}

const mapState = (state) => ({
  popularMovies: state.popularMovies,
});

const mapDispatch = (dispatch) => ({
  fetchPopMovies: () => dispatch(fetchPopMovies()),
});

export default connect(mapState, mapDispatch)(Home);

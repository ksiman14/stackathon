import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchMovies } from '../store/allMovies';

class AllMovies extends Component {
  componentDidMount() {
    this.props.fetchMovies();
  }

  componentWillUnmount() {}

  render() {
    const movies = this.props.movies || [];
    return (
      <div>
        <h3>All Movies</h3>
        <div id="all_movies">
          {movies.map((movie) => (
            <div key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                <img
                  src={'https://image.tmdb.org/t/p/w200' + movie.poster_path}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapState = (state) => ({
  movies: state.movies,
});

const mapDispatch = (dispatch) => ({
  fetchMovies: () => dispatch(fetchMovies()),
});

export default connect(mapState, mapDispatch)(AllMovies);

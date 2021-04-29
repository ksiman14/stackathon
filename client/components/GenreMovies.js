import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchGenreMovies } from '../store/allMovies';

class GenreMovies extends Component {
  componentDidMount() {
    this.props.fetchGenreMovies(this.props.match.params.name);
  }

  render() {
    const movies = this.props.movies || [];
    return (
      <div>
        <h3>{this.props.match.params.name} Movies</h3>
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
  fetchGenreMovies: (name) => dispatch(fetchGenreMovies(name)),
});

export default connect(mapState, mapDispatch)(GenreMovies);

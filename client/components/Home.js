import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPopMovies } from '../store/popularMovies';
import { fetchMovies } from '../store/movies';

export class Home extends Component {
  componentDidMount() {
    this.props.fetchMovies();
  }

  render() {
    const popMovies = this.props.movies || [];
    console.log(this.props);
    return (
      <div>
        <h3>Most Popular Movies</h3>
        <div id="most_popular">
          {popMovies.map((movie) => (
            <p key={movie.id}>{movie.original_title}</p>
          ))}
        </div>
      </div>
    );
  }
}

const mapState = (state) => ({
  popularMovies: state.popularMovies,
  movies: state.movies,
});

const mapDispatch = (dispatch) => ({
  fetchPopMovies: () => dispatch(fetchPopMovies),
  fetchMovies: () => dispatch(fetchMovies),
});

export default connect(mapState, mapDispatch)(Home);

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPopMovies } from '../store/popularMovies';

export class Home extends Component {
  componentDidMount() {
    this.props.fetchPopMovies();
  }

  render() {
    const popMovies = this.props.popularMovies || [];
    return (
      <div>
        <h3>Most Popular Movies</h3>
        <div id="most_popular">
          {popMovies.map((movie) => (
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
  popularMovies: state.popularMovies,
});

const mapDispatch = (dispatch) => ({
  fetchPopMovies: () => dispatch(fetchPopMovies()),
});

export default connect(mapState, mapDispatch)(Home);

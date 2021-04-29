import axios from 'axios';

const SET_MOVIES = 'SET_MOVIES';

const setMovies = (movies) => ({
  type: SET_MOVIES,
  movies,
});

export const fetchMovies = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/api/movies');
      dispatch(setMovies(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchGenreMovies = (name) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/movies/${name}`);
      dispatch(setMovies(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export default function (state = [], action) {
  switch (action.type) {
    case SET_MOVIES:
      return action.movies;
    default:
      return state;
  }
}

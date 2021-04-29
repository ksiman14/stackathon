import axios from 'axios';

const SET_POP_MOVIES = 'SET_POP_MOVIES';

const setPopMovies = (movies) => ({
  type: SET_POP_MOVIES,
  movies,
});

export const fetchPopMovies = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/api/movies/popular');
      dispatch(setPopMovies(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export default function (state = [], action) {
  switch (action.type) {
    case SET_POP_MOVIES:
      return action.movies;
    default:
      return state;
  }
}

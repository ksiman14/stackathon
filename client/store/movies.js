import axios from 'axios';

const SET_MOVIES = 'GET_MOVIES';

const setMovies = () => ({
  type: SET_MOVIES,
  movies: [{ id: 5, original_title: 'HI' }],
});

export const fetchMovies = () => {
  return async (dispatch) => {
    try {
      //const { data } = await axios.get('/api/movies');
      dispatch(setMovies());
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

import axios from 'axios';

const SET_GENRES = 'SET_GENRES';

const setGenres = (data) => ({
  type: SET_GENRES,
  data,
});

export const fetchGenres = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/api/genres');
      dispatch(setGenres(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export default function (state = [], action) {
  switch (action.type) {
    case SET_GENRES:
      return action.data;
    default:
      return state;
  }
}

import axios from 'axios';

export const fetchMovieslist = (bool) => {
  return {
      type: 'FETCH_MOVIES_LIST',
      isLoading: bool
  };
};

export const fetchMoviesSuccess = (list) => {
  return {
      type: 'FETCH_MOVIES_SUCCESS',
      data: list
  };
};

export const fetchMoviesFailure = () => {
  return {
      type: 'FETCH_MOVIES_FAILURE'
  };
};
const ROOT_URL = `https://ghibliapi.herokuapp.com/films`;

export function fetchMovies() {
  const url = `${ROOT_URL}`;
  return (dispatch) => {
      dispatch(fetchMovieslist(true));
      axios.get(url)
          .then((res) => {
            console.log(res.data);
            dispatch(fetchMoviesSuccess(res.data))
          })
          .catch(() => dispatch(fetchMoviesFailure()));
  };
}
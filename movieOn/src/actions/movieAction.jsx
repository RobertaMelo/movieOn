import * as types from './actionTypes';
import axios from 'axios';

const URL = 'http://www.omdbapi.com/';
const API_KEY = 'apikey=46a24710';
const INITIAL_SEARCH = '&s=avengers';

export const changeTitle = event => ({
  type: types.MOVIE_SEARCH,
  payload: event.target.value
})

export const search = () => {
  return (dispatch, getState) => {
      const title = getState().movie.title;
      const search = title ? `&s=/${title}/` : INITIAL_SEARCH;
      axios.get(`${URL}?${search}&${API_KEY}`)
          .then(resp => dispatch({type: types.MOVIE_LOAD, payload: resp.data.Search}));
  }
}

export const detail = (imdbID) => {
  return dispatch => {
    const search = `&i=${imdbID}&plot=full&r=json`;
    axios.get(`${URL}?${search}&${API_KEY}`)
        .then(resp => dispatch({type: types.MOVIE_DETAIL, payload: resp.data}));
  }
} 
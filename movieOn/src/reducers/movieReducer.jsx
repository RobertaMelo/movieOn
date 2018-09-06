import initialState from './initialState';
import {MOVIE_SEARCH, MOVIE_DETAIL, MOVIE_LOAD} from '../actions/actionTypes';

export default function movie(state = initialState.movie, action) {
  switch (action.type) {
    case MOVIE_SEARCH: 
            return {...state, title: action.payload}
    case MOVIE_LOAD:
      return {...state, list: action.payload};
    case MOVIE_DETAIL:
      return {...state, datail: action.payload};
    default:
      return state;
  }
}
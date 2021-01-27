import {
  FETCH_MOVIE_FAILURE,
  FETCH_MOVIE_REQUEST,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  ADD_MOVIE,
  REMOVE_MOVIE,
  FILTER_MOVIES,
  CHANGE_CATEGORY
} from './types';

const movieRequested = () => {
  return {
    type: FETCH_MOVIE_REQUEST
  }
};

const movieLoaded = (newMovie) => {
  return {
    type: FETCH_MOVIE_SUCCESS,
    payload: newMovie
  }
};

const movieError = (error) => {
  return {
    type: FETCH_MOVIE_FAILURE,
    payload: error
  };
};

const moviesRequested = () => {
  return {
    type: FETCH_MOVIES_REQUEST
  }
};

const moviesLoaded = (newMovies) => {
  return {
    type: FETCH_MOVIES_SUCCESS,
    payload: newMovies
  }
};

const moviesError = (error) => {
  return {
    type: FETCH_MOVIES_FAILURE,
    payload: error
  };
};

const addJoke = (movie) => {
  return {
    type: ADD_MOVIE,
    payload: movie
  };
};

const removeJoke = (movie) => {
  return {
    type: REMOVE_MOVIE,
    payload: movie.id
  };
};

const filterMovies = (filter) => {
  return {
    type: FILTER_MOVIES,
    payload: filter
  };
};

const changeCategory = (category) => {
  return {
    type: CHANGE_CATEGORY,
    payload: category
  };
};

export {
  movieRequested,
  movieLoaded,
  movieError,
  moviesRequested,
  moviesLoaded,
  moviesError,
  addJoke,
  removeJoke,
  filterMovies,
  changeCategory
};

import {LocalStorageService} from '../services';
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
  CHANGE_CATEGORY,
  // SEARCH
} from '../actions/types';

const initialState = {
  movies: [],
  favouritesMovies: [],
  movie: {},
  searchText: '',
  filter: 'popular',
  category: 'movie',
  loading: false,
  error: null
};

export const movies = (state, action) => {
  const {type, payload} = action;
  if (state === undefined) {
    if (localStorage.favouritesJokes) {
      return {
        ...initialState,
        favouritesJokes: LocalStorageService.getItem('favouritesMovies')
      }
    } else {
      return initialState;
    }
  }

  switch (type) {
    case FETCH_MOVIE_REQUEST:
      return {
        ...state,
        movie: {},
        loading: true,
        error: null
      };
    case FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        movie: payload,
        loading: false,
        error: null
      };
    case FETCH_MOVIE_FAILURE:
      return {
        ...state,
        movie: {},
        loading: false,
        error: payload
      };
    case FETCH_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: [...state.movies, ...payload],
        loading: false,
        error: null
      };
    case FETCH_MOVIES_FAILURE:
      return {
        ...state,
        movies: [],
        loading: false,
        error: payload
      };
    case ADD_MOVIE:
      const newFavouritesMovies = [...state.favouritesMovies, payload];
      LocalStorageService.setItem('favouritesMovies', newFavouritesMovies);
      return {
        ...state,
        favouritesMovies: newFavouritesMovies
      };
    case REMOVE_MOVIE:
      const updatedFavouritesMovies = state.favouritesMovies.filter((movie) => movie.id !== payload);
      LocalStorageService.setItem('favouritesMovies', updatedFavouritesMovies);
      return {
        ...state,
        favouritesMovies: updatedFavouritesMovies
      };
    case FILTER_MOVIES:
      return {
        ...state,
        movies: [],
        filter: payload
      };
    case CHANGE_CATEGORY:
      const isUpcomingTv = (payload) => {
        if (state.category === 'movie' && state.filter === 'upcoming' && payload === 'tv') { return 'on_the_air'}
        else if (state.category === 'tv' && state.filter === 'on_the_air' && payload === 'movie') { return 'upcoming' }
        else { return state.filter }
      }
      return {
        ...state,
        movies: [],
        category: payload,
        filter: isUpcomingTv(payload)
      };
    // case SEARCH:
    //   return {
    //     ...state,
    //     movies: [...payload],
    //   };

    default:
      return state;
  }
};

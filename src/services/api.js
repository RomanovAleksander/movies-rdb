import imageFallback from '../assets/no-image.png';

const API_KEY = 'fa2b02021794026b428e1d15dc359d00';
const BASE_API_URL = 'https://api.themoviedb.org/3/';
const BASE_IMG_API = 'https://image.tmdb.org/t/p/w780/';
const BASE_IMG_MINI_API = 'https://image.tmdb.org/t/p/w500/';

class Api {
  generateUrl(path, page, query) {
    if (query) {
      return `${BASE_API_URL}${path}?query=${query}&api_key=${API_KEY}`;
    }
    if (page) {
      return `${BASE_API_URL}${path}?api_key=${API_KEY}&page=${page}`;
    }

    return `${BASE_API_URL}${path}?&api_key=${API_KEY}`;
  }

  throwCommonError(data) {
    if (data.errors && data.errors.length) {
      throw new Error(data.errors.join(' | '));
    }

    throw new Error(`${data.status_message} (error code: ${data.status_code})`);
  }

  async handleApiCall(url) {
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      this.throwCommonError(data);
    }

    return data;
  }

  getMovies(page = 1, filter, category) {
    const url = this.generateUrl(`${category}/${filter}`, page);

    return this.handleApiCall(url);
  }

  getMovie(id, category) {
    const url = this.generateUrl(`${category}/${id}`);

    return this.handleApiCall(url);
  }

  getMoviesTrailer(id, category) {
    const url = this.generateUrl(`${category}/${id}/videos`);

    return this.handleApiCall(url);
  }

  getMovieRecommendations(id) {
    const url = this.generateUrl(`movie/${id}/recommendations`);

    return this.handleApiCall(url);
  }

  getGenresListForMovies(category) {
    const url = this.generateUrl(`genre/${category}/list`);

    return this.handleApiCall(url);
  }

  getMoviePosterImageUrl(movie) {
    if (!movie.poster_path) {
      return imageFallback;
    }

    return `${BASE_IMG_API}${movie.poster_path}`;
  }

  getMoviePosterMiniImageUrl(movie) {
    if (!movie.poster_path) {
      return imageFallback;
    }

    return `${BASE_IMG_MINI_API}${movie.poster_path}`;
  }

  getMovieBackdropImageUrl(movie) {
    if (!movie.backdrop_path) {
      return imageFallback;
    }

    return `${BASE_IMG_API}${movie.backdrop_path}`;
  }

  getMovieReleaseYear(movie) {
    if (!movie.release_date) {
      return 'N/A';
    }

    return new Date(movie.release_date).getFullYear();
  }

  searchMovies(query, page = 1) {
    const url = this.generateUrl('search/movie', page, query);

    return this.handleApiCall(url);
  }
}

export default new Api();

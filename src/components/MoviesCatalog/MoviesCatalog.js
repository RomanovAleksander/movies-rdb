import React from 'react';
import { connect } from 'react-redux';
import { MovieList } from '../MovieList';
import { Api } from '../../services';
import {
  moviesLoaded, moviesRequested, moviesError
} from '../../actions';

class MoviesCatalog extends React.Component {
  constructor() {
    super();
    this.state = {
      currentMoviesPage: 2
    }
  }

  handleScroll = () => {
    const { moviesLoaded, moviesRequested, moviesError } = this.props;
    let clientHeight = document.documentElement.clientHeight;
    let bottom = document.documentElement.getBoundingClientRect().bottom;
    if (bottom - clientHeight < 50) {
      this.setState((state) => {
        return {currentMoviesPage: state.currentMoviesPage + 1}
      });

      moviesRequested();
      Api.getPopularMovies(this.state.currentMoviesPage)
        .then((data) => moviesLoaded(data.results))
        .catch((err) => {
          moviesError(err)
        });
    }
  };

  componentDidMount() {
    const { moviesLoaded, moviesRequested, moviesError } = this.props;

    moviesRequested();
    Api.getPopularMovies()
      .then((data) => moviesLoaded(data.results))
      .catch((err) => {
        moviesError(err)
      });
    Api.getPopularMovies(this.state.currentMoviesPage)
      .then((data) => moviesLoaded(data.results))
      .catch((err) => {
        moviesError(err)
      });

    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
        <MovieList movies={this.props.movies} />
    )
  }
}

const mapDispatchToProps = {
  moviesLoaded,
  moviesRequested,
  moviesError
};

const mapStateToProps = state => ({
  movies: state.movies.movies,
  loading: state.movies.loading,
  error: state.movies.error
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesCatalog);

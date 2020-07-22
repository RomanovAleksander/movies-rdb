import React from 'react';
import { connect } from 'react-redux';
import { MovieList } from '../MovieList';
import { Api } from '../../services';
import {
  moviesLoaded, moviesRequested, moviesError, filterMovies
} from '../../actions';
import {Filter} from "../Filter";

class MoviesCatalog extends React.Component {
  constructor() {
    super();
    this.state = {
      currentMoviesPage: 2,
    }
  }

  requestMovies = (page = this.state.currentMoviesPage, filterValue = this.props.filter) => {
    const { moviesLoaded, moviesRequested, moviesError } = this.props;

    moviesRequested();
    console.log(this.state.currentMoviesPage);
      Api.getMovies(page, filterValue)
        .then((data) => moviesLoaded(data.results))
        .catch((err) => {
          moviesError(err)
        });
  };

  changeFilter = (filterValue) => {
    this.props.filterMovies(filterValue);
    this.setState({
      currentMoviesPage: 2
    });

    this.requestMovies(1, filterValue);
    setTimeout(() => {
      this.requestMovies(2, filterValue);
    },300);
  };

  handleScroll = () => {
    let clientHeight = document.documentElement.clientHeight;
    let bottom = document.documentElement.getBoundingClientRect().bottom;
    if (bottom - clientHeight < 50) {
      this.setState((state) => {
        return {currentMoviesPage: state.currentMoviesPage + 1}
      });
      this.requestMovies()
    }
  };

  componentDidMount() {
    this.requestMovies(1);
    setTimeout(() => {
      this.requestMovies(2);
    },700);

    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <>
        <Filter changeFilterValue={this.changeFilter}/>
        <MovieList movies={this.props.movies}/>
      </>
    )
  }
}

const mapDispatchToProps = {
  moviesLoaded,
  moviesRequested,
  moviesError,
  filterMovies
};

const mapStateToProps = state => ({
  movies: state.movies.movies,
  filter: state.movies.filter,
  loading: state.movies.loading,
  error: state.movies.error
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesCatalog);

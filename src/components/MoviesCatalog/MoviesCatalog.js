import React from 'react';
import { connect } from 'react-redux';
import { MovieList } from '../MovieList';
import { Api } from '../../services';
import {
  moviesLoaded, moviesRequested, moviesError, filterMovies, changeCategory
} from '../../actions';
import {Filter} from "../Filter";
import {Categories} from "../Categories";

class MoviesCatalog extends React.Component {
  constructor() {
    super();
    this.state = {
      currentMoviesPage: 2
    }
  }

  requestMovies = (page = this.state.currentMoviesPage, filterValue = this.props.filter, category = this.props.category) => {
    const { moviesLoaded, moviesRequested, moviesError } = this.props;

    moviesRequested();
    console.log(this.state.currentMoviesPage);
      Api.getMovies(page, filterValue, category)
        .then((data) => moviesLoaded(data.results))
        .catch((err) => {
          moviesError(err)
        });
  };

  requestSomePages = (page, filter, category) => {
    this.requestMovies(page, filter, category);
    setTimeout(() => {
      this.requestMovies(page+1, filter, category);
    },700);
  }

  changeFilter = (filterValue) => {
    this.props.filterMovies(filterValue);
    this.setState({
      currentMoviesPage: 2,
    });

    this.requestSomePages(1, filterValue);
  };

  changeCategories = (categoryValue) => {
    this.props.changeCategory(categoryValue);
    if (this.props.category === 'movie' && this.props.filter === 'upcoming' && categoryValue === 'tv') {
      this.requestSomePages(1, 'on_the_air', categoryValue);
    } else if (this.props.category === 'tv' && this.props.filter === 'on_the_air' && categoryValue === 'movie') {
      this.requestSomePages(1, 'upcoming', categoryValue);
    } else {
      this.requestSomePages(1, this.props.filter, categoryValue);
    }
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
        <header className="header">
          <Categories changeCategoryValue={this.changeCategories}/>
          <Filter changeFilterValue={this.changeFilter} isTv={this.props.category} filter={this.props.filter}/>
        </header>
        <MovieList movies={this.props.movies}/>
      </>
    )
  }
}

const mapDispatchToProps = {
  moviesLoaded,
  moviesRequested,
  moviesError,
  filterMovies,
  changeCategory
};

const mapStateToProps = state => ({
  movies: state.movies.movies,
  filter: state.movies.filter,
  category: state.movies.category,
  loading: state.movies.loading,
  error: state.movies.error
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesCatalog);

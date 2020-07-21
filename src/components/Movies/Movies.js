import React from 'react';
import { connect } from 'react-redux';
import { MovieList } from '../MovieList';
import { Api } from '../../services';

class Movies extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      currentPage: 1
    }
  }

  handleScroll = () => {
    let clientHeight = document.documentElement.clientHeight;
    let bottom = document.documentElement.getBoundingClientRect().bottom;
    if (bottom - clientHeight < 80) {
      this.setState((state) => {
        return {currentPage: state.currentPage + 1}
      });
      Api.getPopularMovies(this.state.currentPage)
        .then((data) => this.setState({movies: [...this.state.movies, ...data.results]}))
        .catch((err) => {
          console.log(err)
        });
    }
  };

  componentDidMount() {
    Api.getPopularMovies()
      .then((data) => this.setState({movies: data.results}))
      .catch((err) => {
        console.log(err)
      });

    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <>
        <MovieList movies={this.state.movies} />
      </>
    )
  }
}

const mapDispatchToProps = {

};

const mapStateToProps = state => ({
  movies: state.movies.movies,
  loading: state.movies.loading,
  error: state.movies.error
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movies);

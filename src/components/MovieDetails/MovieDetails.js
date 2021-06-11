import React from 'react';
import './movieDetails.scss';
import {Api} from "../../services";
import {
  movieRequested, movieLoaded, movieError
} from '../../actions';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

export class MovieDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trailerKey: null,
      isOpen: false
    }
  }

  componentDidMount() {
    const { movieId,  movieLoaded, movieRequested, movieError, category } = this.props;
    document.body.style.overflow = "hidden";

    movieRequested();
    Api.getMovie(movieId, category)
      .then((data) => {movieLoaded(data); console.log(data)})
      .catch((err) => {
        movieError(err)
      });

    Api.getMoviesTrailer(movieId, category)
      .then((data) => this.setState({trailerKey: data.results[0].key}))
      .catch((err) => console.log(err));
  }

  openModal = () => {
    this.setState({isOpen: true});
  }

  render() {
    const { movie } = this.props;

    if (movie) {
      const { title, genres, runtime, release_date, first_air_date, vote_average, overview } = movie;
      const isCorrect = (date) => date ? `${date.substr(0,4)}` : '';
      const isRelease = release_date ? isCorrect(release_date) : isCorrect(first_air_date);

      return (
        <div className="details-wrapper">
          {
            this.state.isOpen ? <div className="trailer-wrapper" onClick={() => this.setState({isOpen: false})}>
              <iframe className="modal-trailer" title="Trailer"
                      src={`https://www.youtube-nocookie.com/embed/${this.state.trailerKey}`} frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen/>
            </div> : null
          }
          <img src={Api.getMoviePosterImageUrl(movie)} alt="poser" className="poster_img"/>
          <div className="details-content">
            <div className="details-content__title">{title}</div>
            <div className="details-content__info">
              <div className="details-content__inf">{genres ? genres[0].name : '-'}</div>
              <div className="details-content__inf">{isRelease}</div>
              <div className="details-content__inf">{runtime}</div>
              <div className="details-content__inf">
                <span className="icon"> </span>
                {vote_average}
              </div>
            </div>
            <div className="details-content__synopsis">
              {overview}
            </div>
            <a onClick={this.openModal} className="trailer_btn">Trailer</a>
          </div>
          <div className="close_btn" onClick={() => {
            this.props.history.push(`/`);
            document.body.style.overflow = "auto";
          }}>X</div>
        </div>
      )
    } else {
      return <div>Ooopppss</div>
    }
  }
}

const mapDispatchToProps = {
  movieLoaded,
  movieRequested,
  movieError
};

const mapStateToProps = state => ({
  loading: state.movies.loading,
  error: state.movies.error,
  movie: state.movies.movie,
  category: state.movies.category
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(MovieDetails));

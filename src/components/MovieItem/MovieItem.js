import React from 'react';
import './movieItem.scss';
import {Api} from "../../services";

export class MovieItem extends React.Component {
  constructor() {
    super();
    this.state = {
      style: {
        transform: 'scale(0, 0)',
        transitionDelay: `0s, 0s`,
        transitionProperty: 'opacity, transform',
        transitionDuration: '0.3s',
        transitionTimingFunction: 'ease',
        opacity: '0'
      },
      hover: false
    }
  }

  mountStyle = () => {
    this.setState({
      style : {
        transform: 'scale(1, 1)',
        transitionDelay: `0s, ${this.props.delay}s`,
        transitionProperty: 'opacity, transform',
        transitionDuration: '0.3s',
        transitionTimingFunction: 'ease',
        opacity: '1'
      }
    })
  };

  componentDidMount() {
    setTimeout(this.mountStyle, 10);
  }

  toggleHover = () => {
    this.setState({hover: !this.state.hover})
  };

  render() {
    const { title, vote_average, release_date, name, first_air_date } = this.props.movie;
    const hover = this.state.hover ? {opacity: '1'} : {opacity: '0'};
    const isCorrect = (date) => date ? `(${date.substr(0,4)})` : '';
    const isTitle = title ? title : name;
    const isRelease = release_date ? isCorrect(release_date) : isCorrect(first_air_date);

    return (
      <div className="movie-item" style={this.state.style}
           onMouseEnter={this.toggleHover}
           onMouseLeave={this.toggleHover}
           onClick={this.props.onView} >
        <img src={Api.getMoviePosterMiniImageUrl(this.props.movie)} alt=""/>
        <div className="movie-item__details glow" style={hover}>
          <div className="details__title-year">
            <div className="details-title">
              {isTitle}
            </div>
            <div className="details__year">
              {isRelease}
            </div>
          </div>
          <div className="details__vote">
            <span className="icon"> </span>
            {vote_average}
          </div>
        </div>
      </div>
    )
  }
}

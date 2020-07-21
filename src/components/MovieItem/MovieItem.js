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
      }
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

  render() {
    return (
      <div className="movie-item" style={this.state.style}>
        <img src={Api.getMoviePosterMiniImageUrl(this.props.movie)} alt=""/>
      </div>
    )
  }
}

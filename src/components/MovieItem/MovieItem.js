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
        opacity: '0'
      }
    }
  }

  mountStyle = () => {
    this.setState({
      style : {
        transform: 'scale(1, 1)',
        transitionDelay: `0s, ${this.props.delay}s`,
        opacity: '1'
      }
    })
  };

  componentDidMount() {
    setTimeout(this.mountStyle, 700);
  }

  render() {
    return (
      <div className="movie-item" style={this.state.style}>
        <img src={Api.getMoviePosterImageUrl(this.props.movie)} alt=""/>
      </div>
    )
  }
}

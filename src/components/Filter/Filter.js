import React from 'react';
import './filter.scss';

export default class Filter extends React.Component{
  constructor() {
    super();
    this.state = {
      filter: 'popular'
    }
  }

  handleClick = (e) => {
    const { changeFilterValue } = this.props;
    let target = e.target.dataset.filter;
    console.log(target);

    if (target !== this.state.filter) {
      this.setState({
        filter: target
      });

      changeFilterValue(target);
    }
  };

  render() {
    return (
      <div className="movies-filter">
        <ul onClick={this.handleClick}>
          <li className={this.state.filter === 'popular' ? 'active' : ''} data-filter="popular">Popular</li>
          <li className={this.state.filter === 'top_rated' ? 'active' : ''} data-filter="top_rated">Top rated</li>
          <li className={this.state.filter === 'upcoming' ? 'active' : ''} data-filter="upcoming">Upcoming</li>
        </ul>
      </div>
    )
  }
}

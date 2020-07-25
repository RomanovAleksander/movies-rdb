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
    const disable = false;
    const isActive = (value) => this.state.filter === value ? 'active' : '';
    return (
      <div className="movies-filter">
        <ul onClick={disable ? null : this.handleClick}>
          <li className={isActive('popular')} data-filter="popular">Popular</li>
          <li className={isActive('top_rated')} data-filter="top_rated">Top rated</li>
          <li className={isActive('upcoming')} data-filter="upcoming">Upcoming</li>
        </ul>
      </div>
    )
  }
}

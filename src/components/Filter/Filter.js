import React from 'react';
import './filter.scss';

export default class Filter extends React.Component{


  handleClick = (e) => {
    const { changeFilterValue } = this.props;
    let target = e.target.dataset.filter;
    console.log(target);

    if (target !== this.props.filter) {
      this.setState({
        filter: target
      });

      changeFilterValue(target);
    }
  };

  render() {
    const disable = false;
    const isActive = (value) => this.props.filter === value ? 'active' : '';
    return (
      <div className="movies-filter">
        <ul onClick={disable ? null : this.handleClick}>
          <li className={isActive('popular')} data-filter="popular">Popular</li>
          <li className={isActive('top_rated')} data-filter="top_rated">Top rated</li>
          {
            this.props.isTv === 'tv' ? <li className={isActive('on_the_air')} data-filter="on_the_air">On The Air</li> :
            <li className={isActive('upcoming')} data-filter="upcoming">Upcoming</li>
          }
        </ul>
      </div>
    )
  }
}

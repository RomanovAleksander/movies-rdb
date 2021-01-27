import React from 'react';
import './categories.scss'

export default class Categories extends React.Component {
  constructor() {
    super();
    this.state = {
      category: 'movie'
    }
  }

  handleClick = (e) => {
    const { changeCategoryValue } = this.props;
    let target = e.target.dataset.category;
    console.log('target: ', target);

    if (target !== this.state.category) {
      this.setState({
        category: target
      });

      changeCategoryValue(target);
    }
  };

  render() {
    const disable = false;
    const isActive = (value) => this.state.category === value ? 'active' : '';
    return (
      <nav className="nav" onClick={disable ? null : this.handleClick}>
        <div className={`nav__btn ${isActive('movie')}`} data-category="movie">
          Movies
        </div>
        <div className={`nav__btn ${isActive('tv')}`} data-category="tv">
          TV
        </div>
      </nav>
    )
  }
}

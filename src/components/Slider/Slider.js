import React from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import {Api} from "../../services";
import './slider.scss';

let timer;

export class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      sliderMovies: [],
      movie: {},
      img: '',
      err: {},
      activeIndex: 1,
      left: 0,
      sliderWidth: 0
    };
  }

  componentDidMount() {
    Api.getPopularMovies(1)
      .then((data) => {
        this.setState({
          movies: data.results,
          sliderMovies: data.results.slice(0, 5),
          movie: data.results[5],
          img: Api.getMovieBackdropImageUrl(data.results[5])
        });
        console.log(data)
      })
      .catch((err) => {
        this.setState({
          err: err
        });
      });
    // Api.searchMovies('joker', 1)
    //   .then((data) => {
    //     console.log(data)
    //   })
    this.onElementWidthChange();
    this.autoSlider();
  }

  onElementWidthChange() {
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const {width} = entry.contentRect;
        this.setState({
          sliderWidth: width
        });
      }
    });

    ro.observe(document.querySelector('.slider'));
  }

  nextSlide() {
    this.setState({
      activeIndex: this.state.activeIndex + 1,
      left: this.state.left - this.state.sliderWidth
    });
    if (this.state.activeIndex === this.state.sliderMovies.length + 1) {
      this.setState({
        activeIndex: this.state.activeIndex - this.state.sliderMovies.length,
        left: 0
      });
    }
    this.autoSlider();
  }

  clickIndicator(e) {
    this.setState({
      activeIndex: parseInt(e.target.textContent),
      left: this.state.sliderWidth - parseInt(e.target.textContent) * this.state.sliderWidth
    });
    clearInterval(timer);
    this.autoSlider();
  }

  autoSlider() {
    clearInterval(timer);
    timer = setInterval(() => {
      this.nextSlide();
    }, 5000);

  }

  render() {
    console.log(this.state);

    // const genres = (genres) => {
    //   console.log(genres);
    //   let nestedArray = [];
    //   let result;
    //
    //   if(genres !== undefined){
    //     genres.forEach((item) => {
    //       nestedArray.push(item.name);
    //     });
    //   }
    //   result = nestedArray.join('/');
    //   return result;
    // };

    return (
      <>
        <div className="slider">
          <div className="slider-inner" style={
            {
              left: this.state.left
            }
          }>
            {this.state.sliderMovies.map((item) => {
              return (
                <div className="slider-item" style={
                  {
                    backgroundImage: `url(${Api.getMovieBackdropImageUrl(item)}`
                  }
                }
                     key={item.id}>
                  <div className="slider-item__title">{item.title}</div>
                  <div className="slider-item__details">
                    <span>{item.release_date}</span>
                    <span>{item.vote_average}</span>
                  </div>
                  <div className="slider-item__footer">
                    <button>Watch Trailer</button>
                    <button>View Details</button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="slider-dots">
          {this.state.sliderMovies.map((item, index) => {
            return (
              <div className={index + 1 === this.state.activeIndex ? 'active' : ''}
                   onClick={() => {
                     console.log(this.clickIndicator())
                   }}
                   key={index}>
                {index + 1}
              </div>
            )
          })}
        </div>
        <div>
          {this.state.movies.map((item) => {
            return (
              <div className="slider-item" style={
                {
                  backgroundImage: `url(${Api.getMovieBackdropImageUrl(item)}`
                }
              }
                   key={item.id}>
                <div className="slider-item__title">{item.title}</div>
                <div className="slider-item__details">
                  <span>{item.release_date}</span>
                  <span>{item.vote_average}</span>
                </div>
                <div className="slider-item__footer">
                  <button>Watch Trailer</button>
                  <button>View Details</button>
                </div>
              </div>
            )
          })}
        </div>
      </>
    );
  }
}

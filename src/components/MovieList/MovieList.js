import React from 'react';
import { ErrorIndicator } from '../ErrorIndicator';
import './movieList.scss';
import { MovieItem } from "../MovieItem";

export const MovieList = ({ movies, isMovie, loading, error, onView }) => {
  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return (
      <div className="list">
        <ErrorIndicator/>
      </div>
    )
  }

  if (movies) {
    // console.log('movies: ', movies);

    return (
      <div className="list">
        {
          movies.map((movie) => {
            return (
              <div className="item-wrapper" key={movie.id}>
                <MovieItem
                  isMovie={isMovie}
                  movie={movie}
                  delay={(movies.indexOf(movie)%20)*0.04}
                  onView={() => onView(movie.id)}
                />
              </div>
            )
          })
        }
      </div>
    )
  } else {
    return <div>Nothing</div>
  }
};

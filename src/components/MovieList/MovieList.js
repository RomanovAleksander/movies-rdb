import React from 'react';
import { ErrorIndicator } from '../ErrorIndicator';
import './movieList.scss';
import { MovieItem } from "../MovieItem";

export const MovieList = ({ movies, loading, error }) => {
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
    console.log(movies);
    return (
      <div className="list">
        {
          movies.map((movie) => {
            return (
              <div key={movie.id}>
                <MovieItem
                  movie={movie}
                  delay={(movies.indexOf(movie)%20)*0.04}
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

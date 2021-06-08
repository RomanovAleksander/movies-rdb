import React from 'react';
import { Route, Switch} from 'react-router-dom';
import { Catalog } from "../../pages";
import {MovieDetails} from "../MovieDetails";
import './app.scss';

export const App = () => {
  return (
    <>
      <Catalog/>
      <Switch>
        <Route path="/:id"
               component={({match}) => {
                 const {id} = match.params;
                 return <MovieDetails movieId={id}/>
               }}
        />
      </Switch>
    </>
  );
};

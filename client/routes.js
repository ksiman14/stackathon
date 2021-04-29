import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import AllMovies from './components/AllMovies';
import SingleMovie from './components/SingleMovie';

/**
 * COMPONENT
 */
class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route exact path="/movies" component={AllMovies} />
          <Route path="/movies/:id" component={SingleMovie} />
        </Switch>
      </div>
    );
  }
}

export default Routes;

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
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
          <Route path="/movies/:id" component={SingleMovie} />
        </Switch>
      </div>
    );
  }
}

export default Routes;

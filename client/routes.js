import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';

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
        </Switch>
      </div>
    );
  }
}

export default Routes;

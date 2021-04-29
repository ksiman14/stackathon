import React, { Component } from 'react';
import { connect } from 'react-redux';

class SingleMovie extends Component {
  render() {
    return (
      <div>
        <h3>SINGLE MOVIE VIEW</h3>
      </div>
    );
  }
}

export default connect(null, null)(SingleMovie);

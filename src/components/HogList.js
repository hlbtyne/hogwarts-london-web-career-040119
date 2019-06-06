import React, { Component } from 'react';

import Hog from './Hog'


class HogList extends Component {
  render() {
    return (
      <div className="ui cards"> 
        {
          this.props.hogs.map( hog => < Hog handleClick={this.props.selectHog} key={`hog-${hog.name}`} hog={hog} />)
        }
      </div>
    );
  }
}

export default HogList;

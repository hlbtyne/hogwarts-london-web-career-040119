import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogList from './HogList';
import HogDetails from './HogDetails';

class App extends Component {
  
  state = {
    hogs : hogs,
    selectedHog: null
  }

  selectHog = (hog) => {
    this.setState({ selectedHog: hog})
  }

  deselectHog = (hog) => {
    this.setState({ selectedHog: null})
  }
  
  

  render() {
    return (
      <div className="App">
          < Nav />
          {
            this.state.selectedHog 
              ? <HogDetails hog={this.state.selectedHog} deselectHog={this.deselectHog} /> 
              : < HogList hogs={ hogs } selectHog={this.selectHog} />
          }
      </div>
    )
  }
}

export default App;

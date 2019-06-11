import React, { Component } from 'react';

class HogDetails extends Component {

  render() {

    const imgFileName = this.props.hog.name.toLowerCase().split(' ').join('_')
    const imgSrc = require(`./hog-imgs/${imgFileName}.jpg`)

    const fridgeWeight = 309;
    const ratio = this.props.hog["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]
    const hogWeight = fridgeWeight * ratio

    return (
      <div>
        <div className="ui raised card">
          <div className="image">
            <img src={imgSrc}/>
          </div>
          <div className="content">
            <div className="header">{this.props.hog.name}</div>
            <div className="description">Specialty: {this.props.hog.specialty}</div>
            <div className="description">Weight: {Math.round( hogWeight * 10 ) / 10} lbs.</div>
            <div className="description">Highest medal achieved: {this.props.hog['highest medal achieved']}</div>
            <div className="description">
              { this.props.hog.greased ? <strong>greased</strong> : <strong> not greased</strong>}
            </div> 
          </div>
        </div>
        <button onClick={ this.props.deselectHog } className="ui button">BACK</button>
      </div>
      
    
    );
  }
}

export default HogDetails;

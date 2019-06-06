import React, { Component } from 'react';

class HogDetails extends Component {

  render() {

    const imgFileName = this.props.hog.name.toLowerCase().split(' ').join('_')
    const imgSrc = require(`./hog-imgs/${imgFileName}.jpg`)

    return (
      <div>
        <div className="ui raised card">
          <div className="image">
            <img src={imgSrc}/>
          </div>
          <div className="content">
            <div className="header">{this.props.hog.name}</div>
            <div className="description">Specialty: {this.props.hog.specialty}</div>
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

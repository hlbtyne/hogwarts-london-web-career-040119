import React, { Component } from 'react';

class Hog extends Component {
  render() {
    const imgFileName = this.props.hog.name.toLowerCase().split(' ').join('_')
    const imgSrc = require(`./hog-imgs/${imgFileName}.jpg`)
    
    return (
    
      <div  className="ui raised card">
        <div onClick={ () => this.props.handleClick(this.props.hog)} className="image">
          <img src={imgSrc}/>
        </div>
        <div className="content">
          <div className="header">{this.props.hog.name}</div>
        </div>
      </div>

      
    );
  }
}

export default Hog;

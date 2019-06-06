import React, { Component } from 'react';

// {
//   name: 'Mudblood',
//   specialty: 'Mediocre magic',
//   greased: false,
//   'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water': 2.0,
//   'highest medal achieved': 'bronze'
// },

class Hog extends Component {
  render() {
    const imgFileName = this.props.hog.name.toLowerCase().split(' ').join('_')
    const imgSrc = require(`./hog-imgs/${imgFileName}.jpg`)
    // debugger
    return (
      // <div class="">
      //     <img src={imgSrc}></img>
      //     <p class="description" >Name: {this.props.hog.name}</p>
      //     {/* <p>Specialty: {this.props.hog.specialty}</p>
      //     <p>Greased: {this.props.hog.greased}</p> */}
      // </div>

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

import React, { Component } from 'react'




  

export default class Card extends Component {
    constructor(props){
        super(props);

    }




  render() {

    return (
      <>
      
      <div className="movie">
      <figure>
      <img src={`${this.props.Poster}`} />
        <figcaption>
        <h2 className="movie__title">{this.props.Title}</h2>
        </figcaption>
      </figure>
    </div>
      
      
      </>
    )
  }
}

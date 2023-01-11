import React, { Component } from 'react'
import Footer from './Footer';
import MovieCards from './MovieCards/MovieCards'

export default class MovieList extends Component {
  constructor(){
    super();
    this.state={
      searchMovies : [],
      query :''
    }
  }

  inputChange =(e)=>{
    this.setState({ query: e.target.value }, () => {this.searchMovie(this.state.query); 
    });

  }
 
 
  searchMovie(query) {
    if (query === '') {
      const url = `https://omdbapi.com/?apikey=45f0782a&s=war`;
      fetch (url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          searchMovies: data
        })

      }).catch((error)=>{
           console.log(error);
      });
      return;
  }
    const url = `https://omdbapi.com/?apikey=45f0782a&s=${query}`;
    
    fetch (url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          searchMovies: data
        })

      }).catch((error)=>{
           console.log(error);
      });

  }
  
  
  
  

  render() {

    return (
      <React.Fragment>

<section className='main-container'>
    <div className="search-input">
        <input type="text" placeholder='Search For Movie Title....' onChange={(e)=>this.inputChange(e) } />
    </div>
    <MovieCards searchMovies = {this.state.searchMovies.Search}/>
<Footer/>
</section>



      </React.Fragment>
    )
  }
}

import React, { Component } from 'react'
import Card from '../Card';

export default class MovieCards extends Component {
    constructor(props){
        super(props);
        this.state = {
            movies: [],
          };
    }
  getPopularMovies() {
    const url = `https://omdbapi.com/?apikey=45f0782a&s=war`;
    
    fetch (url)
      .then(response => response.json())
      .then(data => {
        // console.log(data)
        this.setState({
          movies: data.Search
        })
      });
  }
  componentDidUpdate(prevProps) {
    if(this.props.searchMovies !== prevProps.searchMovies && this.props.searchMovies !== undefined ){
        this.setState({
            movies: this.props.searchMovies
        });
    }
    else if (this.state.movies.length === 0) {
        this.getPopularMovies();
    }
}

 componentDidMount() {
        this.getPopularMovies();

      }
  render() {
    const {movies} = this.state
    return (
      <section className='movie-content'>

<ul className="movies">
    {movies && movies.length>0  && movies.map(movie => (
      <li key={movie.id}>
        <Card {...movie} />
      </li>
    ))}
  </ul>

      </section>
    )
  }
}

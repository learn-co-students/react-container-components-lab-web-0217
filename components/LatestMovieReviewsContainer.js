
const React = require('react');
const { Component } = require('react');
const { fetch } = require('whatwg-fetch');

const MovieReviews = require('./MovieReviews');

class LatestMovieReviewsContainer extends Component{
  constructor(){
    super()

    this.state = {
      reviews: [],
    }
  }

  componentWillMount(){
    fetch('https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=KEYYEYEYEYFUDHIF')
      .then(res => res.json())
      .then(response => this.setState({ reviews: response.results }));
  }

  render(){
    return (
      <div className="latest-movie-reviews">
      <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

module.exports = LatestMovieReviewsContainer

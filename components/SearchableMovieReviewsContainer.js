const React = require('react');
const { Component } = require('react');
const { fetch } = require('whatwg-fetch');

const MovieReviews = require('./MovieReviews');

class SearchableReviewsContainer extends Component{
  constructor(){
    super()

    this.state = {
      reviews: [],
    }
  }

  componentWillMount(){
    fetch('https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=c7d0e0421f8c4d3b93857de57a155886')
      .then(res => res.json())
      .then(response => this.setState({ reviews: response.results }));
  }

  render(){
    return (
      <div className="searchable-movie-reviews">
      <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

module.exports = SearchableReviewsContainer;

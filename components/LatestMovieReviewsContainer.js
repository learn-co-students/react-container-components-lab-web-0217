import React from 'react'
import MovieReviews from './MovieReviews'

const API = "4cc0591c67de44389a86c422cce0ed76"

class LatestMovieReviewsContainer extends React.Component {
  constructor() {
    super()

    this.state = {
      reviews: []
    }
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <h2>The Latest Reviews:</h2>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }

}

module.exports = LatestMovieReviewsContainer

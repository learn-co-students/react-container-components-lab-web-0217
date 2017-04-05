import React from 'react'
import MovieReviews from './MovieReviews'
import "isomorphic-fetch"

export default class LatestMovieReviewContainer extends React.Component {

  constructor() {
    super()
    this.state = {
      reviews: []
    }

  }

  queryAPI() {
    const apiKey = '00ce14a2b746437e8730ad4553d3f7aa'
    let baseUrl = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json'
    let url = `${baseUrl}?api-key=${apiKey}`
    console.log('Requesting...');
    fetch(url)
    .then((resp) => {
      return resp.json()
    })
    .then((data) => {
      this.setState({
        reviews: data.results
      })
    })
  }

  componentWillMount() {
    this.queryAPI()
  }



  render() {
    return (
      <div className='latest-movie-reviews'>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

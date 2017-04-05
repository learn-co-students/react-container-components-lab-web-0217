import React from 'react'
import MovieReviews from './MovieReviews'
import "isomorphic-fetch"

export default class LatestMovieReviewsContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      reviews: []
      }
    }

    queryAPI() {
      const API_KEY = "00ce14a2b746437e8730ad4553d3f7aa"
      let baseUrl = "https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key="
      let searchUrl = baseUrl + API_KEY
      console.log("Requesting...")
      fetch(searchUrl)
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
    <div className="latest-movie-reviews">
      <MovieReviews reviews={this.state.reviews}/>
    </div>
    )
  }
}

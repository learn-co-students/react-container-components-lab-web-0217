import React from 'react'
import MovieReviews from './MovieReviews'
import "isomorphic-fetch"


export default class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      reviews: [],
      query: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

    handleChange(event) {
      this.setState({
        query: event.target.value
      })
    }

    handleSubmit(event) {
      event.preventDefault()
      this.queryApi(this.state.query)
    }

    queryAPI(query) {
      const API_KEY = "00ce14a2b746437e8730ad4553d3f7aa"
      let baseUrl = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key="
      let searchUrl = baseUrl + API_KEY + this.state.query
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

   render() {
     return (
     <div className='searchable-movie-reviews'>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.query} onChange={this.handleChange} />
            <input type="submit" />
          </form>
        </div>
        <div className="searched-reviews">
          <MovieReviews reviews={this.state.reviews} />
        </div>
     </div>
   )
   }

 }

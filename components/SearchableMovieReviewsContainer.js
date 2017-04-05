import React from 'react'
import MovieReviews from './MovieReviews'

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

  handleChange(ev) {
    this.setState({
      query: ev.target.value
    })
  }

  handleSubmit(ev) {
    ev.preventDefault()
    this.queryAPI(this.state.query)
  }

  queryAPI(searchTerm) {
    const apiKey = '00ce14a2b746437e8730ad4553d3f7aa'
    let baseUrl = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json'
    let url = `${baseUrl}?api-key=${apiKey}&query=${searchTerm}`
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

  render() {
    return (
      <div className='searchable-movie-reviews'>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type='text' onChange={this.handleChange} value={this.state.query} />
            <input type='submit' />
          </form>
        </div>
        <div className='searched-reviews'>
          <MovieReviews reviews={this.state.reviews} />
        </div>
      </div>

    )
  }
}

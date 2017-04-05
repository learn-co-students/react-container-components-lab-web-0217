import React from 'react'

const MovieReviews = ({ reviews }) => (
  <div className='review-list'>
    {reviews.map((review, i) => {
      return (
        <div key={i} className='review'>
          <p>{review.display_title}</p>
          <p>{review.byline}</p>
        </div>
      )
    })}
  </div>
)

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews

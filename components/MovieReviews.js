import React from 'react'

const MovieReviews = ({reviews}) => (
  <div className="review-list">
    {reviews.map((review, i) => {
      return (
        <div key={i} className="review">
          <h1>{review.display_title}</h1>
          <h4>{review.critics_pick === 0 ? "Not Critic Recommended" : "Critic Recommended"}</h4>
          <p>{review.summary_short}</p>
        </div>
      )
    })}
  </div>
  )

MovieReviews.defaultProps = {
  reviews: []
}
export default MovieReviews

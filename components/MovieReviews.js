import React from 'react'

const MovieReviews = ({reviews}) => {
  let allReviews = []
  reviews.map((review, i) => {
    allReviews.push(<div className="review" key={i}>{review.display_title}</div>)
  })
  return(
    <div className="review-list">
      {allReviews}
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: []
}


export default MovieReviews

import React from 'react'
import ReactDOM from 'react-dom'
import LatestMovieReviewsContainer from './components/LatestMovieReviewsContainer'
import SearchableMovieReviewsContainer from './components/SearchableMovieReviewsContainer'
import 'whatwg-fetch'


ReactDOM.render(
  <div className="app">
    <LatestMovieReviewsContainer />
    <SearchableMovieReviewsContainer />
  </div>,
  document.getElementById('main')
);

require('./test/index-test.js'); // Leave this in!

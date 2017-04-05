const React = require('react');
const ReactDOM = require('react-dom');
import LatestMovieReviewsContainer from './components/LatestMovieReviewsContainer'
import SearchableMovieReviewsContainer from './components/SearchableMovieReviewsContainer'

ReactDOM.render(
  <div className="app">
    <LatestMovieReviewsContainer />
    <SearchableMovieReviewsContainer />
  </div>,
  document.getElementById('main')
);

require('./test/index-test.js'); // Leave this in!

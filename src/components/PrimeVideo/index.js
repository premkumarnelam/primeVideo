// Write your code here
import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMovies = moviesList.filter(
    eachItem => eachItem.categoryId === 'ACTION',
  )

  console.log(actionMovies)

  const comedyMovies = moviesList.filter(
    eachItem => eachItem.categoryId === 'COMEDY',
  )
  console.log(comedyMovies)

  return (
    <div className="app-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        className="prime-video-img"
        alt="prime video"
      />
      <div className="responsive-container">
        <h1 className="movie-category-heading">Action Movies</h1>

        <MoviesSlider moviesList={actionMovies} />

        <h1 className="movie-category-heading">Comedy Movies</h1>

        <MoviesSlider moviesList={comedyMovies} />
      </div>
    </div>
  )
}

export default PrimeVideo

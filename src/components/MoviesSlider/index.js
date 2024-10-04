// Write your code here
import Slider from 'react-slick'
import MovieItem from '../MovieItem'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MoviesSlider = props => {
  const {moviesList} = props
  console.log(moviesList)
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  return (
    <Slider {...settings}>
      {moviesList.map(eachItem => (
        <div key={eachItem.id}>
          <MovieItem movieItem={eachItem} />
        </div>
      ))}
    </Slider>
  )
}

export default MoviesSlider

import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'
import PlanetItem from '../PlanetItem'

const PlanetsSlider = props => {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const {planetsList} = props

  return (
    <div className="planets-slider-container">
      <Slider {...settings} items={planetsList}>
        {planetsList.map(eachItem => (
          <PlanetItem itemDetails={eachItem} key={eachItem.id} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider

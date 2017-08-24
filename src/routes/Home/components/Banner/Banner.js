import React from 'react'
import { IndexLink, Link } from 'react-router'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.scss'
import 'slick-carousel/slick/slick-theme.scss'
import './banner.scss'
import proxy from 'utils/proxy'

export class Banner extends React.Component  {
  componentDidMount(){
    setTimeout(() => {
      this.refs.slider.forceUpdate()
    }, 500)
  }
  render() {
    const settings = {
      dots: true,
      autoplay: false,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      arrow: false
    }

    return (

      <div className="banner">
        {
          this.props.banners.length ?
            (
              <Slider ref='slider' {...settings}>
                {
                  this.props.banners.map((item, index) => (
                    <div key={index} style={{backgroundImage: 'url(' + proxy(item.image) + ')'}}>
                      <div className="text">
                        {item.title}
                      </div>
                    </div>
                  ))
                }
              </Slider>
            )
            : ''
        }
      </div>
    )
  }

}

export default Banner

import React from 'react'
import { IndexLink, Link } from 'react-router'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.scss'
import 'slick-carousel/slick/slick-theme.scss'
import './banner.scss'

export class Banner extends React.Component  {
  componentDidMount(){
    setTimeout(() => {
      console.log(this.refs.slider)
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
        <Slider ref='slider' {...settings}>
          {
            this.props.banners.map((item, index) => (
              <div key={index} style={{backgroundImage: 'url(' + item.pic + ')'}}></div>
            ))
          }
        </Slider>
      </div>
    )
  }

}

export default Banner

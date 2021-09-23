import React from 'react'
import {useState, useEffect} from 'react'

import './slider.css'
import slide1 from '../images/bg-slider-1.jpg'
import slide2 from '../images/bg-slider-2.jpg'
import slide3 from '../images/bg-slider-3.jpg'

function Slider () {
    const [activeIndex, setActiveIndex] = useState(0)


    const img = [
        <img kye={slide1} src={slide1} alt=""/>,
        <img kye={slide2} src={slide2} alt=""/>,
        <img kye={slide3} src={slide3} alt=""/>
    ]

      useEffect(() => {
          const interval = setInterval(() => {
              setActiveIndex((current) => {
                  const res = current === img.length -1 ? 0 : current +1
                  return res
              })
          }, 4000)
         return () => clearInterval(interval)
      }, [])

    const prevImgIndex = activeIndex ? activeIndex -1 : img.length -1
    const nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex +1


    return (
        <div className="slider">
            <div className="slider-img slider-img-prev"
                 key={prevImgIndex}>
                {img[prevImgIndex]}
            </div>
            <div className="slider-img"
                 key={activeIndex}>
                {img[activeIndex]}
            </div>
            <div className="slider-img slider-img-next"
                 key={nextImgIndex}>
                {img[nextImgIndex]}
            </div>
        </div>
    )
}
export default Slider
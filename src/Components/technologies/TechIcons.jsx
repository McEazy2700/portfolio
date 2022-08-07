import React from 'react'
import './TechIcons.css'
import Python from '../../assets/python.svg'
import DRF from '../../assets/drf.png'
import Django from '../../assets/django.svg'
import FastAPI from '../../assets/fastapi.svg'
import HTML from '../../assets/html.svg'
import CSS from '../../assets/css.svg'
import JS from '../../assets/js.svg'
import ReactJs from '../../assets/react.svg'
import AWS from '../../assets/aws.svg'
import Heroku from '../../assets/heroku.svg'
import Cloudinary from '../../assets/cloudinary.svg'

const TechIcons = () => {
    const images = [Python, DRF, Django, FastAPI, HTML, CSS, JS, ReactJs, AWS, Heroku, Cloudinary]
  return (
    <div className='portfolio__techIcons'>
        <div className="portfolio__techIcons-carousel">
            {images.map( image => <div className="slide">
            <img src={image} alt="" />
            </div> )}
        </div>
    </div>
  )
}

export default TechIcons
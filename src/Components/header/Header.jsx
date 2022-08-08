import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Hero from '../../assets/pictures/coding.jpg'
import { Icons } from '../icons/Icons';
import './Header.css'

const Header = () => {
    const [bgClasses, setBgClasses] = useState('header__bgText fadeOut__short')
    
    const showBgText = ()=>{
        setBgClasses('header__bgText fadeIn__short')
    }

    const removeBgText = ()=>{
        setBgClasses('header__bgText fadeOut__short')
    }
  return (
    <section className='portfolio__header'>
        <motion.header 
        initial={{ opacity: 0, y: '10px'}}
        whileInView={{ opacity: 1, y: '0'}}
        transition={{ duration: 0.4}}
        className="left">
            <div className="portfolio__header-text">
                <h3>Hello</h3>
                <h6>My name is</h6>
                <h1 onMouseLeave={removeBgText} onMouseOver={showBgText}><span>E</span>zekiel <span>Vic</span>tor</h1>
                <h3>FullStack Web Developer</h3>
                <strong className={bgClasses}>VICE</strong>
            </div>
            <div className="portfolio__header-icons">
                <Icons />
            </div>
            <div className="greet__button">
                <a href="#contact">Say Hello</a>
            </div>
        </motion.header>
        <motion.div
        initial={{ opacity: 0, y: '-10px'}}
        whileInView={{ opacity: 1, y: '0'}}
        transition={{ duration: 0.5}}
        margin='200px'
         className="portfolio__header-hero fadeIn__short">
            <img src={Hero} alt="" />
        </motion.div>
    </section>
  )
}

export default Header
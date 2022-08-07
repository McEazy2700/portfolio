import React, { useState } from 'react'
import { IoIosContact, IoMdCodeWorking } from 'react-icons/io'
import { IoApps } from 'react-icons/io5'
import { SiGooglemessages } from 'react-icons/si'
import { TiHome } from 'react-icons/ti'
import './Navbar.css';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(true)
    const [navClasses, setNavClasses] = useState("portfolio__navbar-navigation nav-visible")
    const [buttonPos, setButtonPos] = useState('portfolio__navbar-icon')
    const navClickHandler = ()=> {
        if (isOpen) {
            setIsOpen(false)
            setNavClasses("portfolio__navbar-navigation")
            setButtonPos('portfolio__navbar-icon control__bottom')
        }else {
            setIsOpen(true)
            setNavClasses((currClass) => currClass += " nav-visible")
            setButtonPos('portfolio__navbar-icon')
        }
    }
  return (
    <div className='portfolio__navbar'>
        <div onClick={navClickHandler} className={buttonPos}>
            {isOpen ? <span>V</span> : <span>E</span>}
        </div>
        <div className={navClasses}>
            <a href='/#'>
                <div className="portfolio__navbar-navigation_item">
                    <div className="portfolio__navbar-navigation_item__icon"><TiHome /></div>
                    <span className="portfolio__navbar-navigation_item__message">Top</span>
                </div>
            </a>
            <a href='/#about'>
                <div className="portfolio__navbar-navigation_item">
                    <div className="portfolio__navbar-navigation_item__icon"><IoIosContact /></div>
                    <span className="portfolio__navbar-navigation_item__message">About me</span>
                </div>
            </a>
            <a href='/#tech'>
                <div className="portfolio__navbar-navigation_item">
                    <div className="portfolio__navbar-navigation_item__icon"><IoApps /></div>
                    <span className="portfolio__navbar-navigation_item__message">Technologies</span>
                </div>
            </a>
            <a href='/#projects'>
                <div className="portfolio__navbar-navigation_item">
                    <div className="portfolio__navbar-navigation_item__icon"><IoMdCodeWorking /></div>
                    <span className="portfolio__navbar-navigation_item__message">My Work</span>
                </div>
            </a>
            <a href='/#contact'>
                <div className="portfolio__navbar-navigation_item">
                    <div className="portfolio__navbar-navigation_item__icon"><SiGooglemessages /></div>
                    <span className="portfolio__navbar-navigation_item__message">Contact Me</span>
                </div>
            </a>
        </div>
    </div>
  )
}

export default Navbar
import React from 'react'
import Header from '../Components/header/Header'
import About from '../Components/about/About'
import MyWork from '../Components/myWork/MyWork'
import Contact from '../Components/contact/Contact'
import Navbar from '../Components/navigation/Navbar'
import AnimatedPage from '../Components/animations/AnimatedPage'
import Technologies from '../Components/technologies/Technologies'

const LandingPage = () => {
  return (
    <AnimatedPage className='container'>
        <Navbar />
        <Header />
        <About />
        <Technologies />
        <MyWork />
        <Contact />
    </AnimatedPage>
  )
}

export default LandingPage
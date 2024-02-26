import React from 'react'
import Header from '../components/header/Header'
import Home from '../components/Home/Home'
import About from '../components/about/About'
import Work from '../components/workSample/Work'
import Testimonial from '../components/Testimonial/Testimonial'
import Contact from '../components/contact/Contact'

const Main = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Work />
      <Testimonial />
      <Contact />
    </div>
  )
}

export default Main

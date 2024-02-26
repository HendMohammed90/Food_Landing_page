import React from 'react'
import Header from '../components/header/Header'
import Home from '../components/Home/Home'
import About from '../components/about/About'
import Work from '../components/workSample/Work'
import Testimonial from '../components/Testimonial/Testimonial'

const Main = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Work />
      <Testimonial />
    </div>
  )
}

export default Main

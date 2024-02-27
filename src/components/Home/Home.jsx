import React from 'react'

import BannerImg from "../../Assets/home-banner-background.png";
import homeImg from "../../Assets/home-banner-image.png"
import { HiArrowSmRight } from "react-icons/hi";
const Home = () => {
  return (
    <section className='home-banner-container' id='home'>
    <div className='home-bannerImage-container'>
      <img className='home-image-section' src={BannerImg} alt='homeBanner' />
    </div>
    <div className='home-text-section'>
      <h1 className='primary-heading'>Your Favourite Food
        Delivered Hot &
        Fresh</h1>
      <p className='primary-text'>Healthy switcher chefs do all the prep work, like
        peeding, chopping & marinating, so you can cook
        a fresh food.</p>
        <button className='secondary-button'>
        Order Now <HiArrowSmRight className='svg'/>
        </button>
    </div>
    <div className='home-image-section'>
      <img src={homeImg} alt='homeImg' className="logo"/>
    </div>

  </section>
  )
}

export default Home

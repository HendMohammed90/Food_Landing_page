import React from 'react'
import AboutImg from "../../Assets/about-background-image.png"
import AboutBackgroundImg from "../../Assets/about-background.png"
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
    return (
        <section className='about-buttons-container'>
            <div className='about-background-image-container'>
                <img src={AboutBackgroundImg} alt='homeBanner' />
            </div>
            <div className='about-section-image-container'>
                <img src={AboutImg} />
            </div>
            <div className='about-section-text-container'>
                <p className='primary-subheading'>About</p>
                <h1 className="primary-heading">
                    Food Is An Important Part Of A Balanced Diet
                </h1>
                <p className='primary-text'>Lorem ipsum dolor sit amet consectetur. Non tincidunt
                    magna non et elit. Dolor  turpis molestie dui
                    magnis facilisis at fringilla quam.
                    <br />
                    Non tincidunt magna non et elit. Dolor turpis molestie
                    dui magnis facilisis at fringilla quam.
                </p>
                <div className='about-buttons-container'>
                    <button className="secondary-button">Learn More</button>
                    <button className="watch-video-button">
                        <BsFillPlayCircleFill /> Watch Video
                    </button>
                </div>
            </div>
        </section>
    )
}

export default About

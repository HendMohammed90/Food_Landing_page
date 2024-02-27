import React from 'react'
import profileImg from "../../Assets/john-doe-image.png"
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
    return (
        <section className='work-section-wrapper testimonials-container' id='testimonials'>
            <div className='work-section-top'>
                <p className='primary-subheading'>Testimonial</p>
                <h1 className="primary-heading">What They Are Saying</h1>
                <p className='primary-text'>Lorem ipsum dolor sit amet consectetur. Non tincidunt
                    magna non et elit. Dolor  turpis molestie dui
                    magnis facilisis at fringilla quam.</p>
            </div>
            <div className='testimonial-section-bottom'>
                <img src={profileImg} alt='profile picture' />
                <p>Lorem ipsum dolor sit amet consectetur. Non tincidunt
                    magna non et elit. Dolor  turpis molestie dui
                    magnis facilisis at fringilla quam.</p>
                <div className="testimonials-stars-container">
                    <AiFillStar className='svg' />
                    <AiFillStar className='svg' />
                    <AiFillStar className='svg' />
                    <AiFillStar className='svg' />
                    <AiFillStar className='svg' />
                </div>
                <h2>John Doe</h2>
            </div>
        </section>
    )
}

export default Testimonial

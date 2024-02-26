import React from 'react'

const Contact = () => {
    return (
        <section className='contact-page-wrapper'>
            <h1 className='primary-heading'>Have Question In Mind?
                Let Us Help You</h1>
            <div className='contact-form-container'>
                <input type='email' placeholder='yourmail@gmail.com'/>
                <button type='submit' className='secondary-button'>Submit</button>
            </div>
        </section>
    )
}

export default Contact

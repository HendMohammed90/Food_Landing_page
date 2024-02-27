import React from 'react'

const Contact = () => {
    return (
        <section className='contact-page-wrapper' id='contact'>
            <h1 className='primary-heading'>Have Question In Mind?
                Let Us Help You</h1>
            <div className='contact-form-container'>
            <input type='text' placeholder='Name'/>
                <input type='email' placeholder='Email' onFocus={(e)=> e.target.placeholder = ''}/>
                <textarea type='text' placeholder='Write Your Message'/>
                <button type='submit' className='secondary-button'>Submit</button>
            </div>
        </section>
    )
}

export default Contact

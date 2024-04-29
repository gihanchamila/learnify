import React from 'react'
import Section from './Section'
import Heading from './Heading'

const Contact = () => {
  return (
    <Section id="contact" className={`pt-[12rem] -mt-[5.25rem] pb-[10rem]`} customPadding={true} >
        <div className='container relative'>
            <Heading className="md:max-w-md lg:max-w-2xl" title='Contact Us'/>
            <div>
                <p className='text-center'>
                     Have questions or feedback? We'd love to hear from you! Reach out to our support team at support@learnify.com or fill out the contact form on our website.
                </p>
                
            </div>
            
        </div>
       
    </Section>
  )
}

export default Contact
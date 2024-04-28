import React from 'react'
import Section from './Section'
import Heading from './Heading'

const About = () => {
  return (
    <Section id="about" className={`pt-[12rem] -mt-[5.25rem]`} customPadding={true} >
        <div className='container relative'>
            <Heading className="md:max-w-md lg:max-w-2xl" title='About Us' />
        </div>
    </Section>
  )
}

export default About
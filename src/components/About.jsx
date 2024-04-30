import React from 'react'
import Section from './Section'
import Heading from './Heading'
import { team } from '../assets'

const About = () => {
  return (
    <Section id="about" className={`pt-[12rem] -mt-[5.25rem]`} customPadding={true} >
        <div className='container relative '>
            <Heading className="md:max-w-md lg:max-w-2xl" title='About Us' />
            <div className='lg:flex flex-col lg:text-center '>
              <div className='lg:flex-1'>
                <p className=' body-1 pb-5'>Learnify is dedicated to providing users with a platform to enhance their IQ levels and engage in continuous learning. Our team of experts is passionate about creating a stimulating and rewarding learning experience for individuals of all ages.
                </p>
              </div>
              <div className='flex-1'>
                <img src={team} className='object-cover rounded-3xl h-max bg-s-8' alt="" />
              </div>
            </div>
        </div>
    </Section>
  )
}

export default About
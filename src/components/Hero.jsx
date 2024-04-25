import React, { useRef } from 'react'
import Section from './Section'
import Button from './Button'
import Stars from '../assets/Design/Stars'
import { ArrowLongRightIcon } from '@heroicons/react/16/solid'

const Hero = () => {

  const parallaxRef = useRef(null)

  return (
    <Section id={`hero`} className={`pt-[12rem] -mt-[5.25rem]`} customPadding={true} >
      <Stars />
      <div className='container relative' ref={parallaxRef}>
        <div className=' justify-start relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]'>
          <h1 className="h1 mb-6">Ignite Your Intelligence with Learnify</h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-p-9 lg:mb-8">Our platform offers a dynamic range of courses and resources designed to fuel your curiosity and enhance your cognitive abilities. From mastering new skills to delving into fascinating subjects, Learnify provides the tools you need to expand your horizons and reach your full potential. With interactive lessons, expert guidance, and a supportive community, you'll embark on a transformative learning journey that empowers you to excel in every aspect of life. Join us today and unlock the power of your intellect</p>
          <Button primary={true} white={true}>Learn more <ArrowLongRightIcon className="h-5 w-5 inline-block ml-1" /></Button>
        </div>
        
      </div>       
    </Section>
  )
}

export default Hero
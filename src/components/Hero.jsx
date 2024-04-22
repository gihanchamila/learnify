import React, { useRef } from 'react'
import Section from './Section'

const Hero = () => {

  const parallaxRef = useRef(null)

  return (
    <Section id={`hero`} >
      <div>
            <div className="grid-background"></div>     
      </div>
    </Section>
  )
}

export default Hero
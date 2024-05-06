import React, {useRef} from 'react'
import Section from './Section'
import { features } from '../constants/index';
import Heading from './Heading';
import { motion,useInView } from 'framer-motion';


const focusVariant = {
  scale: 1.1,
  boxShadow: "0 0 0 3px rgba(0, 0, 0, 0.2)", 
}

const Features = () => {

 
  return (
    <Section id={`features`} className={`pt-[12rem] -mt-[5.25rem]`} customPadding={true}>
      <div className="container relative">
          <Heading  className="md:max-w-md lg:max-w-2xl" title='The Power of Our Platform' />
        <div className="flex flex-wrap gap-20 justify-center">
            {features.map((item) => (
            <div className='block border rounded-3xl relative bg-p-10 hover:bg-s-10 transition-transform p-0.5 bg-[length:100%_100%] md:max-w-[24rem]' key={item.id}>
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] ">
                <h5 className="h5 mb-5 text-white">{item.title}</h5>
                <p className="body-2 mb-6 text-white">{item.description}</p>
                <div className="flex items-center mt-auto">
                  <img
                    className='bg-white  rounded-xl p-3'
                    src={item.icon}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <p className="ml-auto text-white font-code text-xs font-bold text-n-1 uppercase tracking-wider cursor-pointer">
                    Explore more
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Features
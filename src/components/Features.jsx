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

  const mainVariant = {
    hidden: {
      x: "-100vw"
    },
    visible: {
      x:0,
      transition: {
        delay:0.5
      }
    }
  }

  const subVariant = {
    hidden: {
      x: -10,
      opacity: 0
    },

    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 1
      }
    }
  }
 
  return (
    <Section id={`features`} className={`pt-[11rem] -mt-[5.25rem]`} customPadding={true}>
      <motion.div  initial={{ opacity: 0, x: "-100vw" }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }} className="container relative">
        <div>
          <Heading  className="md:max-w-md lg:max-w-2xl" title='The Power of Our Platform' />
            <div className="flex flex-wrap gap-20 justify-center">
                {features.map((item) => (
                <motion.div className='block border rounded-3xl relative bg-p-10 hover:bg-s-10 hover:cursor-pointer  transition-all delay-50 p-0.5 bg-[length:100%_100%] md:max-w-[24rem]' key={item.id}>
                  <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem]">
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
                </motion.div>
              ))}
            </div>
        </div>  
      </motion.div>
    </Section>
  )
}

export default Features
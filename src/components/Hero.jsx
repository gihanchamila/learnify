import  { useRef} from 'react'
import Section from './Section'
import Button from './Button'
import Stars from '../assets/Design/Stars'
import { ArrowLongRightIcon,ArrowDownTrayIcon } from '@heroicons/react/16/solid'
import { motion} from 'framer-motion'

const Hero = () => {

  const parallaxRef = useRef(null)

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
      <Section id={`hero`} className={`relative pt-[11rem] -mt-[5.25rem] `} customPadding={true}>
        <Stars />
        <div className="container flex items-center justify-center relative mx-auto">
          <motion.div animate={"visible"} initial={"hidden"} variants={mainVariant} className="relative z-10 text-center"ref={parallaxRef}>
            <motion.div animate={"visible"} initial={"hidden"} variants={subVariant} className='max-w-[60rem] mx-auto'>
              <h1 className="h1 mb-6">Ignite Your Intelligence with Learnify</h1>
              <p className="body-1 max-w-3xl mx-auto mb-6 text-p-9 lg:mb-8">
                Explore a dynamic range of courses and resources on Learnify to fuel your curiosity and enhance cognitive abilities. From mastering new skills to delving into fascinating subjects, our platform empowers you to reach your full potential. With interactive lessons, expert guidance, and a supportive community, join us today and unlock the power of your intellect.
              </p>
              <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-center">
                <Button primary={true} white={true} className={"btn-primary"}>
                  Learn more <ArrowLongRightIcon className="h-5 w-5 inline-block ml-1" />
                </Button>
                <Button primary={false} white={false} className={"btn-secondary"}>
                  Download <ArrowDownTrayIcon className="p-0 m-0 h-4 w-5 inline-block ml-1" />
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Section>
  )
}

export default Hero
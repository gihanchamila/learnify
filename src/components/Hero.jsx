import { useRef, useEffect, useState } from 'react';
import Section from './Section';
import Button from './Button';
import Stars from '../assets/Design/Stars';
import { ArrowLongRightIcon, ArrowDownTrayIcon } from '@heroicons/react/16/solid';
import { motion } from 'framer-motion';

const Hero = () => {
  const parallaxRef = useRef(null);
  const [showButtonAnimation, setShowButtonAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButtonAnimation(true); // Trigger the button animation after 1 second
    }, 1000); // Delay before button animation starts

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  useEffect(() => {
    if (showButtonAnimation) {
      const timeout = setTimeout(() => {
        setShowButtonAnimation(false); // Reset animation state
      }, 1000); // Time to wait before returning

      return () => clearTimeout(timeout); // Cleanup timer
    }
  }, [showButtonAnimation]);

  const mainVariant = {
    hidden: { x: "-100vw" },
    visible: {
      x: 0,
      transition: { delay: 0.5 }
    }
  };

  const subVariant = {
    hidden: { x: -10, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { delay: 1 }
    }
  };

  const title = "Ignite Your Intelligence with Learnify";

  return (
    <Section id={`hero`} className={`relative pt-[11rem] -mt-[5.25rem]`} customPadding={true}>
      <Stars />
      <div className="container flex items-center justify-center relative mx-auto">
        <motion.div animate={"visible"} initial={"hidden"} variants={mainVariant} className="relative z-10 text-center" ref={parallaxRef}>
          <motion.div animate={"visible"} initial={"hidden"} variants={subVariant} className='max-w-[60rem] mx-auto'>
            <h1 className="h1 mb-6">
              {title.split('').map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={letter === 'L' ? 'text-highlight' : ''} // Highlight the first letter of "Learnify"
                >
                  {letter}
                </motion.span>
              ))}
            </h1>
            <p className="body-1 max-w-3xl mx-auto mb-6 text-p-9 lg:mb-8">
              Explore a dynamic range of courses and resources on Learnify to fuel your curiosity and enhance cognitive abilities. From mastering new skills to delving into fascinating subjects, our platform empowers you to reach your full potential. With interactive lessons, expert guidance, and a supportive community, join us today and unlock the power of your intellect.
            </p>
            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-center">
              <Button primary={true} white={true} className={"btn-primary"}>
                Learn more <ArrowLongRightIcon className="h-5 w-5 inline-block ml-1" />
              </Button>
              <motion.div
                initial={{ y: 0 }}
                animate={showButtonAnimation ? [{ y: -10 }, { y: 0 }] : {}} // Move up then back down
                transition={{ type: "spring", stiffness: 300, damping: 10, duration: 0.5 }} // Adjust spring properties for smooth movement
                className={`flex flex-col lg:flex-row items-center justify-center lg:justify-center transition-transform duration-300`}
              >
                <Button primary={false} white={false} className={"btn-secondary"}>
                  Download <ArrowDownTrayIcon className="p-0 m-0 h-4 w-5 inline-block ml-1" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Hero;

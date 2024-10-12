import { useRef, useEffect, useState } from 'react';
import Button from './Button';
import Stars from '../assets/Design/Stars';
import { heroImage1, heroImage2 } from '../assets/index.js';
import { ArrowLongRightIcon, ArrowDownTrayIcon } from '@heroicons/react/16/solid';
import { motion } from 'framer-motion';

const Hero = () => {
  const parallaxRef = useRef(null);
  const [showButtonAnimation, setShowButtonAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButtonAnimation(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showButtonAnimation) {
      const timeout = setTimeout(() => {
        setShowButtonAnimation(false);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [showButtonAnimation]);

  const imageVariant1 = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20, delay: 0.5 }
    }
  };

  const imageVariant2 = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20, delay: 1.0 }
    }
  };

  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 1.2, duration: 0.8, ease: 'easeOut' }
    }
  };

  const buttonVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 1.4, duration: 0.6, ease: 'easeOut' }
    }
  };

  const title = "Ignite Your Intelligence with Learnify";

  return (
    <div id="hero" className="relative pt-[10.7rem] -mt-[5.25rem] bg-gradient-radial bg-gradient-to-r from-white via-blue-50 to-white pb-[11rem] z-10">
      <Stars />
      {/* Background Images */}
      <div>
      <motion.img
        src={heroImage1}
        alt="First Hero Image"
        className="absolute -bottom-[5rem] -left-[22.5rem] w-[62%] h-auto opacity-70 drop-shadow-lg" 
        initial="hidden"
        animate="visible"
        variants={imageVariant1}
      />
      <motion.img
        src={heroImage2}
        alt="Second Hero Image"
        className="absolute -bottom-[0rem] -right-28 w-[40%] h-auto opacity-70 drop-shadow-lg" 
        initial="hidden"
        animate="visible"
        variants={imageVariant2}
      />
      </div>

      <div className="container flex items-center justify-center relative mx-auto">
        <motion.div className="relative z-10 text-center" ref={parallaxRef}>
          <motion.div className="max-w-[60rem] mx-auto">
            <h1 className="h1 mb-6">
              {title.split('').map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={letter === 'L' ? 'text-highlight' : ''}
                >
                  {letter}
                </motion.span>
              ))}
            </h1>
            <motion.p
              className="body-1 max-w-3xl mx-auto mb-6 text-p-9 lg:mb-8"
              initial="hidden"
              animate="visible"
              variants={textVariant}
            >
              Explore a dynamic range of courses and resources on Learnify to fuel your curiosity and enhance cognitive abilities. From mastering new skills to delving into fascinating subjects, our platform empowers you to reach your full potential. With interactive lessons, expert guidance, and a supportive community, join us today and unlock the power of your intellect.
            </motion.p>
            <motion.div
              className="flex flex-col lg:flex-row items-center justify-center lg:justify-center"
              initial="hidden"
              animate="visible"
              variants={buttonVariant}
            >
              <Button primary={true} white={true} className="btn-primary">
                Learn more <ArrowLongRightIcon className="h-5 w-5 inline-block ml-1" />
              </Button>
              <motion.div
                initial={{ y: 0 }}
                animate={showButtonAnimation ? [{ y: -10 }, { y: 0 }] : {}}
                transition={{ type: 'spring', stiffness: 300, damping: 10, duration: 0.5 }}
                className="flex flex-col lg:flex-row items-center justify-center lg:justify-center transition-transform duration-300"
              >
                <Button primary={false} white={false} className="btn-secondary hover:text-white hover:bg-p-10">
                  Download <ArrowDownTrayIcon className="p-0 m-0 h-4 w-5 inline-block ml-1" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

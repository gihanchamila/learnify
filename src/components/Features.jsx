import React from 'react';
import Section from './Section';
import { features } from '../constants/index';
import Heading from './Heading';
import { motion } from 'framer-motion';

const Features = () => {
  // Variants for the container to handle staggering
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Controls the delay between each child animation
        delayChildren: 0.5, // Delay before the first child animation starts
      },
    },
  };

  // Variants for each feature item
  const featureVariant = {
    hidden: {
      opacity: 0,
      y: 20, // Slightly translate down for a smoother entrance
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <Section id="features" className="pt-[11rem] -mt-[5.25rem] mb-2" customPadding={true}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariant}
        className="container relative"
      >
        <div>
          <Heading className="md:max-w-md lg:max-w-2xl" title="The Power of Our Platform" />
          <div className="flex flex-wrap gap-20 justify-center">
            {features.map((item) => (
              <motion.div
                key={item.id}
                variants={featureVariant}
                className="block border rounded-3xl relative bg-p-10 hover:bg-s-10 transition-transform p-0.5 bg-[length:100%_100%] md:max-w-[24rem]"
              >
                <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem]">
                  <h5 className="h5 mb-5 text-white">{item.title}</h5>
                  <p className="body-2 mb-6 text-white">{item.description}</p>
                  <div className="flex items-center mt-auto">
                    <img
                      className="bg-white rounded-xl p-3"
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
  );
};

export default Features;

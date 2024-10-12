import React from 'react'
import { useInView,motion,useAnimation, transform, animate } from "framer-motion";
import { useRef, useEffect } from 'react';

const Section = ({children, id, className, customPadding, ...props}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, {once:false})

  {/*const mainVariant = {
    initial: {
      opacity: 0,
      x: '-200vh'
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        opacity: { duration: 0.5, ease: 'easeInOut', delay: 0.5 },
        x: { duration: 0.5, ease: 'easeInOut', delay: 0.5 }
      }
      
    }
  };*/}

  useEffect(() => {
    console.log("InView:", isInView);
  }, [isInView]);

  return (
    <motion.div id={id} ref={ref}  initial={{ opacity: 0, x: "-100vw" }}
    animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -10 }}
    transition={{ duration: 0.5, ease: 'easeInOut', delay: isInView ? 0.5 : 0 }} className={`relative ${customPadding || `py-10 lg:py-16 xl:py-20 pb-[12rem]`} ${className || ""}`}{...props}>
        {children}
    </motion.div>
  )
}

export default Section
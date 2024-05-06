import React from 'react'
import { useInView,motion,useAnimation } from "framer-motion";
import { useRef, useEffect } from 'react';

const Section = ({children, id, className, customPadding, ...props}) => {

  return (
    <div id={id} className={`relative transition-all duration-400 ease-out  ${customPadding || `py-10 lg:py-16 xl:py-20 pb-[12rem]`} ${className || ""}`}{...props}>
        {children}
    </div>
  )
}

export default Section
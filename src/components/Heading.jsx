import React from 'react'
import { motion } from 'framer-motion'

const Heading = ({ className, title, text, tag }) => {

  return (
    <div className={`${className} max-w-[50rem] mt-[1rem] mx-auto mb-12 lg:mb-12 md:text-center`}>
      {title && <h1 className="h1">{title}</h1>}
      {text && <p className="body-2 mt-4 text-p-10">{text}</p>}
    </div>
  )
}

export default Heading
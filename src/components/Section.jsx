import React from 'react'

const Section = ({children, id, className, customPadding, ...props}) => {
  return (
    <div id={id} className={`relative ${customPadding || ` py-10 lg:py-16 xl:py-20 pb-[12rem]`} ${className || ""}`} {...props}>
        {children}
    </div>
  )
}

export default Section
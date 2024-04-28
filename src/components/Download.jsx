import React from 'react'
import Section from './Section'
import Button from './Button'
import Heading from './Heading'
import { download } from '../assets/index'
import { GooglePlayButton, AppGalleryButton, AppStoreButton, ButtonsContainer } from 'react-mobile-app-button'

const Download = () => {
  return (
    <Section id="Download" className={`pt-[12rem] -mt-[5.25rem]`} customPadding={true}>
      <div className="container relative">
        <Heading className="md:max-w-md  lg:max-w-2xl" title='Start Learning with Learnify' />
        <div className='grid lg:grid-cols-12 sm:grid-cols-1 pb-[12rem] items-center justify-between'>
            <div className="lg:col-start-1 lg:col-span-7 sm:col-span-12">
              <p className='body-1'>Ready to start your journey of self-improvement? Download Learnify now on Google Play or the App Store and begin challenging your mind today!
              </p>
              <div className='my-5 lg:w-full flex gap-4'>

                  <GooglePlayButton theme={'dark'} className={"custom-style"} height={60}/>
                  <AppGalleryButton theme={'dark'} className={"custom-style"} height={60} />
                  <AppStoreButton theme={'dark'} className={"custom-style"} height={60} />
              </div>
            </div>
            <div className="lg:col-start-8 lg:col-span-5 sm:col-start-1 sm:col-span-12">
              <img src={download}  width={600} height={600} className='rounded-3xl'/>
            </div>
        </div>
      </div>
    </Section>
  )
}

export default Download
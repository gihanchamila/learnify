import React from 'react'
import Section from './Section'
import Heading from './Heading'
import { contactSvg } from '../assets/index'
import Button from './Button'

const Contact = () => {
  return (
    <Section id="contact" className={`pt-[12rem] -mt-[5.25rem] pb-[10rem]`} customPadding={true} >
        <div className='container relative'>
            <Heading className="md:max-w-md lg:max-w-2xl" title='Contact Us'/>
            <div>
                <p className='lg:text-center body-1 pb-6'>
                     Have questions or feedback? We'd love to hear from you! Reach out to our support team at support@learnify.com or fill out the contact form on our website.
                </p>
            </div>
            <div className='lg:flex lg:flex-row flex-wrap sm:flex-col'>
              <div className='flex-1 mb-5'>
                <img src={contactSvg} className='w-full h-full object-fill p-5 bg-s-10 rounded-3xl' alt="" />
              </div>
              <div className="lg:flex lg:flex-1 items-center justify-start lg:pl-12 ">
                <div className="mx-auto w-full sm:mb-4">
                  <p className='text-3xl lg:pb-5 font-bold text-p-10 pb-5'>Fill the form</p>
                  <form action="" method="POST">
                    <div className="mb-5">
                      <label
                        for="name"
                        className="mb-3 block text-base font-medium text-p-10"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Full Name"
                        className="w-full rounded-md border border-p-3 bg-white py-3 px-6 text-base font-medium text-p-4 outline-none focus:border-s-10 "
                      />
                    </div>
                    <div class="mb-5">
                      <label
                        for="email"
                        className="mb-3 block text-base font-medium text-p-10"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="example@domain.com"
                        className="w-full rounded-md border border-p-3 bg-white py-3 px-6 text-base font-medium text-p-4 outline-none focus:border-s-10 "
                      />
                    </div>
                    <div class="mb-5">
                      <label
                        for="subject"
                        className="mb-3 block text-base font-medium"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        placeholder="Enter your subject"
                        className="w-full rounded-md border border-p-3 bg-white py-3 px-6 text-base font-mediumtext-p-10 outline-none focus:border-s-10 "
                      />
                    </div>
                    <div class="mb-5">
                      <label
                        for="message"
                        className="mb-3 block text-base font-medium text-p-10"
                      >
                        Message
                      </label>
                      <textarea
                        rows="4"
                        name="message"
                        id="message"
                        placeholder="Type your message"
                        className="w-full resize-none rounded-md border border-p-3 bg-white py-3 px-6 text-base font-medium text-p-4 outline-none focus:border-s-10"
                      ></textarea>
                    </div>
                    <div>
                        <Button primary={true} white={true} className={`m-0`}>Submit</Button>
                    </div>
                  </form>
                </div>
            </div>
            </div>
        </div>
    </Section>
  )
}

export default Contact
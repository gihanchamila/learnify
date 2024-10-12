import React, { useState, useEffect, useRef } from 'react';
import Section from './Section';
import Heading from './Heading';
import { contactSvg } from '../assets/index';
import Button from './Button';
import { motion } from 'framer-motion';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const timeoutRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Load saved form data from localStorage when the component mounts
  useEffect(() => {
    const savedFormData = localStorage.getItem('contactFormData');
    if (savedFormData) {
      setFormData(JSON.parse(savedFormData));
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    localStorage.setItem('contactFormData', JSON.stringify(formData));

    console.log(`Form submitted`, formData);

    timeoutRef.current = setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      localStorage.removeItem('contactFormData'); 
    }, 5000);
  };

  useEffect(() => {
    if (isSubmitted) {
      const timeoutId = setTimeout(() => setIsSubmitted(false), 2000);
      return () => clearTimeout(timeoutId);
    }
  }, [isSubmitted]);

  return (
    <Section id={`contactUs`} className={`pt-[11rem] -mt-[5.25rem]`} customPadding={true}>
      <div className="container relative">
        <Heading className="md:max-w-md lg:max-w-2xl" title="Contact Us" />
        <div>
          <p className="lg:text-center body-1 pb-6">
            Have questions or feedback? We'd love to hear from you! Reach out to our support team at support@learnify.com or fill out the contact form on our website.
          </p>
        </div>
        <div className="lg:flex lg:flex-row flex-wrap sm:flex-col">
          <div className="flex-1 mb-5">
            <img src={contactSvg} className="w-full h-full object-fill p-5 bg-s-10 rounded-3xl" alt="" />
          </div>
          <div className="lg:flex lg:flex-1 items-center justify-start lg:pl-12">
            <div className="mx-auto w-full sm:mb-4">
              <p className="text-3xl lg:pb-5 font-bold text-p-10 pb-5">Fill the form</p>
              <form action="" method="POST" onSubmit={handleSubmit}>
                <div className="mb-5">
                  <label htmlFor="name" className="mb-3 block text-base font-medium body-1 text-p-10">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-bar"
                  />
                </div>
                <div className="mb-5">
                  <label htmlFor="email" className="mb-3 block text-base font-medium text-p-10">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@domain.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-bar"
                  />
                </div>
                <div className="mb-5">
                  <label htmlFor="subject" className="mb-3 block text-base font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Enter your subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="input-bar"
                  />
                </div>
                <div className="mb-5">
                  <label htmlFor="message" className="mb-3 block text-base font-medium text-p-10">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    name="message"
                    id="message"
                    placeholder="Type your message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="input-bar"
                  ></textarea>
                </div>
                <div>
                  <Button primary={true} white={true} className={`m-0`} type="submit" disabled={isSubmitted}>
                    {isSubmitted ? 'Submitted' : 'Submit'}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;

import React from 'react'
import { motion } from 'framer-motion'
import SignUpForm from '../components/SignUpForm'

const Register = () => {
  return (
    <div className="relative">
          <div className="grid-background"></div>
          <motion.div  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="overflow-hidden relative z-10">
            <SignUpForm />
          </motion.div>  
        </div> 
  )
}

export default Register
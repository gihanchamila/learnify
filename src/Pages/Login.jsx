import React from 'react'
import LoginForm from '../components/SignIn'
import Header from '../components/Header'
import { motion } from 'framer-motion'

function Login() {

    return (
        <>
        <div className="relative">
          <div className="grid-background"></div>
          <motion.div  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}className="overflow-hidden relative z-10">
          <LoginForm/>
          </motion.div>  
        </div>   
        </>
      )

}

export default Login

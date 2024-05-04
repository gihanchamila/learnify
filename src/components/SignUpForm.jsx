import React, {useState,useRef,useEffect} from 'react'
import Button from './Button'
import BackButton from './BackButton'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const SignUpForm = () => {

    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('fullName', fullName)
        console.log('email', email)
        console.log('password', password)
        console.log('confirmPassword', confirmPassword)

        setFullName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    }


  return (
    <div>
      <div className="flex min-h-screen items-center justify-center py-12 sm:px-6 lg:px-8 ">
        <div className="max-w-[35rem] w-full  space-y-8 border-2 border-p-10 p-10 rounded-3xl bg-white">
        <BackButton />
          <div className="body-1">
            <h1 className="text-4xl font-bold">Create an account</h1>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4 \">
            <div className="flex flex-col space-y-1">
              <label htmlFor="fullName" className="text-sm font-medium body-1">
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                autoComplete="name"
                required
                className="appearance-none input-bar"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="email" className="text-sm font-medium body-1">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none input-bar"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="password" className="text-sm font-medium body-1">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none input-bar"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="confirmPassword" className="text-sm font-medium body-1">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                className="appearance-none input-bar"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <Button type="submit" className=".btn mx-0" primary={true} white={true}>
                Sign Up
              </Button>
              <p>Already have an account? <Link to="/learnify/login" className='hover:underline-offset-2'>Sign In</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUpForm
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import BackButton from './BackButton';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SignUpForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Store user data in local storage
    const userData = {
      fullName,
      email,
      password,
    };
    localStorage.setItem('registeredUser', JSON.stringify(userData));

    alert('Registration successful! You can now log in.');
    navigate("/learnify/login")

    setFullName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  const mainVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const subVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div animate="visible" initial="hidden" variants={mainVariant}>
      <div className="flex min-h-screen items-center justify-center bg-gray-100 px-6 py-12">
        <motion.div
          animate="visible"
          initial="hidden"
          variants={subVariant}
          className="w-full max-w-md space-y-8 p-8 bg-white shadow-lg rounded-3xl"
        >
          <BackButton />
          <div>
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">Create an Account</h1>
            <p className="text-gray-500 mb-6">Join us today! Please fill in the details below.</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Form fields for Full Name, Email, Password, and Confirm Password */}
            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <div className="flex-1">
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div className="flex-1">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <div className="flex-1">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex-1">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <Button type="submit" className="px-6 py-2 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 transition duration-200" primary>
                Sign Up
              </Button>
              <p className="text-sm text-gray-600">
                Already have an account?{' '}
                <Link to="/learnify/login" className="text-indigo-600 hover:underline">
                  Sign In
                </Link>
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SignUpForm;

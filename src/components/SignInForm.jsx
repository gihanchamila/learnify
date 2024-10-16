import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from './Button';
import { motion } from 'framer-motion';
import BackButton from './BackButton';
import Toast from './Toast'; 

const SignInForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem('registeredUser'));

    // Check if the stored user data exists and matches the input
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      setToastMessage('Login successful!');
      setShowToast(true);
      onLogin(); 
      navigate('/learnify/home'); 
    } else {
      setToastMessage('Invalid email or password.');
      setShowToast(true);
    }

    // Reset form fields
    setEmail('');
    setPassword('');
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
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <motion.div
        animate="visible"
        initial="hidden"
        variants={mainVariant}
        className="w-full max-w-md space-y-8 p-8 bg-white shadow-lg rounded-3xl"
      >
        <BackButton />
        <motion.div animate="visible" initial="hidden" variants={subVariant}>
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">Sign In</h1>
          <p className="text-gray-500 mb-6">Welcome back! Please enter your credentials.</p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
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
            <div>
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
            <div className="flex items-center justify-between">
              <Button type="submit" className="bg-color-secondary text-white flex px-6 py-3" primary>
                Sign In
              </Button>
              <Link to="#" className="text-sm text-indigo-600 hover:underline">
                Forgot password?
              </Link>
            </div>
          </form>

          {/* Link to Register if not registered */}
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <Link to="/learnify/register" className="text-indigo-600 hover:underline">
                Register here
              </Link>
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Toast Notification */}
      {showToast && (
        <Toast
          message={toastMessage}
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
};

export default SignInForm;

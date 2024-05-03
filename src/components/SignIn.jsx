import React, { useState } from 'react';
import Button from './Button';
import { motion } from 'framer-motion';
import BackButton from './BackButton';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    setEmail('');
    setPassword('');
  };
  return (
    <div>
      <div className="flex min-h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-md w-full space-y-8 border-2 border-p-10 p-10 rounded-3xl bg-white">
          <BackButton />
          <div className="body-1">
            <h1 className="text-4xl font-bold">Sign in to Learnify</h1>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
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
                autoComplete="current-password"
                required
                className="appearance-none input-bar"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <Button type="submit" className=".btn mx-0" primary={true} white={true}>
                Sign In
              </Button>
              <p className='body-1 text-sm font-medium hover:underline-offset-2'>Forgot password?</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

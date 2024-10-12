// Toast.js
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Toast = ({ message, onClose }) => {
  // Auto dismiss the toast after 3 seconds
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const toastVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.3,
        ease: 'easeIn',
      },
    },
  };

  return (
    <motion.div
      className="fixed bottom-5 right-5 p-4 bg-blue-600 text-white rounded-lg shadow-lg"
      variants={toastVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <span className="flex-1">{message}</span>
      <button
        onClick={onClose}
        className="ml-4 text-white font-bold hover:text-gray-200 transition-colors duration-200"
        aria-label="Close"
      >
        &times; {/* Close icon */}
      </button>
    </motion.div>
  );
};

export default Toast;

import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const TextReveal = ({ text }) => {
  const controls = useAnimation();

    useEffect(() => {
        controls.start('visible');
    }, []);


  const variants = {
    hidden: { opacity: 0, x: '-100%' },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
  };

    
  return (
    <div style={{ overflow: 'hidden', position: 'relative', display: 'inline-block' }}>
      <motion.div initial="hidden" animate={controls} variants={variants}>
        {text}
      </motion.div>
    </div>
  );
};

export default TextReveal;
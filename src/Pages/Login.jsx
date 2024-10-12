import React from 'react';
import SignInForm from '../components/SignInForm';
import { motion } from 'framer-motion';

function Login({ onLogin }) {
    return (
        <div className="relative">
            <div className="grid-background"></div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="overflow-hidden relative z-10">
                <SignInForm onLogin={onLogin} /> {/* Pass the onLogin prop here */}
            </motion.div>  
        </div>   
    );
}

export default Login;
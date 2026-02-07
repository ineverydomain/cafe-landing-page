import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className, ...props }) => {
  const baseStyles = "px-8 py-3 rounded-sm font-sans text-sm tracking-widest uppercase transition-colors duration-300 relative overflow-hidden";
  
  const variants = {
    primary: "bg-cafe-gold text-cafe-base hover:bg-white",
    outline: "border border-cafe-gold text-cafe-gold hover:bg-cafe-gold hover:text-cafe-base"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`${baseStyles} ${variants[variant]} ${className || ''}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};
// Libraries
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';

type Props = {};

const Header = ({}: Props) => {
  return (
    <header className='sticky top-0 z-20 flex items-start justify-between p-4 mx-auto max-w-7xl'>
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
      >
        {/* Social Icons */}
        <SocialIcon
          url='https://github.com/Maxime-Serrurier'
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon
          url='https://www.facebook.com/maxime.serrurier.9'
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon
          url='https://www.linkedin.com/in/maxime-serrurier/'
          fgColor='gray'
          bgColor='transparent'
        />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
      >
        <SocialIcon
          url='#contact'
          className='cursor-pointer'
          network='email'
          fgColor='gray'
          bgColor='transparent'
        />
      </motion.div>
    </header>
  );
};

export default Header;

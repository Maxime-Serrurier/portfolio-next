import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  directionLeft?: boolean;
};

function Skill({ directionLeft }: Props) {
  return (
    <div className='relative flex cursor-pointer group'>
      <motion.img
        initial={{ x: directionLeft ? -100 : 100, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src='ts.png'
        className='object-cover w-20 h-20 transition duration-300 ease-in-out border border-gray-500 rounded-full xl:w-32 xl:h-32 filter group-hover:grayscale'
      />
      <div>
        <div>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Skill;

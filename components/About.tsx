// Library
import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='relative flex flex-col items-center h-screen px-10 mx-auto text-center md:text-left md:flex-row max-w-7xl justify-evenly'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        About
      </h3>
      <motion.img
        className='flex-shrink-0 object-cover object-top w-56 h-56 -mb-20 rounded-full md:object-top md:w-64 md:h-96 md:mb-0 md:rounded-lg xl:w-[500px] xl:h-[600px]'
        initial={{ x: -200, opacity: 0 }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src='./profil.jpg'
      />
      <div className='px-0 space-y-10 md:px-10'>
        <h4 className='text-4xl font-semibold'>
          Une{' '}
          <span className='underline decoration-[#F7AB0A]/50'>
            petite
          </span>{' '}
          présentation
        </h4>
        <p className='text-base'>
          Je suis développeur web et je viens de Normandie. Après plus
          de 10 ans en grande distribution, je me suis lancé dans une
          reconversion professionnelle afin de devenir développeur
          web. Je suis passionné par le design et la création
          d'applications web et mobile, et l'envie d'apprendre encore
          plus chaque jour.
        </p>
      </div>
    </motion.div>
  );
}

export default About;

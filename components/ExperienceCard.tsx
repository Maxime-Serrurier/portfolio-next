// Libraries
import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col items-center flex-shrink-0 rounded-lg space-y-4 lg:space-y-7 w-[500px] md:w-[600px] xl:w-[900px] bg-[#292929] p-10 snap-center hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='w-28 h-28 rounded-full xl:w-[100px] xl:h-[100px] object-cover'
        src='oclick.png'
        alt='image oclick'
      />

      <div className='px-4 md:px-10'>
        <h4 className='text-3xl font-light xl:text-4xl'>
          Projet Professionnel
        </h4>
        <p className='mt-1 text-xl font-bold capitalize xl:text-2xl'>
          école O'Clock
        </p>
        <div className='flex my-2 space-x-2'>
          <img
            className='w-6 h-6'
            src='laravel.png'
            alt='logo laravel'
          />
          <img
            className='w-6 h-6'
            src='reactjs.png'
            alt='logo reactjs'
          />
          <img
            className='w-6 h-6'
            src='ts.png'
            alt='logo typescript'
          />
          <img
            className='w-6 h-6'
            src='redux.png'
            alt='logo redux'
          />
          <img
            className='w-6 h-6'
            src='tailwind.png'
            alt='logo tailwindcss'
          />
        </div>
        <p className='py-2 text-gray-500 uppercase xl:py-5'>
          De décembre 2022 à janvier 2023
        </p>
        <ul className='ml-5 space-y-1 text-lg list-disc xl:space-y-4'>
          <li>
            Résumé RésuméRésumé RésuméRésumé RésuméRésumé RésuméRésumé
          </li>
          <li>
            Résumé RésuméRésumé RésuméRésumé RésuméRésumé RésuméRésumé
          </li>
          <li>
            Résumé RésuméRésumé RésuméRésumé RésuméRésumé RésuméRésumé
          </li>
          <li>Résumé RésuméRésumé RésuméRésumé RésuméRésumé</li>
          <li>Résumé RésuméRésumé RésuméRésumé RésuméRésumé</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;

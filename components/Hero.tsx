// Libraries
import Link from 'next/link';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

// Component
import BackgroundCircles from './BackgroundCircles';

type Props = {};

const Hero = ({}: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Bonjour, Je m'appelle Maxime",
      'Je suis développeur web',
      'Designer',
      'Gamer',
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className='flex flex-col items-center justify-center h-screen space-y-8 overflow-hidden text-center'>
      <BackgroundCircles />
      <img
        className='relative object-cover w-32 h-32 mx-auto rounded-full'
        src='./profil_.jpg'
        alt='photo de profil'
      />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
          Développeur Web
        </h2>
        <h1 className='px-10 text-5xl font-semibold lg:text-6xl'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#F7AB0A' />
        </h1>
        <div className='pt-5'>
          <Link href='#about'>
            <button className='heroButton'>À propos</button>
          </Link>
          <Link href='#skills'>
            <button className='heroButton'>Skills</button>
          </Link>
          <Link href='#projects'>
            <button className='heroButton'>Projets</button>
          </Link>
          <Link href='#contact'>
            <button className='heroButton'>Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

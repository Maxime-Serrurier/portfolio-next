// Libraries
import type { NextPage } from 'next';
import Head from 'next/head';

// Components
import Header from 'components/Header';
import Hero from 'components/Hero';
import About from 'components/About';
import WorkExperience from 'components/WorkExperience';
import Skills from 'components/Skills';
import Projects from 'components/Projects';
import Contact from 'components/Contact';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]'>
      <Head>
        <title>Portfolio de Maxime</title>
        <meta
          name='description'
          content='Generated by create next app'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>
      <Header />
      <section
        id='home'
        className='snap-start'
      >
        <Hero />
      </section>
      <section
        id='about'
        className='snap-center'
      >
        <About />
      </section>
      <section
        id='experience'
        className='snap-center'
      >
        <WorkExperience />
      </section>
      <section
        id='skills'
        className='snap-start'
      >
        <Skills />
      </section>
      <section
        id='projects'
        className='snap-start'
      >
        <Projects />
      </section>
      <section
        id='contact'
        className='snap-start'
      >
        <Contact />
      </section>
      <Link href='#home'>
        <footer className='sticky w-full cursor-pointer bottom-5'>
          <div className='flex items-center justify-center'>
            <img
              className='w-14 filter grayscale hover:grayscale-0'
              src='ms.png'
              alt='logo ms'
            />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;

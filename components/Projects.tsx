import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='relative z-0 flex flex-col items-center h-screen max-w-full mx-auto overflow-hidden text-left md:flex-row justify-evenly'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Projets
      </h3>
      <div className='relative z-20 flex w-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]'>
        {projects.map((project, i) => (
          <div
            key={i}
            className='flex flex-col items-center justify-center flex-shrink-0 w-screen h-screen p-8 space-y-5 snap-center lg:p-44'
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='w-[300px] max-w-[900px] sm:w-[500px]'
              src='oclick.png'
              alt='image oclick'
            />
            <div className='max-w-6xl px-0 space-y-10 md:px-10'>
              <h4 className='text-4xl font-semibold text-center'>
                <span className='underline decoration-[#F7AB0A]/50'>
                  Projet {i + 1} sur {projects.length} :
                </span>{' '}
                Cicker game
              </h4>
              <p className='text-lg text-center md:text-left'>
                Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Sint minus vel excepturi ex ut explicabo
                inventore, libero facere alias itaque quidem debitis
                saepe nulla suscipit quo beatae cupiditate nam
                laboriosam. Qui, eos. Inventore voluptatum veniam
                dolores cupiditate dolor repudiandae consequatur neque
                possimus quod dolorem illo laboriosam ullam, nulla
                rerum eligendi ut aliquid architecto aliquam ducimus
                repellat porro voluptate! Esse, id.
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12' />
    </motion.div>
  );
}

export default Projects;

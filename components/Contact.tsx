// Libraries
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  PhoneIcon,
  MapPinIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/solid';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
type Props = {};

function Contact({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) =>
    (window.location.href = `mailto:maxime.serrurier@yahoo.fr?subject=${formData.subject}&body=Bonjour mon nom est ${formData.name}. ${formData.message} (${formData.email})`);
  return (
    <div className='relative flex flex-col items-center h-screen px-10 mx-auto text-center md:text-left md:flex-row max-w-7xl justify-evenly'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Contact
      </h3>
      <div className='flex flex-col space-y-10'>
        <h4 className='text-4xl font-semibold text-center'>
          Laissez-moi vous aider.{' '}
          <span className='decoration-[#F7AB0A]/50 underline'>
            Contactez-moi.
          </span>
        </h4>
        <div className='space-y-10'>
          <div className='flex items-center justify-center space-x-5'>
            <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
            <p className='text-2xl'>0680384390</p>
          </div>
          <div className='flex items-center justify-center space-x-5'>
            <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
            <a
              href='mailto:maxime.serrurier@yahoo.fr'
              className='text-2xl hover:underline'
            >
              maxime.serrurier@yahoo.fr
            </a>
          </div>
          <div className='flex items-center justify-center space-x-5'>
            <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
            <p className='text-2xl'>14112 Biéville-Beuville</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col mx-auto space-y-2 w-fit'
        >
          <div className='flex space-x-2'>
            <input
              {...register('name')}
              placeholder='Nom'
              className='contactInput'
              type='text'
            />
            <input
              {...register('email')}
              placeholder='Email'
              className='contactInput'
              type='email'
            />
          </div>
          <input
            {...register('subject')}
            placeholder='Sujet'
            className='contactInput'
            type='text'
          />
          <textarea
            {...register('message')}
            placeholder='Message'
            className='contactInput'
          />
          <button
            type='submit'
            className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

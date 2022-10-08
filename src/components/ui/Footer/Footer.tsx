import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className='bg-primary-content'>
      <Link
        to='/'
        className='block text-right text-primary-text font-bold pr-one py-3'
      >
        ToDo App
      </Link>
    </footer>
  );
};

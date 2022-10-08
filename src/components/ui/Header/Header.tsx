import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className='border-b border-solid border-primary-border bg-primary-content'>
      <Link
        to='/'
        className='block text-primary text-2xl font-bold px-one py-3'
      >
        ToDo App
      </Link>
    </header>
  );
};

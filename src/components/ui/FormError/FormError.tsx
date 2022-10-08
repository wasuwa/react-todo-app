import React from 'react';

export const FormError = (props: { message: string }) => {
  const { message } = props;
  return <p className='text-primary-error'>{message}</p>;
};

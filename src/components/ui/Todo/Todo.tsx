import React from 'react';

export const Todo = (props: { title: string }) => {
  const { title } = props;

  return (
    <div className='flex justify-between mb-one p-one bg-primary-content'>
      <h3 className='text-primary-text font-bold'>{title}</h3>
      <button type="button" className='text-primary font-bold'>完了</button>
    </div>
  );
};

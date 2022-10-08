import React from 'react';

export const Todo = (props: {
  id: number;
  title: string;
  todoDeleteHandler: (id: number) => void;
}) => {
  const { id, title, todoDeleteHandler } = props;

  return (
    <div className='flex justify-between mb-one p-one bg-primary-content'>
      <h3 className='text-primary-text font-bold'>{title}</h3>
      <button
        type='button'
        onClick={() => {
          todoDeleteHandler(id);
        }}
        className='shrink-0 pl-3 text-primary font-bold'
      >
        完了
      </button>
    </div>
  );
};

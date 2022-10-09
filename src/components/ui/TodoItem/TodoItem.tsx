import React from 'react';

export const TodoItem = (props: {
  id: number;
  title: string;
  todoDoneHandler: (id: number) => void;
}) => {
  const { id, title, todoDoneHandler } = props;

  return (
    <li className='flex justify-between mb-one p-one bg-primary-content'>
      <h3 className='text-primary-text font-bold'>{title}</h3>
      <button
        type='button'
        onClick={() => {
          todoDoneHandler(id);
        }}
        className='shrink-0 pl-3 text-primary font-bold'
      >
        完了
      </button>
    </li>
  );
};

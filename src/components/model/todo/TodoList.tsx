import React from 'react';
import { TodoItem } from './TodoItem';
import { useTodo } from '../../../hooks/useTodo';

export const TodoList = () => {
  const { todoList } = useTodo();

  return (
    <ul className='max-w-4xl mx-auto'>
      {todoList &&
        todoList.length !== 0 &&
        todoList.map(todo => {
          return <TodoItem key={todo.id} id={todo.id} title={todo.title} />;
        })}
    </ul>
  );
};

import React from 'react';
import { Todo } from '../../ui/Todo/Todo';

export const TodoItem = (props: {
  id: number;
  title: string;
  todoDeleteHandler: (id: number) => void;
}) => {
  const { id, title, todoDeleteHandler } = props;

  return (
    <li>
      <Todo id={id} title={title} todoDeleteHandler={todoDeleteHandler} />
    </li>
  );
};

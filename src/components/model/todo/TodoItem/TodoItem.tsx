import React from 'react';
import { Todo } from '../../../ui/Todo/Todo';

export const TodoItem = (props: {
  id: number;
  title: string;
  todoDoneHandler: (id: number) => void;
}) => {
  const { id, title, todoDoneHandler } = props;

  return (
    <li>
      <Todo id={id} title={title} todoDeleteHandler={todoDoneHandler} />
    </li>
  );
};

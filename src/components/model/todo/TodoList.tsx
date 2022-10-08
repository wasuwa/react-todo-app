import React from 'react';
import { Todo } from '../../../hooks/useTodo';
import { TodoItem } from './TodoItem';

type Props = {
  todoList: Todo[];
  todoDoneHandler: (id: number) => void;
};

export const TodoList = (props: Props) => {
  const { todoList, todoDoneHandler } = props;

  return (
    <ul>
      {todoList &&
        todoList.length !== 0 &&
        todoList
          .filter(todo => {
            return !todo.done;
          })
          .map(todo => {
            return (
              <TodoItem
                key={todo.id}
                id={todo.id}
                title={todo.title}
                todoDoneHandler={todoDoneHandler}
              />
            );
          })}
    </ul>
  );
};

import React from 'react';
import { TodoItem } from './TodoItem';
import { useTodo } from '../../../hooks/useTodo';

export const TodoList = () => {
  const { todoList, doneTodo } = useTodo();

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
                todoDoneHandler={doneTodo}
              />
            );
          })}
    </ul>
  );
};

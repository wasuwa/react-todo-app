import React from 'react';
import { Todo } from '../../../../hooks/useTodo';
import { TodoItem } from '../../../ui/TodoItem/TodoItem';

type Props = {
  todoList: Todo[];
  todoDoneHandler: (id: number) => void;
};

export const TodoList = (props: Props) => {
  const { todoList, todoDoneHandler } = props;

  if (todoList.length === 0) {
    return <p className='text-small text-primary-text'>Todoが存在しません</p>;
  }

  return (
    <div>
      {todoList && (
        <ul>
          {todoList
            .filter(todo => {
              return !todo.done;
            })
            .reverse()
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
      )}
    </div>
  );
};

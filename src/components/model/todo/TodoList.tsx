import React, { useEffect, useState } from 'react';
import { useErrorHandler } from 'react-error-boundary';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { Todo } from '../../ui/Todo/Todo';
import { getEndpoint } from '../../../common/endpoint';

interface TodoListModel {
  id: number;
  title: string;
  done: boolean;
}

export const TodoList = () => {
  const [todos, setTodos] = useState<TodoListModel[]>();
  const errorHandler = useErrorHandler()

  useEffect(() => {
    const endpoint = getEndpoint('todos');
    axios
      .get(endpoint)
      .then((res: AxiosResponse<TodoListModel[]>) => {
        setTodos(res.data);
      })
      .catch((error: AxiosError<{ error: string }>) => {
        errorHandler(error);
      });
  }, []);

  return (
    <ul className='max-w-4xl mx-auto'>
      {todos &&
        todos.length !== 0 &&
        todos.map(todo => {
          return (
            <li key={todo.id}>
              <Todo title={todo.title} />
            </li>
          );
        })}
    </ul>
  );
};

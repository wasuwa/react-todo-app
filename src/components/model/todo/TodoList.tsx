import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { Todo } from '../../ui/Todo/Todo';
import { getEndpoint } from '../../../common/utils/endpoint';
import { PageError } from '../../ui/PageError/PageError';

interface TodoModel {
  id: number;
  title: string;
  done: boolean;
}

interface TodoError {
  message: string;
}

export const TodoList = () => {
  const [todos, setTodos] = useState<TodoModel[]>();
  const [apiError, setApiError] = useState<TodoError>();

  useEffect(() => {
    const endpoint = getEndpoint('todos');
    axios
      .get(endpoint)
      .then((res: AxiosResponse<TodoModel[]>) => {
        setTodos(res.data);
      })
      .catch((error: AxiosError<{ error: string }>) => {
        setApiError({ message: error.message });
      });
  }, []);

  if (apiError) {
    return <PageError text={apiError.message} />;
  }

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

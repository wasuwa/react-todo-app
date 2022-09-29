import React, { useEffect, useState } from 'react'
import { Todo } from '../../ui/Todo/Todo'
import { endpoint } from '../../../common/utils/apiClient';
import axios, { AxiosResponse, AxiosError } from 'axios';

interface TodoModel {
  id: number
  title: string
  done: boolean
}

export const TodoList = () => {
  const [todos, setTodos] = useState<TodoModel[]>();

  useEffect(() => {
    axios
    .get(endpoint('/todos'))
    .then((res: AxiosResponse<TodoModel[]>) => {
      setTodos(res.data);
    })
    .catch((error: AxiosError<{ error: string }>) => {
      console.log('通信失敗');
      console.log(error.status);
    })
  }, []);

  return (
    <ul className='max-w-4xl mx-auto'>
      {
        todos && todos.length !== 0 && (
          todos.map((todo, index) => {
            return (
              <li key={index}>
                <Todo title={todo.title} />
              </li>
            )
          })
        )
      }
    </ul>
  );
};

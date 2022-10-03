import { useEffect, useState } from 'react';
import { useErrorHandler } from 'react-error-boundary';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { getEndpoint } from '../common/endpoint';

interface Todo {
  id: number;
  title: string;
  done: boolean;
}

export const useTodo = (): { todoList: Todo[] } => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const errorHandler = useErrorHandler();

  useEffect(() => {
    const endpoint = getEndpoint('todos');
    axios
      .get(endpoint)
      .then((res: AxiosResponse<Todo[]>) => {
        setTodoList(res.data);
      })
      .catch((error: AxiosError<{ error: string }>) => {
        errorHandler(error);
      });
  }, []);

  return { todoList };
};

import { useEffect, useState } from 'react';
import { useErrorHandler } from 'react-error-boundary';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { getEndpoint } from '../common/endpoint';

interface Todo {
  id: number;
  title: string;
  done: boolean;
}

export const useTodo = (): {
  todoList: Todo[];
  deleteTodo: (id: number) => void;
} => {
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

  const deleteTodo = (id: number): void => {
    try {
      const endpoint = getEndpoint('deleteTodo', { id });
      axios.delete(endpoint).catch((error: AxiosError<{ error: string }>) => {
        errorHandler(error);
      });
    } catch (error) {
      errorHandler(error);
    }

    const todos = todoList.filter(todo => {
      return todo.id !== id;
    });
    setTodoList(todos);
  };

  return { todoList, deleteTodo };
};

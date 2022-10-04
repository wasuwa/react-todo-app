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
  doneTodo: (id: number) => void;
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

  const doneTodo = (id: number): void => {
    const todos = todoList.map(todo => {
      if (todo.id !== id) {
        return todo;
      }
      const toggleTodo = todo;
      toggleTodo.done = !toggleTodo.done;

      try {
        const endpoint = getEndpoint('doneTodo', { id });
        axios
          .put(endpoint, toggleTodo)
          .catch((error: AxiosError<{ error: string }>) => {
            errorHandler(error);
          });
      } catch (error) {
        errorHandler(error);
      }
      return toggleTodo;
    });
    setTodoList(todos);
  };

  return { todoList, doneTodo };
};

import React from 'react';
import axios, { AxiosError } from 'axios';
import { useErrorHandler } from 'react-error-boundary';
import { Todo } from '../../ui/Todo/Todo';
import { getEndpoint } from '../../../common/endpoint';

export const TodoItem = (props: { id: number; title: string }) => {
  const { id, title } = props;
  const errorHandler = useErrorHandler();

  const deleteTodoItem = () => {
    try {
      const endpoint = getEndpoint('deleteTodo', { id });
      axios.delete(endpoint).catch((error: AxiosError<{ error: string }>) => {
        errorHandler(error);
      });
    } catch (error) {
      errorHandler(error);
    }
  };

  return (
    <li>
      <Todo title={title} todoDeleteHandler={deleteTodoItem} />
    </li>
  );
};

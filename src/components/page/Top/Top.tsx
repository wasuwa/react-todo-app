import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from '../../functional/ErrorBoundary/ErrorBoundary';
import { useTodo } from '../../../hooks/useTodo';
import { Header } from '../../ui/Header/Header';
import { TodoAdd } from '../../model/todo/TodoAdd';
import { TodoList } from '../../model/todo/TodoList';
import { Head } from '../../ui/Head/Head';

export const Top = () => {
  const { todoList, createTodo, doneTodo } = useTodo();

  return (
    <>
      <Header />
      <main className='bg-primary-background'>
        <div className='mx-one my-two'>
          <div className='max-w-4xl mx-auto'>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Head text='新規作成' activeMarginBottom />
              <TodoAdd todoCreateHandler={createTodo} />
              <Head text='一覧' activeMarginBottom />
              <TodoList todoList={todoList} todoDoneHandler={doneTodo} />
            </ErrorBoundary>
          </div>
        </div>
      </main>
    </>
  );
};

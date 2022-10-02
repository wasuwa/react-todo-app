import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from '../../functional/ErrorBoundary/ErrorBoundary';
import { Header } from '../../ui/Header/Header';
import { TodoList } from '../../model/todo/TodoList';

export const Top = () => {
  return (
    <>
      <Header />
      <main className='bg-primary-background'>
        <div className='m-one'>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <TodoList />
          </ErrorBoundary>
        </div>
      </main>
    </>
  );
};

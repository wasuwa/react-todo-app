import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from '../../functional/ErrorBoundary/ErrorBoundary';
import { Header } from '../../ui/Header/Header';
import { PageError } from '../../ui/PageError/PageError';

export const NotFound = () => {
  return (
    <>
      <Header />
      <main className='bg-primary-background'>
        <div className='mx-one my-two'>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <PageError text='ページが見つかりません' />
          </ErrorBoundary>
        </div>
      </main>
    </>
  );
};

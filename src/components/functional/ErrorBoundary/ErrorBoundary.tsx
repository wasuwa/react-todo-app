import React from 'react';
import { FallbackProps } from 'react-error-boundary';
import { PageError } from '../../ui/PageError/PageError';

export const ErrorFallback = ({ error }: FallbackProps) => {
  return <PageError text={error.message} />;
};

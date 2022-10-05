import React, { SyntheticEvent } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface FormInput {
  title: string;
}

function onPromise<T>(promise: (event: SyntheticEvent) => Promise<T>) {
  return (event: SyntheticEvent) => {
    if (promise) {
      promise(event).catch(error => {
        throw error;
      });
    }
  };
}

export const TodoAdd = () => {
  const { register, handleSubmit } = useForm<FormInput>();
  const onSubmit: SubmitHandler<FormInput> = data => {
    console.log(data);
  };

  return (
    <form onSubmit={onPromise(handleSubmit(onSubmit))}>
      <label htmlFor='todoTitle'>
        タスク名
        <input type='text' id='todoTitle' {...register('title')} />
      </label>
      <button type='submit' id='todoSubmit'>作成</button>
    </form>
  );
};

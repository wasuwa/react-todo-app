import React, { SyntheticEvent } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FormError } from '../../../ui/FormError/FormError';

type Props = {
  todoCreateHandler: (title: string) => void;
};

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

export const TodoAdd = (props: Props) => {
  const { todoCreateHandler } = props;
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormInput>();
  const onSubmit: SubmitHandler<FormInput> = todo => {
    todoCreateHandler(todo.title);
  };

  const borderColor = errors.title
    ? 'border-primary-error'
    : 'border-primary-border';

  return (
    <form
      onSubmit={onPromise(handleSubmit(onSubmit))}
      className='mb-one p-one bg-primary-content'
    >
      <label
        htmlFor='todoTitle'
        className='block mb-4 text-primary-text text-small'
      >
        タイトル
        <input
          type='text'
          id='todoTitle'
          {...register('title', { required: 'タイトルは必須です' })}
          className={`block border w-full mt-0.5 p-0.5 text-primary-text ${borderColor}`}
        />
        {errors.title && errors.title.message && (
          <FormError message={errors.title.message} />
        )}
      </label>
      <button
        type='submit'
        id='todoSubmit'
        className='block w-full p-1 text-white font-bold bg-primary'
      >
        作成
      </button>
    </form>
  );
};

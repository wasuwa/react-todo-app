import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TodoAdd } from './TodoAdd';

describe('TodoAdd', () => {
  const mockTodoCreateHandler = jest.fn();

  test('タイトルを入力した状態で送信した場合、todoCreateHandler関数が呼び出されること', async () => {
    render(<TodoAdd todoCreateHandler={mockTodoCreateHandler} />);

    userEvent.type(
      screen.getByRole('textbox', { name: 'タイトル' }),
      'Goの勉強'
    );
    userEvent.click(screen.getByRole('button', { name: '作成' }));

    await waitFor(() => {
      expect(mockTodoCreateHandler).toBeCalled();
    });
  });

  test('タイトルが未入力の状態で送信した場合、エラーメッセージが表示されること', async () => {
    render(<TodoAdd todoCreateHandler={mockTodoCreateHandler} />);

    userEvent.click(screen.getByRole('button', { name: '作成' }));

    await waitFor(() => {
      expect(screen.getByText('タイトルは必須です').textContent).toBe(
        'タイトルは必須です'
      );
    });
  });
});

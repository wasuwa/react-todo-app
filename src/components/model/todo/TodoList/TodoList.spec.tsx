import React from 'react';
import { render, screen } from '@testing-library/react';
import { TodoList } from './TodoList';

describe('TodoList', () => {
  const mockTodoDoneHandler = jest.fn();

  const todos = [
    { id: 1, title: 'Next.jsの勉強', done: false },
    { id: 2, title: 'TypeScriptの勉強', done: false },
    { id: 3, title: 'Goの勉強', done: true },
  ];

  describe('Todoが1個以上存在する場合', () => {
    test('未完了のTodoが最新順で表示されていること', () => {
      render(
        <TodoList todoList={todos} todoDoneHandler={mockTodoDoneHandler} />
      );
      expect(screen.getAllByText(/勉強/)).toHaveLength(2);

      let index = 1;
      screen.getAllByText(/勉強/).forEach(element => {
        expect(element.textContent).toBe(todos[index].title);
        index -= 1;
      });
    });
  });

  describe('Todoリストが存在しない場合', () => {
    test('Todoが表示されず、メッセージが表示されること', () => {
      render(<TodoList todoList={[]} todoDoneHandler={mockTodoDoneHandler} />);
      expect(screen.queryAllByText(/勉強/)).toHaveLength(0);
      expect(screen.getByText('Todoが存在しません').textContent).toBe(
        'Todoが存在しません'
      );
    });
  });
});

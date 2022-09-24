import React from 'react';
import Header from './header/Header';
import TodoList from './todo/TodoList';

function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-1 overflow-x-hidden bg-gray-200'>
        <div className='m-5'>
          <TodoList />
        </div>
      </main>
    </div>
  );
}

export default App;

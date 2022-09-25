import { Header } from '../../ui/Header/Header';
import { TodoList } from '../../model/todo/TodoList';

export const Top = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-1 overflow-x-hidden bg-gray-200'>
        <div className='m-5'>
          <TodoList/>
        </div>
      </main>
    </div>
  );
}

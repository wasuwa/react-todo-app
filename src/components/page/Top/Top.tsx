import { Header } from '../../ui/Header/Header';
import { TodoList } from '../../model/todo/TodoList';

export const Top = () => {
  return (
    <>
      <Header />
      <main className='bg-primary-background'>
        <div className='m-one'>
          <TodoList/>
        </div>
      </main>
    </>
  );
}

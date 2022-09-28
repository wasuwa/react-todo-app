import { Wrapper } from '../../../common/utils/wrapper';
import { Header } from '../../ui/Header/Header';
import { TodoList } from '../../model/todo/TodoList';

export const Top = () => {
  return (
    <Wrapper>
      <Header />
      <main>
        <TodoList/>
      </main>
    </Wrapper>
  );
}

import { useEffect, useState } from 'react'
import { Todo } from '../../ui/Todo/Todo'
import axios from 'axios';

interface TodoModel {
  id: number
  title: string
  done: boolean
}

export const TodoList = () => {
  const [todos, setTodos] = useState<TodoModel[]>();

  const endpoint: string = process.env.REACT_APP_API_ENDPOINT + '/todos';

  useEffect(() => {
    axios
    .get(endpoint)
    .then((res) => {
      setTodos(res.data);
    })
    .catch((error) => {
      console.log('通信失敗');
      console.log(error.status);
    })
  }, []);

  return (
    <ul className='max-w-4xl mx-auto'>
      {
        todos && todos.length !== 0 && (
          todos.map((todo, index) => {
            return (
              <li key={index}>
                <Todo title={todo.title} />
              </li>
            )
          })
        )
      }
    </ul>
  );
};

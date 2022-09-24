import React, { useEffect, useState } from 'react'
import {Todo, TodoItem} from './TodoItem'
import axios from 'axios';

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>();

  const endpoint: string = process.env.REACT_APP_API_ENDPOINT + '/todos';

  useEffect(() => {
    axios
    .get(endpoint)
    .then((res) => {
      setTodos(res.data)
    })
    .catch((error) => {
      console.log('通信失敗')
      console.log(error.status)
    })
  }, []);

  return (
    <div className='max-w-4xl mx-auto'>
      {
        todos && todos.length !== 0 && (
          todos.map((todo, index) => {
            return (
              <div key={index}>
                <TodoItem id={todo.id} title={todo.title} done={todo.done}/>
              </div>
            )
          })
        )
      }
    </div>
  );
};

export default TodoList

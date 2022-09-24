export interface Todo {
  id: number
  title: string
  done: boolean
}

export const TodoItem = (props: Todo) => {
  const {title} = props;

  return (
    <div className='flex justify-between mb-5 p-5 bg-white'>
      <h3 className='font-bold'>{title}</h3>
      <button className='text-blue-600 font-bold'>完了</button>
    </div>
  )
}

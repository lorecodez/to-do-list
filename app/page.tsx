import Image from 'next/image';
import TodoList from '@/components/TodoList';
import TodoForm from '@/components/TodoForm';
import Task from '@/components/Task';

export default function Home() {

  //tempory 
  const tempTodos = [
  {
    title: 'task 1',
    createdAt: new Date().toISOString().split('T')[0],
    description:'something to do',
    due: 7,
    important: false,
    completed: false,
  },
  {
    title: 'task 1',
    createdAt: new Date().toISOString().split('T')[0],
    description:'something to do',
    important: false,
    due: 7,
    completed: false,
  },
  {
    title: 'task 1',
    createdAt: new Date().toISOString().split('T')[0],
    description:'something to do',
    important: false,
    due: 7,
    completed: false,
  }
  ]

  const array = [
    1,
    2,
    3,
  ]

  const date = new Date();

  const currentDate = date.toISOString().split('T')[0];


  return (
    <div className='flex flex-col justify-center items-center gap-4'>
      <div className='w-3/4 p-2 shadow-2xl rounded-lg  bg-gray-50'>
        <h1 className='text-4xl font-bold w-full text-center m-2'>
          Tasks for <span>{currentDate}</span>
        </h1>
        <TodoList todos={tempTodos}/> 
      </div>
      <div className='w-fit p-2 shadow-2xl'>
        <h2 className='text-5xl font-bold'>Create a task</h2>
        <TodoForm/>
      </div>
      
    </div>
  )
}

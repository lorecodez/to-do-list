'use server'
import Image from 'next/image';
import TodoList from '@/components/TodoList';
import TodoForm from '@/components/TodoForm';
import { prisma } from '@/prisma/prisma';

type Props = {
    params: { id: string }
}

export default async function page({ params }: Props) {


  const slug = params.id
  const todos = await prisma.tasks.findMany({
    where: {
        user_id: slug,
    }
  });


  return (
    <div className='flex flex-col justify-center items-center gap-4'>
      <div className='w-3/4 p-2 shadow-2xl rounded-lg  bg-gray-50 '>
        { todos ? <TodoList todos={todos}/> : <h2>No tasks for today</h2> } 
      </div>
      <details className='p-2 shadow-2xl w-3/4 bg-gray-50 rounded-lg'>
        <summary className='text-4xl font-bold w-full text-center m-2 text-blue-500 '>
          Create a task
        </summary>
        <TodoForm/>
      </details>
      
    </div>
  )
}

'use server'
import Image from 'next/image';
// import TodoList from '@/components/TodoList';
// import TodoForm from '@/components/TodoForm';
import { prisma } from '@/prisma/prisma';
import { Suspense, lazy } from 'react';
import { getServerSession } from 'next-auth';
import { authoptions } from '../api/auth/[...nextauth]/route';

// type Props = {
//     params: { user: string }
// }

const TodoList = lazy(() => import('@/components/TodoList').then( module => {
    return {default: module.default}
  }) 
);

const TodoForm = lazy(() => import('@/components/TodoForm').then( module => {
  return {default: module.default}
  }) 
);

export default async function page() {


  const session = await getServerSession(authoptions);

  const user_email = session!.user!.email!;

  
  const user = await prisma.users.findUnique({
    where: {
      email: user_email
    }
  })

  const todos = await prisma.tasks.findMany({
    where: {
        user_id: user!.id,
    }
  });


  return (
    <div className='flex flex-col justify-center items-center gap-4 h-full my-10 lg:mt-20 mt-64 p-2'>
      <h1 className='font-bold text-5xl m-10 drop-shadow-lg'>
        Welcome Back {user!.username}
      </h1>
      <div className='flex lg:flex-row flex-col justify-center items-start gap-4 h-full w-full'>
        <div className='w-full p-2 shadow-2xl rounded-lg  bg-gray-100 min-h-[600px]'>
          <Suspense
          fallback={<p>Loading...</p>}
          >
            { todos ? <TodoList todos={todos}/> : <h2>No tasks for today</h2> } 
          </Suspense>
        </div>
        <div className='p-2 shadow-2xl w-full bg-gray-100 rounded-lg h-fit'>
          <h3 className='text-4xl font-bold w-full text-center m-2 text-black '>
            Create a task
          </h3>
          <Suspense
          fallback={<p>Loading...</p>}
          >  
            <TodoForm user={user!}/>
          </Suspense>
        </div>
      </div>
    </div>
  )
}

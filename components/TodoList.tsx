'use client'
import React, { useState } from 'react';
import Task from '@/components/Task';

type props = {
    todos: any[],
}

export default function TodoList({todos}: props) {


  const [editMode, setEditMode] = useState(false)

  const date = new Date();

  const currentDate = date.toISOString().split('T')[0];

  return (
    <div className='w-full min-h-96 h-96 flex-col flex gap-2'>
        <div className='flex items-center justify-between'>
          <h1 className='text-4xl font-bold w-fit text-left m-2 text-blue-500'>
            Tasks for <span>{currentDate}</span>
          </h1>
          <button
          title='edit mode.'
          type='button'
          onClick={()=> setEditMode((prev)=> !prev)}
          className={`${ editMode ? 'bg-red-500' : 'bg-blue-500' } rounded-full px-2 py-1 hover:bg-gray-200 hover:text-blue-200 inline text-white transition-all ease-linear`}
          >
            Edit Tasks
          </button>
        </div>
        <div className=' overflow-y-scroll flex-col flex gap-4'>
          {todos.map((todo: any, index: number) => 
            <div className=' w-full h-fit'key={index}>
              {/* {console.log(!index)} */}
              <Task task={todo} editMode={editMode} />
            </div>
          )}
        </div>
      
    </div>
  )
}

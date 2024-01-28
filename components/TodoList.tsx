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
          <h1 className='text-4xl font-bold w-fit text-left m-2 text-black'>
            Tasks for <span>{currentDate}</span>
          </h1>

         <div className='w-fit h-fit flex items-center justify-center gap-2'>
          <h5>Edit Mode</h5>
          <label className='bg-white cursor-pointer relative w-16 h-8 rounded-full'>
              <input
              title='edit mode.'
              type='checkbox'
              aria-label='Edit mode'
              onClick={()=> setEditMode((prev)=> !prev)}
              className='sr-only peer'
              // className={`${ editMode ? 'bg-red-500 text-white border-none' : 'bg-white' } text-xl rounded-full border px-3 py-1 hover:bg-gray-200 hover:text-blue-200 inline text-black transition-all ease-linear`}
              >
              </input>
              <span className='w-2/5 h-4/5 bg-red-300 absolute rounded-full left-[3px] top-[3px] peer-checked:bg-red-500 peer-checked:left-9 transition-all duration-500'></span>
            </label>
         </div>
        </div>
        <div className=' overflow-y-scroll flex-col flex gap-4'>
          {todos.map((todo: any, index: number) => 
            <div className=' w-full h-fit'key={index}>
              {/* {console.log(!index)} */}
              <Task task={todo} editMode={editMode} date={currentDate}/>
            </div>
          )}
        </div>
      
    </div>
  )
}

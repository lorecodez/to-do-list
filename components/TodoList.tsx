'use client'
import React from 'react';
import Task from '@/components/Task';

type props = {
    todos: any[],
}

export default function TodoList({todos}: props) {

  return (
    <div className='w-full min-h-96 h-96 flex-col flex gap-2 overflow-y-scroll'>
      
        {todos.map((todo: any, index: number) => 
          <div className=' w-full h-fit'key={index}>
            {/* {console.log(!index)} */}
            <Task task={todo} />
          </div>
        )}
      
    </div>
  )
}

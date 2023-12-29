import { deleteTask } from '@/Utils/utils';
import React, { useState } from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank, MdOutlineStarOutline, MdOutlineStarPurple500 } from "react-icons/md";


type props = {
    task: task;
    deleteMode: boolean;
}

export default function Task({ task, deleteMode }: props) {

  const [important, setImportant] = useState(task.important);
  const [completed, setCompleted] = useState(task.completed);

  

  

  const handleImportant = async() => {
    setImportant((prev) => !prev);

  }

  const handleCompleted = () => {
    setCompleted((prev) => !prev);
  }

  const handleDelete = async() => {
    const id = task.id;

    const response = await deleteTask(id);

  }


  return (
    <div className='text-2xl w-full h-fit flex items-center justify-between rounded-lg bg-blue-500 text-white px-1 shadow-inner'>
      <div className='flex flex-col items-left gap-1'>
        <h2 className='font-bold'>{task.title}</h2> 
        <span className='text-xl'>Due <span className=' underline'>{task.due?.toISOString().split('T')[0]}</span></span>
      </div>
      {deleteMode ?
      <div>
        <button
        title='Delete.'
        type='submit'
        className='rounded-full py-1 px-4 bg-red-500 hover:bg-gray-200 hover:text-gray-700'
        onClick={handleDelete}
        >
          Delete
        </button>
      </div>
      :
      <div className=' flex-col-reverse flex gap-1'>
        <button
        title='Important.'
        type='button'
        onClick={handleImportant}
        >
          {important ? <MdOutlineStarPurple500/> : <MdOutlineStarOutline/>}
        </button>
        <button
        title='Completed.'
        type='button'
        onClick={handleCompleted}
        >
          {completed ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
        </button>
      </div>
      }

    </div>
  )
}

import React, { useState } from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank, MdOutlineStarOutline, MdOutlineStarPurple500 } from "react-icons/md";


type props = {
    task: task
}

export default function Task({ task }: props) {

  const [important, setImportant] = useState(task.important);
  const [completed, setCompleted] = useState(task.completed);

  console.log('title' + task.title);

  

const handleImportant = async() => {
  setImportant((prev) => !prev);

}

const handleCompleted = () => {
  setCompleted((prev) => !prev);
}

  return (
    <div className='text-2xl w-full h-fit flex items-center justify-between rounded-lg bg-blue-500 text-white px-1 shadow-inner'>
      <div className='flex flex-col items-left gap-1'>
        <h2 className='font-bold'>{task.title}</h2> 
        <span className='text-xl'>Due <span className=' underline'>{task.due?.toISOString().split('T')[0]}</span></span>
      </div>
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

    </div>
  )
}

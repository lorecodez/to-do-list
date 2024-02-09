import { completedTask, deleteTask, isImportant, notImportant, undoCompleted } from '@/Utils/utils';
import React, { useState } from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank, MdOutlineStarOutline, MdOutlineStarPurple500 } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";
import UpdateForm from './UpdateForm';
import { useRouter } from 'next/navigation';


type props = {
    task: task;
    editMode: boolean;
    date: string;
}

export default function Task({ task, editMode, date }: props) {

  const [important, setImportant] = useState(task.important);
  const [completed, setCompleted] = useState(task.completed);
  const [update, setUpdate] = useState(false);
  const [view, setView] = useState(false);

  const router = useRouter();

  const id = task.id;

  const handleImportant = async() => {
    setImportant((prev) => !prev);
    let response = important ? await notImportant(id) :  await isImportant(id);

  }

  const handleCompleted = async() => {
    setCompleted((prev) => !prev);
    let response = completed ? await undoCompleted(id) :  await completedTask(id);
    
  }

  const handleDelete = async() => {
    const response = await deleteTask(id);
    router.refresh()
  }

  const due = task.due?.toISOString().split('T')[0];

  let isDue;

  // if(){
  //   isDue = true;
  // };



  return (
    <div className=' bg-white text-2xl w-full h-fit flex flex-col items-center justify-center gap-2 rounded-lg border text-black p-2 shadow-inner'>
      <div className='flex h-fit w-full items-center justify-between'>
        {update && 
          <div className='bg-gray-400 bg-opacity-40 top-0 left-0 absolute w-screen h-screen flex items-center justify-center'>
            <div className='bg-white flex flex-col rounded-lg p-1 w-1/3'>
              <div className='w-full flex items-center m-0 justify-end' >
                <button
                title='Exit.'
                type='button'
                onClick={()=> setUpdate((prev)=> !prev)}
                className='w-fit h-fit'
                >
                  <IoIosCloseCircleOutline
                  className='text-black hover:bg-gray-200 hover:text-blue-200 transition-all ease-linear rounded-full'
                  size={25}
                  />
                </button>
              </div>
              <UpdateForm id={id}/>
            </div>
          </div>
        }
        <div className='flex flex-col items-left gap-1'>
          <h2 className='font-bold'>{task.title}</h2> 
          <span className='text-xl'>Due <span className={`${due == date && 'text-red-500'}underline`}>{due}</span></span>
        </div>
        {editMode ?
        <div className='flex items-center justify-center gap-x-2'>
          <button
          title='Delete.'
          type='submit'
          className='rounded-full py-1 px-4 bg-red-500 hover:bg-red-200 hover:text-gray-500 text-base transition-all ease-linear text-white'
          onClick={handleDelete}
          >
            Delete
          </button>
          <button
          title='Update.'
          type='submit'
          className='rounded-full py-1 px-4 bg-gray-200 text-black hover:bg-gray-50 hover:text-gray-500 text-base transition-all ease-linear'
          onClick={()=> setUpdate((prev)=> !prev)}
          >
            Update
          </button>
        </div>
        :
        <div className='flex items-center justify-center gap-2'>
          <button
          title='View.'
          type='button'
          onClick={()=> setView((prev)=> !prev)}
          className='rounded-full py-1 px-4 bg-gray-200 text-black hover:bg-gray-50 hover:text-gray-500 text-base transition-all ease-linear'
          >
            {view ? 'Close' : 'View'}
          </button>
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
        }
      </div>
      {view && 
        <div className='bg-white shadow border text-black rounded-lg my-2 p-2 w-full'>
          <p>{task.description}</p>
        </div>
      }
    </div>
  )
}

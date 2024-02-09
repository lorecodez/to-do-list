'use client'
import React, { useState } from 'react';
import { MdOutlineStarOutline, MdOutlineStarPurple500 } from "react-icons/md";
import { createTask } from '@/Utils/utils'
import { useRouter } from 'next/navigation';
import type { users } from '@prisma/client';


type Props = {
  user: users
}


export default function TodoForm({user}: Props) {

  const [important, setImportant] = useState(false);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [due, setDue] = useState<Date>(new Date());

  const handleImportant = () => {
    setImportant((prev) => !prev)
  };

  const router = useRouter();

  const {id} = user

  const user_id = id;

  const handleSubmit = (e: any ) => {

    e.preventDefault();

    const cleanTitle = title.toString().trim()
    const cleanDescription = description.toString().trim()

    createTask({
      user_id,
      cleanTitle,
      cleanDescription,
      due,
      createdAt: new Date(),
      important,
      completed: false,
    })

    router.refresh()

  }

  return (
    <form
    onSubmit={handleSubmit}
    className='flex flex-col gap-y-2 text-lg items-center'>
      <div className='flex flex-col gap-y-2 text-lg items-start w-full'>
        <div className='flex items-center gap-x-5 flex-wrap'>
          <div className='flex-col flex w-fit'>
            <label className=' font-bold'>Title</label>
            <input
            title='Title.'
            type='text'
            placeholder='Title of your task'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='p-1 border-2 rounded-lg'
            ></input>
          </div>
          <div className='flex-col flex w-fit'>
            <label className=' font-bold'>Due date</label>
            <input
            title='Due date.'
            type='date'
            value={due?.toISOString().split('T')[0]}
            onChange={(e) => setDue(new Date(e.target.value))}
            className='p-1 border-2 rounded-lg '
            />
          </div>
          <div className='flex items-end gap-4 w-full'>
            <label className=' font-bold'>Click the star to make the task <span className='text-red-500'>Important</span>.</label>
            <button
            title='Important.'
            type='button'
            onClick={handleImportant}
            className=' h-10'
            >
              {important ? <MdOutlineStarPurple500 size={25} /> : <MdOutlineStarOutline size={25}/> }
            </button>
          </div>
        </div>
        <div className='flex-col flex w-full'>
          <label className=' font-bold'>Description</label>
          <textarea
          title='Description.'
          placeholder='Describe your task'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className='p-1 border-2 rounded-lg h-48 text-left'
          ></textarea>
        </div>
      </div>
      <button
      title='Create Task.'
      type='submit'
      value='Submit'
      className='font-bold my-7 mt-10 bg-red-500 rounded-full w-1/3 p-2 text-white text-2xl hover:bg-gray-200 hover:text-blue-200 transition-all ease-linear'
      >
        Create Task
      </button>
    </form>
  )
}

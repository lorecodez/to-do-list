'use client'
import React, { useState } from 'react';
import { MdOutlineStarOutline, MdOutlineStarPurple500 } from "react-icons/md";
import { createTask } from '@/Utils/utils'
import { useRouter } from 'next/navigation';

type props = {
    id: string;
}

export default function UpdateForm({id}: props) {

  const [important, setImportant] = useState(false);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [due, setDue] = useState<Date>(new Date());

  const handleImportant = () => {
    setImportant((prev) => !prev)
  }

  const router = useRouter()

  const handleSubmit = (e: any ) => {

    e.preventDefault()


    router.refresh()

  }

  return (
    <form
    onSubmit={handleSubmit}
    className='flex flex-col gap-y-2 text-lg text-black'>
      <div className='flex-col flex'>
        <label>Title</label>
        <input
        title='Title.'
        type='text'
        placeholder='New title of your task'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className='p-1 border-2 rounded-lg'
        ></input>
      </div>
      <div className='flex-col flex'>
        <label>Description</label>
        <input
        title='Description.'
        type='text'
        placeholder='New description your task'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className='p-1 border-2 rounded-lg'
        ></input>
      </div>
      <div className='flex-col flex'>
        <label>Due date</label>
        <input
        title='Due date.'
        type='date'
        value={due?.toISOString().split('T')[0]}
        onChange={(e) => setDue(new Date(e.target.value))}
        className='p-1 border-2 rounded-lg'
        />
      </div>
      <div className='flex items-center gap-4'>
        <label>Important</label>
        <button
        title='Important.'
        type='button'
        onClick={handleImportant}
        className=' h-10'
        >
          {important ? <MdOutlineStarPurple500 size={25} /> : <MdOutlineStarOutline size={25}/> }
        </button>
      </div>
      <button
      title='Create Task.'
      type='submit'
      value='Submit'
      className='bg-blue-500 rounded p-2 text-white text-3xl hover:bg-gray-200 hover:text-blue-200 transition-all ease-linear'
      >
        Create Task
      </button>
    </form>
  )
}

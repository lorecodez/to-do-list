"use client"

import { signUp } from '@/Utils/utils';
import Link from 'next/link';
import React, { useState } from 'react'

export default function SignUpForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('')

    const handleSubmit = async () => {
        console.log('Submiting sign up')
        setMessage('Siging Up...')
        
        const message = await signUp(email.toString().toLowerCase().trim(), password.toString().trim(), username.toString());

        setMessage(message);
    }

  return (
    <div className='flex flex-col gap-4 justify-start items-center bg-gray-100 rounded-lg shadow-xl w-1/3  min-w-max p-2 text-lg'>
      <h1 className='text-4xl font-bold text-black my-4'>
        Create an account
      </h1>
      <input 
      type="text" 
      title='Email.'
      aria-label='Email'
      placeholder='your@email.com'
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className=' w-full rounded-full p-1 px-2 h-11 text-lg'
      />
      <input 
      type="text" 
      title='Username.'
      aria-label='Username'
      placeholder='username'
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      className=' w-full rounded-full p-1 px-2 h-11 text-lg'
      />
      <input 
      type="password" 
      title='Password.'
      aria-label='Password'
      placeholder='password'
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      className=' w-full rounded-full p-1 px-2 h-11 text-lg'
      />
      <p>Already have an account? <Link href={'/auth/sign-in'} className='hover:underline'>Login</Link></p>
      <button
      type='button'
      title='Sign In.'
      onClick={handleSubmit}
      className='font-raleway bg-red-600 text-white rounded-full px-3 py-3 w-1/3 text-center hover:bg-red-200 hover:text-gray-400 transition text-2xl flex items-center justify-center font-medium'
      >
        Sign Up
      </button>
      <p>{message}</p>
    </div>
  )
}

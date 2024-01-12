"use client"

import { signUp } from '@/Utils/utils';
import React, { useState } from 'react'

export default function SignUpForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('')

    const handleSubmit = async () => {
        console.log('Submiting sign up')
        setMessage('Siging Up...')
        
        const message = await signUp(email, password, username);

        setMessage(message);
    }

  return (
    <div className='flex flex-col gap-2 justify-start items-center bg-blue-300 rounded-lg shadow-xl'>
      <h1>
        Sign Up
      </h1>
      <input 
      type="text" 
      title='Email.'
      aria-label='Email'
      placeholder='your@email.com'
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      />
      <input 
      type="password" 
      title='Password.'
      aria-label='Password'
      placeholder='password'
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      />
      <input 
      type="text" 
      title='Username.'
      aria-label='Username'
      placeholder='username'
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      />
      <button
      type='button'
      title='Sign In.'
      onClick={handleSubmit}
      >
        Sign Up
      </button>
      <p>{message}</p>
    </div>
  )
}

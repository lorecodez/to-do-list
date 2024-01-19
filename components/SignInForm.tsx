'use client'
import React, { useEffect, useState } from 'react';
import { getSession, signIn, useSession } from 'next-auth/react';
import { redirect, useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SignInForm() {
    const router = useRouter();

    const { data: session, status } = useSession()

    

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    
    const handleSubmit = async () =>{
        console.log('Submiting sign in');

        try {
            const response  = await signIn('credentials', {
                email,
                password,
                redirect: false,
            });

            if(!response || response.ok !== true){
                setMessage('Email or Password is incorrect');
            } else {
                router.refresh();
            }

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if(status === 'authenticated') {
            router.refresh();
            router.push(`/${session.user?.email}`);
        };
    }, [status])

    
  return (
    <div className='flex flex-col gap-2 justify-start items-center bg-blue-300 rounded-lg shadow-xl w-1/3 p-2'>
    <h1 className='text-3xl font-bold text-white'>
      Login
    </h1>
    <input 
    type="text" 
    title='Email.'
    aria-label='Email'
    placeholder='your@email.com'
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className=' w-full rounded-full p-1 px-2'
    />
    <input 
    type="password" 
    title='Password.'
    aria-label='Password'
    placeholder='password'
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    className=' w-full rounded-full p-1 px-2'
    />
    <p>Don&apos;t have an account? <Link href={'/auth/sign-up'} className='hover:underline'>Sign Up</Link></p>
    <button
    type='button'
    title='Login.'
    onClick={handleSubmit}
    className='bg-white rounded-full px-2 py-1 w-full hover:bg-gray-100 hover:text-blue-200 transition text-xl'
    >
       Login
    </button>
    <p>{message}</p>
  </div>
  )
}

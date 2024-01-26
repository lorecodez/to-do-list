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
            router.push(`/home`);
        };
    }, [status])

    
  return (
    <div className='flex flex-col gap-4 justify-start items-center bg-gray-100 rounded-lg shadow-xl w-1/3  min-w-max p-2 text-lg'>
        <h1 className='text-4xl font-bold text-black my-4'>
            Please Login
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
        type="password" 
        title='Password.'
        aria-label='Password'
        placeholder='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className=' w-full rounded-full p-1 px-2 h-11 text-lg'
        />
        <p>Don&apos;t have an account? <Link href={'/auth/sign-up'} className='hover:underline'>Sign Up</Link></p>
        <button
        type='button'
        title='Login.'
        onClick={handleSubmit}
        className='font-raleway bg-red-600 text-white rounded-full px-3 py-3 w-1/3 text-center hover:bg-red-200 hover:text-gray-400 transition text-2xl flex items-center justify-center font-medium'
        >
            Login
        </button>
        <p>{message}</p>
    </div>
  )
}

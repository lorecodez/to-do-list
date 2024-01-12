import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function SignInForm() {
    const router = useRouter();

    const { status } = useSession();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    
    const handleSubmit = async () =>{
        console.log('Submiting sign in')
    }

    useEffect(() => {
        if(status === 'authenticated') {
            router.refresh();
            router.push('/');
        };
    }, [status])

    
  return (
    <div className='flex flex-col gap-2 justify-start items-center bg-blue-300 rounded-lg shadow-xl'>
    <h1>
      Sign In
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
    <button
    type='button'
    title='Sign In.'
    onClick={handleSubmit}
    >
      Sign In
    </button>
    <p>{message}</p>
  </div>
  )
}

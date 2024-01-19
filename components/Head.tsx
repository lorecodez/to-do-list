import { authoptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import React from 'react';

export default async function head() {

  const session = await getServerSession(authoptions);

  return (
    <div className='w-full flex justify-between'>
      <p className='text-3xl text-center bg-blue-500 text-white shadow-2xl w-fit p-2 mt-2 rounded-lg font-bold'>
        Task Master
      </p>
      <Link
      href='/auth/sign-out'
      >
        Sign Out
      </Link>
    </div>
  )
}

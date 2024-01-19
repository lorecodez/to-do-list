import { authoptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import React from 'react';

export default async function head() {

  const session = await getServerSession(authoptions);

  return (
    <div className='w-full flex justify-between p-2'>
      <p className='text-3xl text-center bg-blue-300 text-white shadow-2xl w-fit p-2 mt-2 rounded-lg font-bold'>
        Task Master
      </p>
      <Link
      href='/auth/sign-out'
      className='rounded-full py-1 px-2 bg-white h-fit hover:bg-gray-100 hover:text-blue-200 transition'
      >
        Sign Out
      </Link>
    </div>
  )
}

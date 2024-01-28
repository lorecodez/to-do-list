import { authoptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import React from 'react';
import Image from "next/image";
import TaskMasterLogo from "@/public/taskmasterlogo.svg";

export default async function head() {

  const session = await getServerSession(authoptions);

  return (
    <div className='w-full flex justify-between p-4'>
      <Image
      title='Task Master.'
      alt='Task Master.'
      src={TaskMasterLogo}
      width={60}
      height={60}
      className='drop-shadow-xl'
      />
      <Link
      href='/auth/sign-out'
      className='font-raleway bg-red-600 text-white rounded-full px-3 py-2 w-fit text-center h-fit hover:bg-red-200 hover:text-gray-400 transition text-xl flex items-center justify-center font-medium shadow-xl'
      >
        Sign Out
      </Link>
    </div>
  )
}

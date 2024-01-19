'use server'

import Link from "next/link"


export default async function Home() {



  return (
    <div className='flex justify-center items-center flex-col gap-2 h-full'>
      <div>
        <div className="w-fit">
          <h1 
          className="text-7xl font-bold text-white bg-blue-300 rounded-full p-2 px-4"
          >
            Welcome to <span className="text-black">Task Master</span>
          </h1>
          <h3 className="text-3xl px-4 font-bold py-1">Take Control of Your Time</h3>
          <h2
          className="text-3xl px-4 py-1"
          >
            Developed and Designed by <Link href='https://lorenzowashington.com' className="">LORENZO WASHINGTON</Link>
          </h2>
        </div>
        <div className="w-full flex justify-center my-6">
          <Link
          href={'/auth/sign-in'}
          className="bg-white rounded-full px-3 py-2 w-1/3 block text-center hover:bg-gray-100 hover:text-blue-200 transition text-5xl"
          >Sign In</Link>
        </div>
      </div>
    </div>
  )
}

'use server'

import Link from "next/link";
import { MdOutlineArrowForwardIos } from "react-icons/md";




export default async function Home() {



  return (
    <div className='flex justify-center items-center flex-col gap-2 h-full'>
      <div>
        <div className="w-fit">
          <h1 
          className="text-7xl font-bold text-black bg-gray-50 rounded-full p-2 px-4 my-8"
          >
            Welcome to <span className="text-black font-raleway border-8 p-2 border-black">Task Master<span className="text-red-500">.</span></span>
          </h1>
          <h3 className="text-5xl px-4 font-bold my-4">Take Control of Your Time</h3>
          <h2
          className="text-3xl px-4 py-1"
          >
            Developed and Designed by <Link href='https://lorenzowashington.com' className="">LORENZO WASHINGTON</Link>
          </h2>
        </div>
        <div className="w-full flex justify-center my-6">
          <Link
          href={'/auth/sign-in'}
          className="font-raleway bg-red-600 shadow-xl text-white rounded-full px-3 py-3 w-1/3 text-center hover:bg-red-200 hover:text-gray-400 transition text-4xl flex items-center justify-center font-medium"
          >LOGIN<span><MdOutlineArrowForwardIos /></span></Link>
        </div>
      </div>
    </div>
  )
}

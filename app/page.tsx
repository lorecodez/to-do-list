'use server'

import Link from "next/link"


export default async function Home() {



  return (
    <div className=''>
      <div>
        <h1>Welcome to <span>Task Master</span></h1>
        <h3>Take Control of Your Time</h3>
        <h2>Developed and Designed by <Link href='https://lorenzowashington.com' className="">LORENZO WASHINGTON</Link></h2>
      </div>
      <div>
        <Link
        href={'/auth/sign-in'}
        className=""
        >Sign In</Link>
      </div>
    </div>
  )
}

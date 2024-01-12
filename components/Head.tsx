import React from 'react';

export default function head() {
  return (
    <div className='w-full flex justify-between'>
      <p className='text-3xl text-center bg-blue-500 text-white shadow-2xl w-fit p-2 mt-2 rounded-lg font-bold'>
        Task Master
      </p>
      <button>
        Sign Out
      </button>
    </div>
  )
}

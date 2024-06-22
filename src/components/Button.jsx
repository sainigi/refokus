import React from 'react';
import { IoIosReturnRight } from "react-icons/io";


function Button() {
  return (
    <div className='bg-white max-w-fit py-2 px-4 gap-5 rounded-full flex items-center justify-between text-black'>
      <h1 className='text-sm font-normal'>Start a Project</h1>
      <IoIosReturnRight />
    </div>
  )
}

export default Button
import React from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";


function Card({styleval, carddata, hover,bgonhover}) {
    console.log(carddata)
  return (
    <div className={`${styleval.width} ${bgonhover}  bg-zinc-700 gap-2 rounded-xl p-6 flex flex-col justify-between`}>
        <div className={`${hover}`}>
            <div className='flex justify-between items-center '>
                <h3 className='text-xs font-normal'>{carddata.firstHead}</h3>
                <IoIosArrowRoundForward />
            </div>
            <h1 className='text-2xl font-medium w-52 mt-6'>{carddata.secondHead}</h1>
        </div>
        <div className='mt-40'>
            <h1 className=' text-8xl font-medium leading-tight'>{carddata.thirdHead}</h1>
            {carddata.isBtnShow && <button className='rounded-full px-5 py-2 border-[1px] mt-3 border-zinc-300 text-sm font-normal'>Contact Us</button>}
            <p className='font-normal text-xs'>{carddata.fourthHead}</p>
        </div>
    </div>
  )
}

export default Card
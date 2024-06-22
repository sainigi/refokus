import React from 'react'

const Stripe = (data) => {
    console.log(data);
  return (
    <div className='flex items-center  gap-14 ml-8'>
        <div className='overflow-hidden min-w-40'>
            <img src={data.data.imgUrl} alt="" />
        </div>
        <div className='flex gap-10 items-center p-4 px-6'>
            <h1 className="text-2xl font-extralight">{data.data.count}</h1>
        </div>
        <span className="w-[1px] h-16  bg-zinc-600 inline-block"></span>
    </div>
  )
}

export default Stripe
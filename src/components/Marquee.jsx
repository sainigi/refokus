import React from 'react'

function Marquee({imagesurl}) {
  return (
    <div className='flex w-full py-5 gap-10 whitespace-nowrap overflow-hidden'>
        {imagesurl.map((url,index)=> <img className='w-32 flex-shrink-0' src={url} key={index}/>)}
        {imagesurl.map((url,index)=> <img className='w-32 flex-shrink-0' src={url} key={index}/>)}
    </div>
  )
}

export default Marquee
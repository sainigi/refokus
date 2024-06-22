import React from 'react'
import Stripe from './Stripe'

function Stripes() {

    var stripeData = [
        {imgUrl:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg", count:2},
        {imgUrl:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg", count:52},
        {imgUrl:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg", count:15},
        {imgUrl:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg", count:2},
        {imgUrl:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg", count:52},
        {imgUrl:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg", count:15},
    ]

  return (
    <div className='flex gap-10 border-t-[1px] border-b-[1px] border-zinc-600 mt-32 whitespace-nowrap overflow-hidden'>
        {stripeData.map((ele,index)=>(<Stripe key={index} data = {ele} />))}
    </div>
  )
}

export default Stripes
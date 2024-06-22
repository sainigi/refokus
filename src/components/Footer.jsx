import React from 'react'

function Footer() {
  return (
    <div className='w-full'>
        <div className='mx-auto max-w-screen-xl flex  px-20  gap-32'>
            <div>
                <h1 className='text-[10rem] font-medium font-santoshi tracking-tight leading-none'>refokus.</h1>
            </div>
            <div className='flex flex-row gap-20 items-start '>
                <div className='flex flex-col justify-center text-zinc-500 '>
                    <h5 className='text-sm font-normal'>Socials</h5>
                    <div className='mt-6 text-sm font-normal flex flex-col gap-2  items-start'>
                        <button>Twitter</button>
                        <button>Instagram</button>
                        <button>Facebook</button>
                    </div>
                </div>
                <div className='flex flex-col justify-center text-zinc-500'>
                    <h5 className='text-sm font-normal'>SiteMap</h5>
                    <div className='mt-6 text-sm font-normal flex flex-col gap-2 items-start'>
                        <button>Home</button>
                        <button>Work</button>
                        <button>Carrer</button>
                        <button>Contact</button>
                    </div>
                </div>

                <div className='translate-y-1/2'>
                    <p className='text-xs font-normal'>Refokus is a pioneering digital agency driven by design and empowered by technology.</p>
                    <button className='rounded-sm bg-blue-700 px-2 mt-2'>Enterprise Partner</button>
                </div>
                
            </div>
        </div>

        <div className='mx-auto max-w-screen-xl  px-20 py-6 flex gap-10 font-normal text-xs text-zinc-500   '>
            <button>Privacy Policy</button>
            <button>Cookie Policy</button>
            <button>Impressum</button>
            <button>Terms</button>
        </div>
    </div>
  )
}

export default Footer
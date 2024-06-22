import React from 'react'
import Button from './Button'

function Product() {
  return (
    <div className='max-w-screen-xl m-auto'>
        <div className='py-20 flex items-center justify-between'>
            <h1>arquitel</h1>
            <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sint praesentium porro error itaque, animi possimus vero fugit voluptates mollitia.</p>
            <Button />
            </div>
        </div>
    </div>
  )
}

export default Product
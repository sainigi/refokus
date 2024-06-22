import React from 'react'
import Product from './Product'

function Products() {

  var products = [
    {title:'arquitel', description:'With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.',live: true, case:false},
    {title:'Like Magic', description:'We designed and developed a magical gaming experience made in Webflow to promote the translation service and their sponsorship of the 2022 Webflow Conference.',live: true, case:false},
    {title:'Silvr', description:'We teamed up with financing solutions provider Silvr to audit, refine and evolve their brand.',live: true, case:true},
    {title:'Rainfall', description:'We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.',live: true, case:false},
    {title:'Intenseye', description:'A brand new website for Intenseye just before their $64M Series.',live: true, case:true},
    {title:'Remind', description:'Remind got a new website that is designed and developed to be easy to maintain and ready to learn, reflecting their mission to connect students and families.',live: true, case:false},
    {title:'Summon', description:'We created a website for Summon that showcases their innovative technology through animated and captivating UI components and emerging technologies.',live: true, case:true},
    {title:'Jungle', description:'We crafted a timeless visual system for Jungle Ventures, covering all aspects of web design, and empowered their marketing team to scale organically using Webflow.',live: true, case:false},
  ]

  return (
    <div>
        {products.map((val,index)=> <Product key={index} val={val}/>)}
    </div>
  )
}

export default Products
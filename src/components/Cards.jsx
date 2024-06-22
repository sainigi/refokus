import React from 'react';
import Card from './Card';

function Cards() {
    var cardData = [
        {firstHead:'Up Next: News', secondHead:'Insights and behind the scenes',thirdHead:'',fourthHead:'Explores what drives our team.',isBtnShow:false},
        {firstHead:'Get In Touch', secondHead:'Lets get to it, together.',thirdHead:'Start a Project',fourthHead:'',isBtnShow:true},
    ]
  return (
    <div className='w-full'>
        <div className='mx-auto max-w-screen-xl flex gap-2 p-20 min-h-[600px]'>
            <Card styleval={{width:'basis-1/3'}} carddata={cardData[0]} hover='hover:px-2 hover:ease-in hover:duration-300 '/>
            <Card styleval={{width:'basis-2/3'}} carddata={cardData[1]} hover='hover:px-2 hover:ease-in hover:duration-300 ' bgonhover='hover:bg-violet-600'/>
        </div>
    </div>
  )
}

export default Cards
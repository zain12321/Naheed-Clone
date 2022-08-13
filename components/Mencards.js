import React from 'react'

function Menscards(props) {
    const {image, title, price } = props
  return (
    <div className='flex '>
         <div className='h-80 mt-2 border hover:border-[#FCB557] bg-white w-44'>
       
             <img className='h-48 w-40  ' 
    src={image} alt=""/>
     <div className='px-2 text-[14px] pb-8'>
     <h1 className='text-blue-900 font-semibold text-[14px]'>{title}</h1>
              <p className='text-[#222222] font-normal'>{price}</p>
     </div>
         </div>
    </div>
  )
}

export default Menscards
import React from 'react'

function Delivery(props) {
    const  { image, title, desc } = props
  return (
    <div className='flex items-center h-14 w-[320px] space-x-2 pt-8 border-l pl-8'>
        <img
        className='h-12 w-14 '  
 src={image} alt=""/>
        <div>
            <h1 className='text-[18px] text-[#222222] font-medium'>{title}</h1>
            <p className='text-[14px]'>{desc}</p>
        </div>
    </div>
  )
}

export default Delivery

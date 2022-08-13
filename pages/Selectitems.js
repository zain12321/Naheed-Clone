import Link from 'next/link'
import React from 'react'

function Selectitems() {
  return (
    <div className='bg-[#fff] h-full w-full py-[63px] fixed'>
        <div className=' '>
     <div className='h-[290px] max-w-[360px] bg-white border-2 rounded-md border-black text-black text-center
      m-auto'>
     <h1 className='pt-2 text-[24px] font-serif font-bold border-b-2 pb-2 border-black'>Login With </h1>
     <div className='flex flex-col items-center pt-9'>

      <Link href="/Login">
      <a>
      <div className='h-[60px] w-[300px] pl-4 py-8 hover:bg-gray-200 cursor-pointer flex items-center space-x-3'>
       
         <img className='h-10 w-10 rounded-full ' 
            src="https://pps.whatsapp.net/v/t61.24694-24/294997810_1176312363283121_1787894006439940867_n.jpg?ccb=11-4&oh=01_AVyhr2U612Fzcv6itmWjKv27NaT8BYM3GtK3vFOfP4XfPw&oe=62FE9FC3" alt="" />
            
         

           <p className='flex flex-col items-start text-[16px]'> <span>zainfb1122@gmail.com</span>
            <span>google.account</span></p>
        </div>
        </a>
      </Link>
      <Link href="Login">
      <a>
      <div className='h-[60px] w-[300px] pl-4 py-8 hover:bg-gray-200 cursor-pointer flex items-center space-x-3'>
            <img className='h-10 w-10 rounded-full ' 
            src="https://pps.whatsapp.net/v/t61.24694-24/294997810_1176312363283121_1787894006439940867_n.jpg?ccb=11-4&oh=01_AVyhr2U612Fzcv6itmWjKv27NaT8BYM3GtK3vFOfP4XfPw&oe=62FE9FC3" alt="" />
           <p className='flex flex-col items-start text-[16px]'> <span>zainfb1122@gmail.com</span>
            <span>twitter.account</span></p>
        </div>
        </a>
      </Link>
      <Link href="Login">
      <a>
      <div className='h-[60px] w-[300px] pl-4 py-8 hover:bg-gray-200 cursor-pointer flex items-center space-x-3'>
            <img className='h-10 w-10 rounded-full ' 
            src="https://pps.whatsapp.net/v/t61.24694-24/294997810_1176312363283121_1787894006439940867_n.jpg?ccb=11-4&oh=01_AVyhr2U612Fzcv6itmWjKv27NaT8BYM3GtK3vFOfP4XfPw&oe=62FE9FC3" alt="" />
           <p className='flex flex-col items-start text-[16px]'> <span>zainfb1122@gmail.com</span>
            <span>facebook.account</span></p>
        </div>
        </a>
      </Link>
     </div>
     </div>
        </div>
    </div>
  )
}

export default Selectitems
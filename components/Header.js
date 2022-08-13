import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import {IoMdArrowDropdown} from 'react-icons/io'
import { GoPerson  } from 'react-icons/go'
import { BsHeartFill} from 'react-icons/bs'
import { RiShoppingBasketFill} from 'react-icons/ri'
import {  IoSearch } from 'react-icons/io5'
import { ImPhone } from 'react-icons/im'
import Link from 'next/link'
// import {Link} from 'react-router-dom'
function Header() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
   setCount(count + 1 )
  }
  const removeDisplay = () => {
    setCount(0)
  }
  return (
      <>
    <header className='fixed top-0'>
        <div className='bg-[#00401A] 
     z-50  flex space-x-14 sm:space-x-14 md:space-x-1
    lg:space-x-11  md:px-24  pl-24 md:pl-0 lg:px-11 2xl:px-[200px] 
      items-center w-[1500px] lg:w-[1370px] xl:[1310px] '>  
   <div className=' md:pl-11 xl:pl-0'>
       <img className='h-11 w-[190px] sm:h-10 sm:w-[190px] md:h-11 md:w-[160px] lg:h-10 xl:w-[300px]  
        2xl:w-[800px] ' src="https://media.naheed.pk/logo/stores/1/14-August-Logo.png" alt ="" />
   </div>
   <div className='hidden xl:flex items-center justify-center  
   space-x-2 bg-[#F2C557] text-[#222222] h-12 w-[150px] lg:h-12 lg:w-48 pl-3'>
     <AiOutlineMenu className='h-5 w-5'/>
     <h1 className='text-[14px] font-bold'>
     <button onClick={incrementCount}>Department</button> 
      </h1>
     <IoMdArrowDropdown className='h-5 w-5 pt-[2px]'/>
   </div>
<div className='w-[660px] sm:w-[630px]  md:w-[690px] lg:w-[600px]
 2xl:w-[1500px] lg:h-10  my-2  sm:my-3 xl:my-0 py-2 xl:py-1
  lg:ml-0 rounded-full flex justify-between bg-[#FFFFFF]'>
    <input id="search" name="search" placeholder='Search here'
    required className='ml-11 outline-none w-[370px]' />
   <div className='border-l w-14'> 
   <IoSearch className='pl-3 pb-1 h-8 w-8 '/>
   </div>
</div>
<div className='flex items-center justify-center space-x-2  xl:pl-11'>
    <div className='flex items-center text-[#FFFFFF] space-x-1 w-[105px]'>
        <GoPerson className='h-7 w-7 '/>
        <div className='text-[12px]'>
            <p className='font-bold'>
              Account
            </p>
             <p>
               Hello! Sign in
               </p>    
               
        </div>
        </div>
      <div className='flex items-center text-[#FFFFFF] space-x-1'>
      <BsHeartFill className='h-6 w-6 '/>
        <div className='text-[12px]'>
            <p className='font-bold'>Wishlist</p>
             <p>0 item</p>    
        </div>
      </div>
      <Link href='/Selectitems'>
      <a>
      <div className='flex  items-center'>
<RiShoppingBasketFill className=' h-9 w-9 text-[#FFFFFF]'/>
        <p className='mb-6 absolute ml-6  
        text-[12px] text-[#222222] text-center rounded-full h-4 w-4  bg-[#F2C557]'>
         <button onClick={removeDisplay}>{count}</button> 
          </p> 
        <div className='pl-1 pt-1'>
            
             <p className='text-[#FFFFFF] text-[16px] font-bold'>Cart</p>  
        </div>
   
    </div>
        
        </a></Link>
   
</div>
</div>
    </header>

    <navbar className="hidden xl:flex  mt-24 
    sm:justify-between sm:items-center sm:mt-11 py-3 px-11 text-[#222222] text-[14px] shadow-xl 
    bg-gray-100">
        <div className='flex space-x-4'>
            <h1>  Welcome to Naheed.pk!</h1>
          
          <div className=' border-l '>
          <p className='flex items-center space-x-2 pl-4'>
            <ImPhone className=''/>
<span>
(021) 111-624-333 (111-NAHEED)</span></p>
          </div>
        </div>
        <div>
            <ul className='flex space-x-5'>
                <li>Contact </li>
                <li>Help</li>
                <li>Order</li>
                <li>Naheed  Loyalty</li>




             
            </ul>
        </div>

    </navbar>
    </>
  )
}

export default Header
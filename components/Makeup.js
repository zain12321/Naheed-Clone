import React from 'react'
import Makeupitems from './Makeupitems'

const Dealcard = [
    {
        id:1,
        image:"https://media.naheed.pk/catalog/product/cache/fd6f1e57839b9b324771e8de21428b3f/1/2/1226199-1.jpg",
        title:"Mountain kill bacterias and save your life use ...",
        price:"Rs, 12,7000"
    },
    {
        id:2,
        image:"https://media.naheed.pk/catalog/product/cache/fd6f1e57839b9b324771e8de21428b3f/1/2/1206190-1.jpg",
        title:"Baby  mosturaiser Cream for children use ...",
        price:"Rs, 22,22200"
    },
    {
        id:3,
        image:"https://media.naheed.pk/catalog/product/cache/fd6f1e57839b9b324771e8de21428b3f/1/1/1181731-1.jpg",
        title:"Mountain kill bacterias and save your life use ...",
        price:"Rs, 39,22200"
    },
    {
        id:4,
        image:"https://media.naheed.pk/catalog/product/cache/fd6f1e57839b9b324771e8de21428b3f/1/1/1175639-1.jpg",
        title:"Baby  mosturaiser Cream for children use ...",
        price:"Rs, 56,0020"
    },
    {
        id:5,
        image:"https://media.naheed.pk/catalog/product/cache/fd6f1e57839b9b324771e8de21428b3f/1/1/1185031-1.jpg",
        title:"Mountain kill bacterias and save your life use ...",
        price:"Rs, 8309,00"
    },
    {
        id:6,
        image:"https://media.naheed.pk/catalog/product/cache/fd6f1e57839b9b324771e8de21428b3f/1/1/1181799-1.jpg",
        title:"Baby  mosturaiser Cream for children use ...",
        price:"Rs, 737,373793"
    }
]
function Makeup() {
  return (
    <>
  <div className='flex my-2'>
      
      <h1 className='mt-11 ml-14 xl:ml-16 sm:ml-11  text-[22px] sm:text-[22px]
       xl:text-[20px] text-[#222222]
       font-semibold xl:w-[180px]'>NAIL MAKEUP</h1>
        <div className=' xl:border-t-4 xl:border-gray-300 xl:w-[905px] xl:ml-4 xl:mt-16  '>         
        </div>
     <div className='mt-[52px] ml-[10px] xl:ml-4 font-medium text-[20px] xl:text-[14px]' >

     <h1 className='text-[1px] xl:text-[18px]'>View All</h1>
     </div>
      </div>

      <div>

      </div>


      <div className='flex h-[340px]  w-[1290px]  space-x-6 mx-6 px-11  bg-[#FFFFFF] border border-gray-200'>
        {Dealcard?.map((item) => (
                <Makeupitems {...item}/>
        ))}
      </div>
    </>
  )
}

export default Makeup
import React from 'react'
import Delivery from '../components/Delivery'

const Deliveryitems = [
  {
    id:1,
    image:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRosBK9csj9jpT5Yq6YcpTYGxuvsXBF6KEdUtsUJ7iXVxhOeNv5",
    title:"Fast Shipping",
    desc:"Shipped In 1-3 Days"
  },
  {
    id:2,
    image:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRnKFXkOFWirol2XQna_5d2xc9ypLfDE3JsEha4HGrEziRRgkht",
    title:"Free Returns",
    desc:"Free 7 Days Return"
  },
  {
    id:3,
    image:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRbbKEud2GJUdFjrjj6RNEX3TPYoEg9twGe893icS9vHmqPoKI9",
    title:"Payment On Delivery",
    desc:"Cash On Delivery Option"
  },
  {
    id:4,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7F7TE6uA5CHFjpMYuN9sO_VyMt1oG3kDnvNJYjaX1fESPjC4-",
    title:"Customer Support",
    desc:"Phone and Email"
  },
]
function Deliverycards() {
  return (
    <div className='flex h-[90px] w-[1347px] mt-11 bg-[#FFFFFF] px-4'>
     {Deliveryitems?.map((item) => (
              <Delivery {...item}/>
     ))}
    </div>
  )
}

export default Deliverycards
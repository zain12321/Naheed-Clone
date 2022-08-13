import React from 'react'
import { HiLocationMarker } from 'react-icons/hi'
import {ImPhone} from 'react-icons/im'
import {BsStopwatch} from 'react-icons/bs'
import Link  from 'next/link'
function Footer() {
  return (
    <div className=' bg-[#00401A] w-[1400px] sm:w-[1346px]'>

    <footer className='flex  
            space-x-2   p-4'>
          <div className='flex space-x-12 border-b border-[#999999]  '>
    <div className='space-y-5'>
        <h1 className='text-[18px] text-[#FFFFFF]'>CUSTOMER  DETAILS</h1>
        <div className='flex items-center space-x-2 pt-1'>
       <HiLocationMarker className='text-[#999999] h-6 w-6 ' />
       <div className='text-[#999999]'>
           <h1 >Ialsmabad , city pakistan dhok kala kha</h1>
           <p>Karachi Pakistan</p>
       </div>
        </div>
        <div className=' flex space-x-4'>
         <ImPhone  className='text-[#999999] pl-1 h-5 w-5'/>
         <h1 className='text-[#999999] text-[14px]'>092002930393939033</h1>
        </div>
        <div className='flex text-[#999999]'>
        <BsStopwatch className='pl-1 h-5 w-5'/>
        <p className='pl-3'>Customer support monday sat-9:00 to 1o:00pm</p>
        </div>
    </div>
    <div className='pb-14'>
        <h1 className='text-[22px] w-60 text-[#FFFFFF]'>CUSTOMER SERVICES</h1>
        <div className='pt-6'>
            <ul className='flex flex-col space-y-2 text-[#999999]'>
                <li>Contact us</li>
                <li>Delivery Info</li>
                <li>FAQs</li>
                <li>Nsheed loyaltyy</li>
            </ul>
        </div>
    </div>
    <div className='pb-14'>
        <h1 className='text-[22px]  text-[#FFFFFF]'>INFORMATION</h1>
        <div className='pt-6'>
            <ul className='flex flex-col space-y-3 text-[#999999]'>
                <li>Contact us</li>
                <li>Delivery Info</li>
                <li>FAQs</li>
            <ul className='flex space-x-4'>
                <li>
                    <img className='h-9 w-9 rounded-full'
             src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAllBMVEU7WZj///88WpdAXZpBX5tFY51FYZ3t7/V6jbgoS48vUJLS2OdSa6M3VZZuhLK2wNf3+fvd4u2Imr9NaKHEzeDv8ffh5uxje6ns7/E4V5oxUpjW3eR7j7Rddank6PHByt6dq8uQoMMjR42VpMCLnbvDzNmsuM20v9FVb6KntdFieqy0v9i8xtyYqMl+kbsdQYosT5qClrY1QXhgAAAE+ElEQVR4nO3dbXuiOBSA4QACBhoE8aVa8XWcqqjd/v8/t6LtzuzsKgdiICfXeb7ONZG7QaMGWmbdGr1/Zqnnei7+PM9Lxz+2/peM3Xyb3WTCDOqiGf98/SXcjs3yXZuI7tu3cOFO2z4cBdlsmr3dhFvPvAm8Nc1GhXA0NnEGiy6zOIsvwo2pM1jkvFtstDNZOIli9m4ykDFvy2ZmC50Z27V9DIrbMa/tQ1CcxzptH4LabIeE2CMh/kiIPxLij4T4IyH+SIg/EuKPhPgjYduJouCa+KdKI+grvMGE7bnpy7U0dV3Psb//5QtdOo6ewsIgvKy72h/DMJn7vj8vSpIkDAeLXr5frvrn6JClrl06lobCYoacQ7+XxLH1oPiSP8+9slnUTih4kHb380e235unQcmAegltwdlhH0J5lxIXl5CLKAdPH0JhwLPcL0fhFXK2rOpDJRTrqMrzD58wCE7VJxCTMHD2dXx4hLzTqwfEIuTpoCYQiTBwawNRCO3ArnuK4hDaQizrAzEIGe8//AiBX8gPiQQQgVCwowwQgVDuHEUgFI7UOaq/UAQnOaD2wuCl2uddhELZKdRdKFzJZ6HuQlv2hVR7IRP133HjEAaHWh/rEQnXJ+mTVG+hCORPUr2F8ouh7kJ+HsoLtd634FW+Xhsm4eLYy/+st9R470nA14rhYHnOUufyzBV/FOi8QxpA39DE+YFxHvxHB9zxbk/IgathEgW82s79v2tReAathmEGOBMf1aJwBQHOM6kJZK0+D0EvpX1ZYHtCIXIAcOCULXeltSdkC4DwxKUfqDVh0AEsh/MDZiFkO2bgSZ+kLQpTwKZ2T3KlKNJbuJQ/SVsUvpQL45XpwmF/Lf9AegvPvPzaw7K0FvpdEgIiobJISEJwJFQWCUkIjoTKIiEJwZFQWSQkITgSKst4oQ0UPuGRVAoFv99HByCMPh6MUAT40l+lUKTR/Q7n8m384fLwYITrKO3u4wfnoX+/IWCT+9H/v47RW5cSVQp5v9wg2b78S3HcwnhlvBDwYotbOMzKX0xxC/203ddS9cKEmS4ctLziqxfmgHd1qIUxZJ8ft7BvvDAyXQhZDnEL54DlELcwdEwXHgELPm7hHnLZG2ZhvIJcuYhaeDZeGJku9HemC5PSu7qwCweQ5RC1MIcsh6iFJ9BvMsUs7IMu5McsBC0WmIUx5LMTauH8BXQzBmJhWHoLMHbhArRYYBbuYb/2WqlwpVS4hN31pXSHNOrdLz+W3+gcD/L7Axwj2F1faq9U+P8bzK+tAXd2+d2PByMAb2trTchBwrU0UPurTfBeT2P+FUMkJCE8EiqLhCQER0JlkZCE4EioLBKSEBwJlUVCEoIjobJISEJwJFQWCUkIjoTKIiEJwZFQWSQkITgSKouEJARHQmWRkITgSKgsEpIQHAmVRUISgiOhskhIQnAkVBYJSQiOhMoiIQnBkVBZJCQhOBIqi4TPFDpPON7qNSl0n3C81WtO6LLxE463eo0JL77Pifwo1WtM2PnBtkYLRfrGXseTJ5wLVWtKOJnFzPr5jCOuWkNC4W0tZr12p6zxWWxION3EF6H1lk2fctRVakb41+zVKoRtEJsQikkBvAqt0cxp+BVV/V+0EhN3UwBvQiveRp7T5Ps3kPBcX+g46Wx7+4NL7Gu4ePuZpa7XVCwLrfhxF6GoO3w63rx9/6D+BncElkevYj5cAAAAAElFTkSuQmCC" 
                alt="" /></li>
                <li>
                    <img className='h-9 w-9 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT4F6E3OyejiB9uyy3zRzoNJilBpTSERhoLyF6nrwt1V25AZlhXMSMSgrf_Q4eVCmeB24&usqp=CAU"
                    alt=""/>
       </li>
                <li><img className='h-9 w-9 rounded-full'
 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb_XTeiko8LPcXs2zYYhVBuAbdWA2m-Zv5fA&usqp=CAU"
                alt="" /></li>
              
            </ul>
            </ul>
        </div>
    </div>
    <div className='pl-6'>
       <h1 className='text-[#FFFFFF] text-[18px] '>
SUBSCRIBE OUR NEWSLETTER</h1>
<p className='text-[#DDDDDD] text-[18px]'>Get the latest offersand promotions!</p>
<div className='h-12 w-96 flex mt-8' >
<input type="email" id="email"
placeholder='Enter your email'
className='w-72 pl-6 outline-none'
/>
<button className='bg-[#F2C557] w-36 text-[14px]'>
Subscribe
</button>
</div>
<Link href="https://play.google.com/store/search?q=%s&utm_source=opensearch">
<a>
<img 
className='h-[56px] w-36 pt-4' src="https://media.naheed.pk/imageblock_image/g/e/getapp.png" alt="" />

</a>
</Link>

    </div>
    </div>
   
    </footer>
 


 <div className='flex justify-between px-4 py-2 pb-6'>
    <h1 className='text-[#999999] '>Copyright © 2022 Naheed.pk. All rights reserved.</h1>
    <div className='flex '>
        <img src="https://media.naheed.pk/wysiwyg/payment-17-5-2021-v2.png" alt=""/>
    
    </div>
 </div>
  </div>
  )
}

export default Footer
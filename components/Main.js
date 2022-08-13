import React from 'react'
import Categories from './Categories'
import Deals from './Deals'
import Deliverycards from './Deliverycards'
import Footer from './Footer.js'
import Header from './Header'
import Kitchen from './Kicthen'
import Makeup from './Makeup'
import Mensshow from './Mensshow'
import Mobile from './Mobile'
import Slider from './Slider'
import Womansitem from './womansitem'

function Main() {
  return (
    <div>
         <Header/>
           <Slider/>
           <Categories/>
           <Deals/>
           <Mobile/>
           <Kitchen/>
           <Mensshow/>
           <Womansitem/>
           <Makeup/>
           <Deliverycards/>
           <Footer/>
    </div>
  )
}

export default Main
import React from 'react'
import { Header } from '../header/Header'
import { Footer } from '../footer/Footer'
import Features from '../features/Features'
import Products from '../products/Products'
import SloganPart from '../sloganpart/Sloganpart'
import './main.css'


function Main() {
  return (
    <div className='main-section'>
        <Header/>
        <SloganPart/>
        <Features/>
        <Products/>
        <Footer/>
    </div>
  )
}

export default Main

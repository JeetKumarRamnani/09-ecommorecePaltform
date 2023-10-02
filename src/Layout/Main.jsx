import React from 'react'
import HeroSection from './SubLayout/MainSubLayouts/HeroSection'
import Categories from './SubLayout/MainSubLayouts/Categories'
import FlashSale from '../Components/Main/FlashSale'

function Main() {
  return (
    <main className='relative top-24'>
        <HeroSection/>
        <Categories/>
        <FlashSale/>
        
    </main>
  )
}

export default Main
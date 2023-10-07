import React from 'react'
import Categories from '../Components/Main/Categories' 
import HeroSection from '../Components/Main/HeroSection'
import FlashSale from '../Components/Main/FlashSale'

function Main() {
  return (
    <main className='mt-5'>
        <HeroSection/>
        <Categories/>
        <FlashSale/>
        
    </main>
  )
}

export default Main
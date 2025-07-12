import React from 'react'
import WindowImage from "../../public/image.png"
import Image from 'next/image'
const HeroPage = () => {
  return (
    <div className='relative h-screen'>
        <div className='absolute inset-0 -z-10'>
        <Image src={WindowImage} fill alt='window-image' style={{objectFit: "cover"}}/>
        <div className='absolute inset-0 bg-gradient-to-r from-slate-900' />
        </div>
        <div className='flex items-center justify-center pt-64'>
        <h1 className='font-bold text-6xl text-white'>Professional screen</h1>
        </div>
    </div>
  )
}

export default HeroPage
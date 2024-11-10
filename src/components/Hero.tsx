

import React from 'react'
import Image from 'next/image'
import Navbar from './Navbar'

export default function Hero() {
  return (
    <div>
      <Navbar />

      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image className=" object-cover object-center rounded-full border-[3px] " alt="hero" src="/banner.png" height={400}
        width={400}/>
        </div>

        
        <div className="flex flex-col items-center lg:items-start lg:ml-10 text-center lg:text-left">
        <p className="text-2xl sm:text-xl md:text-2xl font-light"  data-aos="zoom-up-left">
            Hey👋!
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-4"  data-aos="zoom-in-left">
            I&apos;m Sadia Tariq!
          </h1>
          <p className="text-2xl sm:text-3xl md:text-4xl font-light"  data-aos="zoom-up-left">
            And I&apos;m a Frontend Developer
          </p>
        </div>
      </div>
    </div>
  )
}




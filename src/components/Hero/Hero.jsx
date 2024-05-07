import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { IoArrowDownCircleOutline } from "react-icons/io5";
import Button from './components/Button';

const Hero = () => {

  useGSAP(() => {
    const t1 = gsap.timeline()
    t1.from('.heading', {
      // y: 50,
      rotateX: '90deg',
      opacity: 0,
      duration: 0.8,
      stagger: 0.45
    }).from(['.para', '.arrow'], {
      y: 20,
      opacity: 0,
      duration: 0.6,
      delay: 0.2
    })
  })
  return (
    <div className='relative px-[1rem] md:px-16  flex flex-col justify-center items-center text-center min-h-[80vh] text-[#e0eeee] pb-24'>
      <div className='flex flex-col' style={{ perspective: '800px' }}>
        <h1 className='text-[4rem] md:text-[6rem] font-normal -tracking-[2px] leading-[3rem] md:leading-[4.5rem] heading'>roar in the</h1>
        <h1 className='text-[4rem] md:text-[6rem] font-normal -tracking-[2px] leading-[3rem] md:leading-[4.5rem] heading'>digital wilderness.</h1>
      </div>
      <div className='px-1 sm:px-0 mt-4 mb-8 sm:mb-4 w-full para'>
        <p className='flex flex-col font-[Syc] uppercase text-[.7rem] md:text-[0.85rem] md:font-bold '>
          <span>We roar with success, delivering the TRIONN</span>
          <span>through versatile design, branding and the latest</span>
          <span>tech development to companies.</span>
        </p>
      </div>
      <div className='arrow'>
        <IoArrowDownCircleOutline size={'24px'} color='#425152' />
      </div>
      <div className='px-[1rem] md:px-16  w-full text-[0.9rem] flex flex-row justify-between gap-4 md:gap-0 p-4 font-[Syc] absolute bottom-9 text-[#c5fcfc] font-bold'>
        <Button>
          Explore work
        </Button>
        <Button>
          Get in touch
        </Button>
      </div>
    </div>
  )
}

export default Hero
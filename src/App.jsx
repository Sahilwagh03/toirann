import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero/Hero'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Navbar from './components/Navbar'
import { ScrollTrigger } from 'gsap/all'

function App() {

  gsap.registerPlugin(ScrollTrigger)

  const handleCursor = (dets) => {
    gsap.to('#cursor', {
      x: dets.pageX, // Adjust to keep the custom cursor centered
      y: dets.pageY, // Adjust to keep the custom cursor centered
    });
  };

  useGSAP(() => {
    gsap.to('#coverDiv', {
      y: '-150%',
      opacity: 0,
      duration: 0.8,
      ease: 'power2.inOut',
      display: 'none'
    })

    gsap.to(['video', '#videoDiv'], {
      transform: 'translateY(2%)',
      scale: 1,
      duration: 0.5,
      delay: 0.5,
      ease: 'power4.inOut',
      scrollTrigger: {
        trigger: '.main_section',
        start: 'top 100%',
        end: 'top 0%',
        scrub: 2
      }
    }, 'g')
    gsap.fromTo('video', {
      borderRadius: '100rem',
    },
      {
        borderRadius: '1.5rem',
        duration: 0.5,
        delay: 0.5,
        scrollTrigger: {
          trigger: '.main_section',
          start: 'top 100%',
          end: 'top 0%',
          scrub: 2
        }
      }, 'g')
      gsap.from('h3',{
        backgroundPositionX:'100%',
        duration:1,
        scrollTrigger:{
          trigger:'.h3_Trigger',
          markers:true,
          start:'top 50%',
          end:'bottom 100%',
          scrub:2
        }
      })
  })


  return (
    <div onMouseMove={handleCursor}>
      <div className='w-[20px] h-[20px] rounded-full absolute bg-[#c5fcfc] mix-blend-difference z-20' id='cursor'></div>
      <svg viewBox="0 0 800 330" id='coverDiv' className='fixed z-10 '>
        <path id="curve" className=' w-full h-full bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-10 shadow-lg' d="M 800 300 Q 400 250 0 300 L 0 0 L 800 0 L 800 300 Z"></path>
      </svg>
      <div className='px-16 relative z-0'>
        <Navbar />
        <Hero />
        <div className='h-[100vh] flex justify-center main_section relative z-0 '>
          <div className='transform -translate-y-[65%] scaleDiv' id='videoDiv'>
            <video loop muted autoPlay className='rounded-[1.5rem] w-full h-full scale-[0.14]'>
              <source src='/intro-video.mp4' />
            </video>
          </div>
        </div>
        <div className='h-[100vh] flex justify-left main_section relative z-0 py-[12rem] h3_Trigger'>
          <div className='flex flex-col text-left text_animation_div'>
            <h3 className='text-[11rem] pt-5 pr-2 font-normal -tracking-[6px] leading-[8.4rem] text-transparent bg-[linear-gradient(90deg,_#e0eeee_50%,_#252525_50%)] bg-clip-text '>recent</h3>
            <h3 className='text-[11rem] pt-5 font-normal -tracking-[6px] leading-[8.4rem]  text-transparent bg-[linear-gradient(90deg,_#e0eeee_50%,_#252525_50%)] bg-clip-text '>work</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

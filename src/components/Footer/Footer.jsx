import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { IoArrowDownCircleOutline } from 'react-icons/io5'

const Footer = ({ handleLight, handleOffLight }) => {
    return (
        <>
            <div className='h-[auto] px-[1rem] md:px-16 relative z-0 font-[Syne] mt-[4rem] overflow-hidden'>
                <div className='flex flex-row justify-between w-full md:px-[4rem] '>
                    <div className='opacity-[0.7] text-white'>
                        <p>©2024 TRIONN<sup>®</sup></p>
                    </div>
                    <div>
                        <IoArrowDownCircleOutline size={'30px'} color='#425152' />
                    </div>
                </div>
            </div>
            <div className='relative pt-[3rem] mt-[3rem]'  onMouseEnter={handleLight} onMouseLeave={handleOffLight}>
                <div className='absolute w-full h-full bg-transparent z-40'></div>
                <img src="https://trionn.com/_next/static/media/footer-logo.7dd398e2.svg" alt="footer_img" className='bg-cover w-full relative z-0'/>
            </div>

        </>
    )
}

export default Footer
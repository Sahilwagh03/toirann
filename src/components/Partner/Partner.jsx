import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import Slide from './components/Slide'

const Partner = () => {

    useGSAP(() => {
        gsap.from('.partner_h3', {
            backgroundPositionX: '100%',
            duration: 1,
            scrollTrigger: {
                trigger: '.partner_trigger',
                start: 'top 50%',
                end: 'top 0%',
                scrub: 5,
            }
        })
        gsap.from('.love_h3', {
            backgroundPositionX: '100%',
            transform: 'translateX(20%)',
            duration: 1,
            scrollTrigger: {
                trigger: '.partner_trigger',
                start: 'top 50%',
                end: 'top 0%',
                scrub: 5,
            }
        })
        gsap.from('.para_partner span', {
            transform: 'translateY(50%)',
            duration: 0.4,
            opacity: 0,
            stagger: 0.15,
            scrollTrigger: {
                trigger: '.partner_trigger',
                start: 'top 30%',
                end: 'top 0%',
                scrub: 5,
            }
        })
    })
    return (
        <>
            <div className='px-[1rem] md:px-16 relative h-full relative z-0 py-[8rem] '>
                <div className='flex flex-col md:flex-row justify-between'>
                    <div className='flex flex-col text-left who_trigger partner_trigger'>
                        <h3 className='partner_h3 mb-[-1.8rem]  text-[6rem] md:text-[15rem] pt-5 pr-2 font-normal -tracking-[6px] leading-[4rem] md:leading-[11rem] text-transparent bg-[linear-gradient(90deg,_#e0eeee_50%,_#252525_50%)] bg-clip-text bg-[length:200%_100%]'>parter</h3>
                        <h3 className='love_h3 text-[6rem] md:text-[15rem] pt-5 font-normal -tracking-[6px] leading-[6rem] md:leading-[12rem]  text-transparent bg-[linear-gradient(90deg,_#e0eeee_50%,_#252525_50%)] bg-clip-text bg-[length:200%_100%]'>love</h3>
                    </div>
                    <div className='flex self-auto md:self-end'>
                        <h4 className='text-white text-left overflow-hidden font-[Syc] text-[1.5rem] font-normal para_partner h-auto'>
                            <span className='inline-block '>Take heed, as the</span>
                            <br></br>
                            <span className='inline-block '>lion's roar in our client</span>
                            <br></br>
                            <span className='inline-block'>reviews resounds.</span>
                        </h4>
                    </div>
                </div>
            </div>
            <Slide />
        </>
    )
}

export default Partner
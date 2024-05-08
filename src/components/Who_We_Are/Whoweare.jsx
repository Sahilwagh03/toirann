import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import Button from '../Hero/components/Button'

const Whoweare = () => {

    useGSAP(() => {
        const t1 = gsap.timeline()

        gsap.from('.who_h3', {
            backgroundPositionX: '100%',
            duration: 1,
            scrollTrigger: {
                trigger: '#who_trigger',
                start: 'top 40%',
                // scroller: 'body',
                end: 'top 10%',
                scrub: 5,
            }
        })
        gsap.from('.we_h3', {
            backgroundPositionX: '100%',
            x: '50%',
            duration: 1,
            scrollTrigger: {
                trigger: '#who_trigger',
                start: 'top 40%',
                scroller: 'body',
                end: 'top 10%',
                scrub: 5,
            }
        })
        gsap.from('.who_para span', {
            y: 40,
            opacity: 0,
            duration: 0.5,
            stagger: 0.15,
            scrollTrigger: {
                trigger: '.we_h3',
                scroller: 'body',
                start: 'top 40%',
                end: 'bottom 10%',
                scrub: 2
            }
        })
    })
    return (
        <div className='px-[1rem] md:px-16 relative h-[auto] flex justify-left relative z-0 pt-[6rem] pb-[2rem] md:py-[6rem]'>
            <div id='who_trigger' className='flex flex-col text-left who_trigger'>
                <h3 className='mb-[-1.8rem] who_h3 text-[6rem] md:text-[11rem] pt-5 pr-2 font-normal -tracking-[4px] md:-tracking-[6px] leading-[4rem] md:leading-[8.4rem] text-transparent bg-[linear-gradient(90deg,_#e0eeee_50%,_#252525_50%)] bg-clip-text bg-[length:200%_100%]'>who</h3>
                <h3 className='we_h3 text-[6rem] md:text-[11rem] pt-5 font-normal -tracking-[4px] md:-tracking-[6px] leading-[6rem] md:leading-[8.4rem]  text-transparent bg-[linear-gradient(90deg,_#e0eeee_50%,_#252525_50%)] bg-clip-text bg-[length:200%_100%] mb-[1rem] md:mb-[2.5rem]'>we are</h3>
                <h4 className='text-white flex flex-col font-[Syc] text-[1.6rem] md:text-[2.5rem] overflow-hidden font-normal who_para'>
                    <span className='inline-block'>As an award-winning agency</span>
                    <span className='inline-block'>within the digital jungle,</span>
                    <span className='inline-block'>TRIONN transcends </span>
                    <span className='inline-block'>vision into a legacy that</span>
                    <span className='inline-block'>endures.</span>
                </h4>
            </div>
        </div>
    )
}

export default Whoweare
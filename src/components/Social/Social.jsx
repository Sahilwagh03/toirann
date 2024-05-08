import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const Social = () => {
    useGSAP(()=>{
        gsap.from('.join_h3', {
            backgroundPositionX: '100%',
            transform: 'translateX(10%)',
            duration: 1,
            scrollTrigger: {
                trigger: '.join_trigger',
                start: 'top 50%',
                end: 'top 0%',
                scrub: 5,
            }
        })
        gsap.from('.jungle_h3', {
            backgroundPositionX: '100%',
            transform: 'translateX(5%)',
            duration: 1,
            scrollTrigger: {
                trigger: '.join_trigger',
                start: 'top 50%',
                end: 'top 0%',
                scrub: 5,
            }
        })
        gsap.from('.trek_h3', {
            backgroundPositionX: '100%',
            duration: 1,
            scrollTrigger: {
                trigger: '.join_trigger',
                start: 'top 50%',
                end: 'top 0%',
                scrub: 5,
            }
        })
    })
    return (
        <div className='px-[1rem] md:px-16 relative h-auto relative z-0 pb-[8rem] join_trigger'>
            <div className=''>
                <div className='flex flex-col text-center'>
                    <h3 className='join_h3 mb-[-1.8rem] text-[6rem] md:text-[15rem] pt-5 pr-2 font-normal -tracking-[6px] leading-[12rem] text-transparent bg-[linear-gradient(90deg,_#e0eeee_50%,_#252525_50%)] bg-clip-text bg-[length:200%_100%]'>join our</h3>
                    <h3 className='jungle_h3 text-[6rem] md:text-[15rem] pt-5 font-normal -tracking-[6px] leading-[12rem]  text-transparent bg-[linear-gradient(90deg,_#e0eeee_50%,_#252525_50%)] bg-clip-text bg-[length:200%_100%] mb-[-2rem]'>jungle</h3>
                    <h3 className='trek_h3 text-[6rem] md:text-[15rem] pt-5 font-normal -tracking-[6px] leading-[12rem]  text-transparent bg-[linear-gradient(90deg,_#e0eeee_50%,_#252525_50%)] bg-clip-text bg-[length:200%_100%]'>trek</h3>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Social
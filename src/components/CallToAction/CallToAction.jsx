import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import Button from '../Hero/components/Button'
import { MdArrowForwardIos } from 'react-icons/md'

const CallToAction = () => {
    useGSAP(() => {
        gsap.from('.time_h3', {
            backgroundPositionX: '100%',
            transform: 'translateX(-50%)',
            duration: 1,
            scrollTrigger: {
                trigger: '.call_trigger',
                start: 'top 90%',
                end: 'top 20%',
                scrub: 5,

            }
        })
        gsap.from('.roar_h3', {
            backgroundPositionX: '100%',
            transform: 'translateX(10%)',
            duration: 1,
            scrollTrigger: {
                trigger: '.call_trigger',
                start: 'top 90%',
                end: 'top 20%',
                scrub: 5,
            }
        })
        gsap.from('.connect_button', {
            transform: 'translateY(150%)',
            duration: 1,
            opacity: 0,
            scrollTrigger: {
                trigger: '.roar_h3',
                start: 'top 90%',
                end: 'top 30%',
                scrub: 2,
            }
        })
        gsap.from('.contact_animation', {
            transform: 'translateY(200%)',
            duration: 1,
            scrollTrigger: {
                trigger: '.connect_button',
                start: 'top 90%',
                end: 'top 30%',
                scrub: 2,
            }
        })
    })
    return (
        <div className='h-[auto] px-[1rem] md:px-16 relative z-0  overflow-hidden'>
            <div className='flex flex-col text-left call_trigger pb-[5rem]'>
                <h3 className='time_h3 mb-[-9rem] md:mb-[-1.8rem] text-[5rem] md:text-[15rem] pt-5 font-normal -tracking-[4px] md:-tracking-[6px] leading-[12rem] text-transparent bg-[linear-gradient(90deg,_#e0eeee_50%,_#252525_50%)] bg-clip-text bg-[length:200%_100%]'>time to</h3>
                <div className='flex flex-row justify-between items-end'>
                    <h3 className='roar_h3 mb-[-9rem] text-[5rem] md:text-[15rem] pt-5 font-normal -tracking-[4px] md:-tracking-[6px] leading-[12rem]  text-transparent bg-[linear-gradient(90deg,_#e0eeee_50%,_#252525_50%)] bg-clip-text bg-[length:200%_100%] md:mb-[-2rem]'>roar!</h3>
                    <Button className='connect_button bg-[#e0eeee] hidden md:flex text-black h-[4rem]'>Let's Connect!</Button>
                </div>
            </div>
            <div className='w-full'>
                <div className='contact_animation flex flex-row items-center text-[#e0eeee]'>
                    <div className='w-full h-[1px] bg-[#e0eeee]'></div>
                    <MdArrowForwardIos fill='#e0eeee' className='ml-[-11px]' />
                </div>
            </div>
            <div className='py-[2rem] text-white font-[DM] flex  flex-col md:flex-row justify-between gap-[2.5rem] md:gap-0'>
                <div className='contact_animation text-left flex flex-col md:flex-row gap-10'>
                    <div>
                        <span>Email</span>
                        <h4 className='text-[1.5rem]'>hello@trionn.com</h4>
                    </div>
                    <div>
                        <span>Call</span>
                        <h4 className='text-[1.5rem]'>+91 98241 82099</h4>
                    </div>
                </div>
                <div className='contact_animation text-left md:text-right'>
                    <div>
                        <span>Skype</span>
                        <h4 className='text-[1.5rem]'>talk.trionn</h4>
                    </div>
                </div>
            </div>
            <div className='w-full '>
                <div className='contact_animation flex flex-row items-center text-[#e0eeee]'>
                    <div className='w-full h-[1px] bg-[#e0eeee]'></div>
                    <MdArrowForwardIos fill='#e0eeee' className='ml-[-11px]' />
                </div>
            </div>
        </div>
    )
}

export default CallToAction
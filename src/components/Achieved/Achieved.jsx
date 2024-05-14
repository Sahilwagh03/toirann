import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useState } from 'react'

const Achieved = () => {


    const handleMouseEnter = (dets) => {
        if (dets == '1') {
            gsap.to('.first_card', {
                background: '#dd3500e6',
                duration: 0.4,
                color: '#000'
            })
        }
        else if (dets == '3') {
            gsap.to('.second_card', {
                background: 'rgba(220,229,229,.9)',
                duration: 0.4,
                color: '#000'
            })
        }
        else if (dets == '2') {
            gsap.to('.third_card', {
                background: 'rgba(176,221,202,.9)',
                duration: 0.4,
                color: '#000'
            })
        }
        else if (dets == '4') {
            gsap.to('.fourth_card', {
                background: 'rgba(244,227,66,.9)',
                duration: 0.4,
                color: '#000'
            })
        }
    }

    const handleMouseLeave = (dets) => {
        if (dets == '1') {
            gsap.to('.first_card', {
                background: '#1f202266',
                duration: 0.4,
                color: '#fff'
            })
        }
        else if (dets == '3') {
            gsap.to('.second_card', {
                background: '#1f202266',
                duration: 0.4,
                color: '#fff'
            })
        }
        else if (dets == '2') {
            gsap.to('.third_card', {
                background: '#1f202266',
                duration: 0.4,
                color: '#fff'
            })
        }
        else if (dets == '4') {
            gsap.to('.fourth_card', {
                background: '#1f202266',
                duration: 0.4,
                color: '#fff'
            })
        }
    }
    useGSAP(() => {
        gsap.from('.first_card', {
            transform: 'translateX(-20.5rem)',
            rotate: '-20deg',
            duration: 0.8,
            scrollTrigger: {
                trigger: '.achieved_trigger',
                scroller: 'body',
                start: 'top 40%',
                end: 'top 0%',
                scrub: 2
            }
        })
        gsap.from('.second_card', {
            transform: 'translateX(20.5rem)',
            rotate: '20deg',
            duration: 0.8,
            scrollTrigger: {
                trigger: '.first_card',
                scroller: 'body',
                start: 'top 40%',
                end: 'top 0%',
                scrub: 2,
            }
        })
        gsap.from('.third_card', {
            transform: 'translateX(-20.5rem) translateY(-30px)',
            rotate: '-20deg',
            duration: 0.8,
            scrollTrigger: {
                trigger: '.third_card',
                scroller: 'body',
                start: 'top 40%',
                end: 'top 0%',
                scrub: 2,
            }
        })
        gsap.from('.fourth_card', {
            transform: 'translateX(20.5rem) translateY(-30px)',
            rotate: '20deg',
            duration: 0.8,
            scrollTrigger: {
                trigger: '.second_card',
                scroller: 'body',
                start: 'top 80%',
                end: 'top 0%',
                scrub: 2,
            }
        })

    })
    return (
        <div className='px-[1rem] md:px-16 h-auto md:h-[auto] relative z-0 py-[12rem] achieved_trigger overflow-hidden'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-[1.25rem] text-white'>
                <div className='flex flex-col gap-[1.25rem] '>
                    <div onMouseEnter={() => handleMouseEnter('1')} onMouseLeave={() => handleMouseLeave('1')} className='w-full p-[3.5rem] rounded-[1.5rem] text-black md:text-white bg-[#dd3500e6] md:bg-[#1f202266] text-[7rem] first_card'>
                        <div className='font-[DM] text-left'>
                            50
                            <span className='text-[65%] mt-[-5rem] overflow-hidden' style={{ verticalAlign: 'top' }}>+</span>
                        </div>
                        <div className='text-[1.9rem] leading-[1.6rem] text-right'>
                            <div>
                                <span>
                                    awards & <br />
                                    recognition
                                </span>
                            </div>
                        </div>
                    </div>
                    <div onMouseEnter={() => handleMouseEnter('2')} onMouseLeave={() => handleMouseLeave('2')} className='hidden md:block w-full p-[3.5rem] rounded-[1.5rem] bg-[#1f202266] text-[7rem] third_card'>
                        <div className='font-[DM] text-left'>
                            20
                            <span className='text-[65%] mt-[-5rem] overflow-hidden' style={{ verticalAlign: 'top' }}>+</span>
                        </div>
                        <div className='text-[1.9rem] leading-[1.6rem] text-right'>
                            <div>
                                <span>
                                    creative<br />
                                    minds
                                </span>
                            </div>
                        </div>
                    </div>
                    <div onMouseEnter={() => handleMouseEnter('3')} onMouseLeave={() => handleMouseLeave('3')} className='block md:hidden p-[3.5rem] rounded-[1.5rem] text-black md:text-white bg-[rgba(220,229,229,.9)] text-[7rem] second_card'>
                        <div className='font-[DM] text-left'>
                            900
                            <span className='text-[65%] mt-[-5rem] overflow-hidden' style={{ verticalAlign: 'top' }}>+</span>
                        </div>
                        <div className='text-[1.9rem] leading-[1.6rem] text-right'>
                            <div>
                                <span>
                                    project<br />
                                    completed
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-[1.25rem] md:mt-[10rem]'>
                    <div onMouseEnter={() => handleMouseEnter('2')} onMouseLeave={() => handleMouseLeave('2')} className='block md:hidden w-full p-[3.5rem] rounded-[1.5rem] text-black md:text-white bg-[rgba(176,221,202,.9)] text-[7rem] third_card'>
                        <div className='font-[DM] text-left'>
                            20
                            <span className='text-[65%] mt-[-5rem] overflow-hidden' style={{ verticalAlign: 'top' }}>+</span>
                        </div>
                        <div className='text-[1.9rem] leading-[1.6rem] text-right'>
                            <div>
                                <span>
                                    creative<br />
                                    minds
                                </span>
                            </div>
                        </div>
                    </div>
                    <div onMouseEnter={() => handleMouseEnter('3')} onMouseLeave={() => handleMouseLeave('3')} className='hidden md:block p-[3.5rem] rounded-[1.5rem]  bg-[#1f202266] text-[7rem] second_card'>
                        <div className='font-[DM] text-left'>
                            900
                            <span className='text-[65%] mt-[-5rem] overflow-hidden' style={{ verticalAlign: 'top' }}>+</span>
                        </div>
                        <div className='text-[1.9rem] leading-[1.6rem] text-right'>
                            <div>
                                <span>
                                    project<br />
                                    completed
                                </span>
                            </div>
                        </div>
                    </div>
                    <div onMouseEnter={() => handleMouseEnter('4')} onMouseLeave={() => handleMouseLeave('4')} className='p-[3.5rem] rounded-[1.5rem] bg-[rgba(244,227,66,.9)] text-black md:text-white md:bg-[#1f202266] text-[7rem] fourth_card'>
                        <div className='font-[DM] text-left'>
                            20
                            <span className='text-[65%] mt-[-5rem] overflow-hidden' style={{ verticalAlign: 'top' }}>+</span>
                        </div>
                        <div className='text-[1.9rem] leading-[1.6rem] text-right'>
                            <div>
                                <span>
                                    years of<br />
                                    experience
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Achieved
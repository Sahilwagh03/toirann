import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { MdArrowForwardIos } from "react-icons/md";
const Social = () => {
    useGSAP(() => {
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


    const socials = [
        {
            img: 'https://trionn.com/assets/images/socials/dribble.svg',
            name: 'Dribble',
        },
        {
            img: 'https://trionn.com/assets/images/socials/linkedin.svg',
            name: 'Linkedin',
        },
        {
            img: 'https://trionn.com/assets/images/socials/instagram.svg',
            name: 'Instagram',
        },
        {
            img: 'https://trionn.com/assets/images/socials/behance.svg',
            name: 'Behance',
        },
        {
            img: 'https://trionn.com/assets/images/socials/facebook.svg',
            name: 'Facebook',
        },
    ]
    return (
        <div className='px-[1rem] md:px-16 relative h-auto relative z-0 pb-[8rem] join_trigger mb-[-11rem] md:mb-[0]'>
            <div className='pb-[4rem]'>
                <div className='flex flex-col text-center'>
                    <h3 className='join_h3 mb-[-9rem] md:mb-[-1.8rem] text-[5rem] md:text-[15rem] pt-5 pr-2 font-normal -tracking-[4px] md:-tracking-[6px] leading-[12rem] text-transparent bg-[linear-gradient(90deg,_#e0eeee_50%,_#252525_50%)] bg-clip-text bg-[length:200%_100%]'>join our</h3>
                    <h3 className='jungle_h3 mb-[-9rem] text-[5rem] md:text-[15rem] pt-5 font-normal -tracking-[4px] md:-tracking-[6px] leading-[12rem]  text-transparent bg-[linear-gradient(90deg,_#e0eeee_50%,_#252525_50%)] bg-clip-text bg-[length:200%_100%] md:mb-[-2rem]'>jungle</h3>
                    <h3 className='trek_h3 text-[5rem] md:text-[15rem] pt-5 font-normal -tracking-[4px] md:-tracking-[6px] leading-[12rem]  text-transparent bg-[linear-gradient(90deg,_#e0eeee_50%,_#252525_50%)] bg-clip-text bg-[length:200%_100%]'>trek</h3>
                </div>
            </div>
            <div>
                {
                    socials.map(({name,img},idx) => (
                        <div className='flex flex-wrap m-auto pt-[2rem] max-w-[36rem]' key={idx}>
                            <div className='flex flex-row justify-between items-center w-full'>
                                <h2 className='font-[Syc] text-[2.5rem] leading-[3rem] font-normal text-white'>{name}</h2>
                                <img src={img} alt="dribble" className='w-[3rem] h-auto' />
                            </div>
                            <div className='w-full'>
                                <div className='mt-[2rem] flex flex-row items-center text-[#e0eeee]'>
                                    <div className='w-full h-[1px] bg-[#e0eeee]'></div>
                                    <MdArrowForwardIos fill='#e0eeee' className='ml-[-11px]'/>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Social
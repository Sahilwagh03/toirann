import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import Button from '../Hero/components/Button'

const DribbleSection = () => {

    useGSAP(() => {
        gsap.to('.dribble_1', {
            transform: 'translateX(-35.5rem)',
            rotate: '-40deg',
            duration: 0.8,
            scrollTrigger: {
                trigger: '.dribble_trigger',
                scroller: 'body',
                start: 'top 50%',
                end: 'bottom 100%',
                endTrigger: '.dribble_trigger',
                scrub: 2
            }
        })
        gsap.to('.dribble_2', {
            transform: 'translateX(35.5rem)',
            rotate: '40deg',
            duration: 0.8,
            scrollTrigger: {
                trigger: '.dribble_trigger',
                scroller: 'body',
                start: 'top 50%',
                end: 'bottom 100%',
                endTrigger: '.dribble_trigger',
                scrub: 2,
            }
        })
        gsap.to('.dribble_3', {
            transform: 'translateX(-30.5rem) translateY(-250px)',
            rotate: '-20deg',
            duration: 0.8,
            scrollTrigger: {
                trigger: '.dribble_2',
                scroller: 'body',
                start: 'top 60%',
                end: 'bottom 90%',
                endTrigger: '.dribble_trigger',
                scrub: 2
            }
        })
        gsap.to('.dribble_4', {
            transform: 'translateX(30.5rem) translateY(-250px)',
            rotate: '20deg',
            duration: 0.8,
            scrollTrigger: {
                trigger: '.dribble_2',
                scroller: 'body',
                start: 'top 60%',
                end: 'bottom 90%',
                endTrigger: '.dribble_trigger',
                scrub: 2
            }
        })
        gsap.to('.dribble_5', {
            transform: 'translateX(-15.5rem) translateY(-350px)',
            rotate: '-30deg',
            duration: 0.8,
            scrollTrigger: {
                trigger: '.dribble_4',
                scroller: 'body',
                start: 'top 80%',
                end: 'bottom 90%',
                endTrigger: '.dribble_trigger',
                scrub: 2,
            }
        })
        gsap.to('.dribble_6', {
            transform: 'translateX(15.5rem) translateY(-350px)',
            rotate: '30deg',
            duration: 0.8,
            scrollTrigger: {
                trigger: '.dribble_4',
                scroller: 'body',
                start: 'top 80%',
                end: 'bottom 90%',
                endTrigger: '.dribble_trigger',
                scrub: 2
            }
        })
        gsap.from('.img_animation', {
            transform: 'translateY(200%)',
            scrollTrigger: {
                trigger: '.dribble_trigger',
                scroller: 'body',
                start: 'top 30%',
                end: 'bottom 80%',
                endTrigger: '.dribble_1',
                scrub: 2
            }
        })
        gsap.from('.dribble_para span', {
            y: 100,
            duration: 0.5,
            stagger: 0.15,
            delay: 0.5,
            scrollTrigger: {
                trigger: '.dribble_trigger',
                scroller: 'body',
                start: 'top 20%',
                end: 'bottom 60%',
                endTrigger: '.dribble_1',
                scrub: 2,
            }
        })
        gsap.from('.button_animation', {
            y: 100,
            duration: 0.5,
            stagger: 0.15,
            opacity:0,
            delay: 0.5,
            scrollTrigger: {
                trigger: '.dribble_trigger',
                scroller: 'body',
                start: 'top 10%',
                end: 'bottom 40%',
                endTrigger: '.dribble_1',
                scrub: 2,
            }
        })
    })
    return (
        <div className='h-full px-[1rem] md:px-16 relative z-0 dribble_trigger'>
            <div className='absolute text-white text-[6rem] transform -translate-x-1/2 transform -translate-y-1/2 left-[50%] top-[40%] pb-[4rem] min-h-[300px] w-full md:w-auto md:min-h-[auto]'>
                <div className='flex flex-col items-center justify-center gap-5 hidden_animation_start '>
                    <div className='img_animation w-[150px] h-auto md:w-[200px] md:h-[60px]'>
                        <img src="https://trionn.com/_next/static/media/dribbble.1a51ca99.webp" alt="" width={200} height={60} />
                    </div>
                    <div>
                        <h4 className='text-white flex flex-col font-[Syc] text-[1.3rem] md:text-[1.5rem] overflow-hidden font-normal dribble_para'>
                            <span className='inline-block'>Like a lion's roar echoing through</span>
                            <span className='inline-block'>the jungle, a hint of our creative</span>
                            <span className='inline-block'>minds emerges.</span>
                        </h4>
                    </div>
                    <div className='button_animation h-fit flex'>
                        <Button className='w-fit h-fit text-[1rem] md:text-[1.5rem]'>View project</Button>
                    </div>
                </div>
            </div>
            <div className='grid grid-col-1 gap-[1rem] md:grid-cols-2 md:gap-[2.5rem]'>
                <div className='w-full h-full dribble_1'>
                    <img className='rounded-[1.5rem]' src="https://trionn.com/assets/images/dribbble/dribbble1.webp" alt="" width='600' height='420' />
                </div>
                <div className='w-full h-full dribble_2'>
                    <img className='rounded-[1.5rem]' src="https://trionn.com/assets/images/dribbble/dribbble2.webp" alt="" width='600' height='420' />
                </div>
                <div className='w-full h-full dribble_3'>
                    <img className='rounded-[1.5rem]' src="https://trionn.com/assets/images/dribbble/dribbble3.webp" alt="" width='600' height='420' />
                </div>
                <div className='w-full h-full dribble_4'>
                    <img className='rounded-[1.5rem]' src="https://trionn.com/assets/images/dribbble/dribbble4.webp" alt="" width='600' height='420' />
                </div>
                <div className='w-full h-full dribble_5 transform -translate-y-[250px] transform -translate=x-[200px]'>
                    <img className='rounded-[1.5rem]' src="https://trionn.com/assets/images/dribbble/dribbble5.webp" alt="" width='600' height='420' />
                </div>
                <div className='w-full h-full dribble_6 transform -translate-y-[250px] transform -translate=x-[200px]'>
                    <img className='rounded-[1.5rem]' src="https://trionn.com/assets/images/dribbble/dribbble6.webp" alt="" width='600' height='420' />
                </div>
            </div>
        </div>
    )
}

export default DribbleSection
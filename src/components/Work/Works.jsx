import { useGSAP } from '@gsap/react'
import React from 'react'
import Button from '../Hero/components/Button'
import gsap from 'gsap'

const Works = () => {

    const workData = [
        {
            className: 'first_img',
            translateX: '20.5rem',
            img: 'https://trionn.com/assets/images/works/loftloom/loftloom-main-landscape.webp',
            reverse: false,
            title: 'loftloom',
            description: 'UI Design, UX, Wireframe',
            trigger: 'sec',
            p: 'p1'
        },
        {
            className: 'sec_img',
            translateX: '-20.5rem',
            img: 'https://trionn.com/assets/images/works/imusic/imusic-main-landscape.webp',
            reverse: true,
            title: 'imusic',
            description: 'Research, UX, UI Design',
            trigger: 'third',
            p: 'p2'
        },
        {
            className: 'third_img',
            translateX: '20.5rem',
            img: 'https://trionn.com/assets/images/works/technis/technis-main-landscape.webp',
            reverse: false,
            title: 'technis',
            description: 'UX, UI Design, Development',
            p: 'p3'
        },
    ]

    useGSAP(() => {

        const t1 = gsap.timeline()

        t1.from('.h3_first', {
            backgroundPositionX: '100%',
            x: '-20%',
            duration: 1,
            scrollTrigger: {
                trigger: '.h3_Trigger',
                start: 'top 80%',
                scroller: 'body',
                end: 'bottom 100%',
                endTrigger: '.text_animation_div',
                scrub: 5,
            }
        })
        t1.from('.h3_sec', {
            backgroundPositionX: '100%',
            x: '50%',
            duration: 1,
            scrollTrigger: {
                trigger: '.h3_first',
                start: 'top 80%',
                scroller: 'body',
                end: 'bottom 100%',
                endTrigger: '.text_animation_div',
                scrub: 5,
            }
        })
        gsap.from(['h4 div', '.paragraph'], {
            y: 40,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            scrollTrigger: {
                trigger: '.paragraph',
                scroller: 'body',
                start: 'top 80%',
                end: 'bottom 30%',
                scrub: 2
            }
        })
        gsap.from('.first_img', {
            transform: 'translateX(20.5rem)',
            rotate: '10deg',
            duration: 0.8,
            scrollTrigger: {
                trigger: '.paragraph',
                scroller: 'body',
                start: '',
                end: '',
                scrub: 2
            }
        })
        gsap.from('.sec_img', {
            transform: 'translateX(-20.5rem) translateY(-150px)',
            rotate: '-10deg',
            duration: 0.8,
            scrollTrigger: {
                trigger: '.sec',
                scroller: 'body',
                start: 'top 50%',
                end: 'bottom 10%',
                scrub: 2
            }
        })
        gsap.from('.third_img', {
            transform: 'translateX(20.5rem) translateY(-150px)',
            rotate: '10deg',
            duration: 0.8,
            scrollTrigger: {
                trigger: '.third',
                scroller: 'body',
                start: 'top 10%',
                end: '',
                scrub: 2
            }
        })
        gsap.from('.p1', {
            transform: 'translateY(150px)',
            duration: 0.5,            
            scrollTrigger: {
                trigger: '.sec',
                scroller: 'body',
                start: 'top 50%',
                end: 'bottom 10%',
                scrub: 2
            }
        })
        gsap.from('.p2', {
            transform: 'translateY(150px)',
            duration: 0.5,            
            scrollTrigger: {
                trigger: '.third',
                scroller: 'body',
                start: 'top 10%',
                end: '',
                scrub: 2
            }
        })
        gsap.from('.p3', {
            transform: 'translateY(150px)',
            duration: 1,            
            scrollTrigger: {
                trigger: '.third_img',
                scroller: 'body',
                start: 'top 50%',
                end: 'bottom 10%',
                scrub: 2
            }
        })
    })
    return (
        <section>
            <div className=' overflow-hidden px-[1rem] md:px-16 relative h-[100vh] flex justify-left main_section relative z-0 py-[12rem] h3_Trigger'>
                <div className='flex flex-col text-left'>
                    <h3 className='mb-[-1.8rem] h3_first text-[6rem] md:text-[11rem] pt-5 pr-2 font-normal -tracking-[6px] leading-[8.4rem] text-transparent bg-[linear-gradient(90deg,_#e0eeee_50%,_#252525_50%)] bg-clip-text bg-[length:200%_100%]'>recent</h3>
                    <h3 className='h3_sec text-[6rem] md:text-[11rem] pt-5 font-normal -tracking-[6px] leading-[8.4rem]  text-transparent bg-[linear-gradient(90deg,_#e0eeee_50%,_#252525_50%)] bg-clip-text bg-[length:200%_100%] mb-[2.5rem]'>work</h3>
                    <h4 className='text-white font-[Syc] text-[1.5rem] font-normal'>
                        <div className='block overflow-hidden'>In the creative wilderness,</div>
                        <div className='block overflow-hidden'>clients find our work truly</div>
                        <div className='text_animation_div block overflow-hidden'>beloved.</div>
                    </h4>
                    <div className='paragraph absolute right-[4%] bottom-[4%]'>
                        <Button>Explore work</Button>
                    </div>
                </div>
            </div>
            <div className='px-[1rem] md:px-16 lion_end h-[auto] relative z-0 py-[6rem] overflow-x-hidden'>
                {
                    workData.map((work, index) => (
                        <div className={`min-h-[450px] flex ${work.reverse ? 'flex-row-reverse' : 'flex-row'} text-[#c5fcfc] pb-3 ${work.trigger}`}>
                            <div className={`w-[40%] flex items-center ${work.reverse && 'justify-end'}`}>
                                <div className={`flex flex-col ${work.reverse ? 'justify-end' : 'justify-start'} ${work.p}`}>
                                    <h2 className={`text-[4rem] ${work.reverse ? ' text-right' : 'text-left'} leading-[1]`}>
                                        {work.title}
                                    </h2>
                                    <p className={`font-[Syc] ${work.reverse ? 'text-right' : 'text-left'} mb-10 text-[1.009rem] leading-[2.5rem]`}>
                                        {work.description}
                                    </p>
                                    <div className={`${work.reverse ? 'w-full justify-end' : 'w-[200px]'} flex`}>
                                        <Button>View project</Button>
                                    </div>
                                </div>
                            </div>
                            <div className='w-[60%] img_rotate_translateX'>
                                <img src={work.img} alt="" className={`${index != 0 && ''} rounded-[1.5rem] w-full overflow-clip overflow-content-box ${work.className}`} />
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Works
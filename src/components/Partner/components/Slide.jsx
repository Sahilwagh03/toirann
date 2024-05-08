import React from 'react'
import Button from '../../Hero/components/Button'

const Slide = () => {
    return (
        <div>
            <div className='flex flex-row gap-4 justify-center px-[1rem] md:p-0'>
                <div className='py-8 w-fit border-2 rounded-2xl flex flex-col justify-center items-center gap-4 hover:bg-[rgba(31,32,34,.4)] hover:border-0'>
                    <img src='/Member_1.jpg' alt='' className='w-[30%] h-[auto] rounded-full' />
                    <div className='font-[Syc] text-[1.25rem] text-white leading-[1.65rem] flex flex-col gap-6'>
                        <div className='flex flex-col gap-1'>
                            <span>Sahil Wagh</span>
                            <span>Frontend Developer</span>
                        </div>
                        <div>
                            <Button>Visit Portfolio</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slide
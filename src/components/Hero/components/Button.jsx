import React from 'react'

const Button = ({children}) => {
    return (
        <button className='px-[2rem] py-[1rem] text-center border-[#c5fcfc] border-2 rounded-full'>
            {children}
        </button>
    )
}

export default Button
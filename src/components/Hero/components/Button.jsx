import React from 'react'

const Button = ({children,className=""}) => {
    return (
        <button className={`px-[2rem] py-[1rem] font-[Syc] text-center text-[#c5fcfc] border-[#c5fcfc] border-2 rounded-full ${className}`}>
            {children}
        </button>
    )
}

export default Button
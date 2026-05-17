import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className=' bg-black '>
                
                <div className='flex space-x-10 text-white p-4 items-center justify-center text-3xl'>
                    <img className='h-[80px] w-[80px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5au1fs7_VyO1tJASE0xzRR8x_L5cWvRtIRg&s" alt="" />
                    <p>Home</p>
                    <p>About</p>
                    <p>Contact</p>
                </div>
            </div>

        </>
    )
}

export default Navbar
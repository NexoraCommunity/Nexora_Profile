import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='nav fixed flex justify-center w-full py-6'>
            <div className='w-11/12  top-0  text-white flex justify-between items-center text-3xl mx-auto'>
                <div className='flex gap-3 items-center'>
                    <button className='p-2 px-6 bg-white/10 rounded-3xl'>HOME</button>
                    <button className='p-2 px-6 bg-white/10 rounded-3xl'>TENTANG KAMI</button>
                </div>
                <h1>NEXORA<span className='text-[#56DFCF]'>.</span></h1>
                <div className='flex gap-3 items-center'>
                    <button className='p-2 px-6 bg-white/10 rounded-3xl'>FAQ</button>
                    <button className='p-2 px-6 bg-white/10 rounded-3xl'>GALLERY</button>
                    <button className='ml-28 relative'><Image src={"/hamburger.png"} alt='oke' width={50} height={50} /></button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
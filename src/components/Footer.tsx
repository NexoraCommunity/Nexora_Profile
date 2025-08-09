import Link from 'next/link'
import React from 'react'
import { FaArrowAltCircleUp } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='grid mt-40 md:px-20 px-5 relative'>
            <hr className=' bg-white absolute top-0 w-full left-0' />
            <div className="text-white mt-20">
                <h1 className="md:py-20 text-xl sm:text-5xl text-center sm:text-left">GUNAKAN BINGKAI NEXORA</h1>
            </div>

            <div className="flex max-sm:flex-col justify-around items-center max-sm:py-4 py-20">
                <h1 className="text-xl md:text-4xl">UNDUH BINGKAI</h1>
                <div className="md:w-96 md:h-96 w-64 h-64 sm:w-60 sm:h-60 bg-white"></div>
            </div>

            <section id='kontak-kami' className='py-20 relative'>
                <h1 className='md:text-7x sm:text-4xl text-2xl'>KONTAK KAMI &gt; &gt; </h1>
                <div className='flex justify-between items-center max-sm:flex-col'>
                    <div className='flex flex-col gap-10 mt-10'>
                        <div className='flex text-xl justify-between sm:text-3xl'>
                            <div>
                                <h1>Email</h1>
                                <h1>Instagram</h1>
                            </div>
                            <div className='mx-2'>
                                <h1>:</h1>
                                <h1>:</h1>
                            </div>
                            <div>
                                <h1>nexoraoraora@gmail.com</h1>
                                <h1>@Nexora</h1>
                            </div>
                        </div>
                        <p className='text-2xl sm:text-5xl'>SUKOHARJO, ITBAAS, <br /> JL SLAMET RIYADI</p>
                    </div>
                    <div className='absolute right-1 top-2/3 sm:text-7xl text-4xl max-sm:mt-5'>
                        <Link href={"#home"}><FaArrowAltCircleUp /></Link>
                    </div>
                </div>
            </section>
            <h1 className='text-center text-xl'>hak Cipta © 2025 NEXORA</h1>
        </div>
    )
}

export default Footer
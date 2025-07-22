import React from 'react'
import Image from 'next/image'

const Portfolio = () => {
    return (
        <section className='bg-black  pt-40' id='portfolio'>
            <div className='flex justify-center px-20 mx-auto gap-3'>
                <div className='flex items-start relative -top-10'>
                    <Image src={"/Star 2.png"} alt='star 2' className='object-contain' width={180} height={180} />
                </div>
                <h1 className='text-8xl text-center'>PROJECT <br />KAMI</h1>
                <div className='flex items-end relative -bottom-10'>
                    <Image src={"/Star 3.png"} alt='star 3' className='object-contain' width={120} height={120} />
                </div>
            </div>
            <div className='px-20 pt-40'>
                <div>
                    <h1 className='text-5xl my-5'>HIGHLIGHT 2024//</h1>
                    <iframe className='w-full h-[36rem]' src="https://www.youtube.com/embed/O8ivm7403rk?si=L4PYZiGnxg9UCJRM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <div className='flex gap-10 mt-20'>
                    <iframe className='w-1/2 h-96' src="https://www.youtube.com/embed/O8ivm7403rk?si=L4PYZiGnxg9UCJRM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h1 className='text-5xl my-5'>HIGHLIGHT 2025//</h1>
                </div>
                <div className='flex gap-10 mt-20 justify-end'>
                    <h1 className='text-5xl my-5'>HIGHLIGHT 2026//</h1>
                    <iframe className='w-1/2 h-96' src="https://www.youtube.com/embed/O8ivm7403rk?si=L4PYZiGnxg9UCJRM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </div>
            <div className='border-t-8 border-white mt-40'>
                <h1 className='text-center text-7xl my-14'>MORE PROJECT?</h1>
                <div className='text-4xl'>
                    <div className='border border-white px-20 py-10'>
                        <h1>WEBSITE PERUMAHAAN</h1>
                    </div>
                    <div className='border border-white px-20 py-10'>
                        <h1>WEBSITE PERUMAHAAN</h1>
                    </div>
                    <div className='border border-white px-20 py-10'>
                        <h1>WEBSITE PERUMAHAAN</h1>
                    </div>
                    <div className='border border-white px-20 py-10'>
                        <h1>WEBSITE PERUMAHAAN</h1>
                    </div>
                    <div className='border border-white px-20 py-10'>
                        <h1>WEBSITE PERUMAHAAN</h1>
                    </div>
                    <div className='border border-white px-20 py-10'>
                        <h1>WEBSITE PERUMAHAAN</h1>
                    </div>
                    <div className='border border-white px-20 py-10'>
                        <h1>WEBSITE PERUMAHAAN</h1>
                    </div>
                    <div className='border border-white px-20 py-10'>
                        <h1>WEBSITE PERUMAHAAN</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio
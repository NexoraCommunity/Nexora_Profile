import React from 'react'
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa";
const Gallery = () => {
  return (
    <div className='bg-black'>
        {/* Gallery 1 */}
        <div className="text-white px-20 p-16">
            <div className='grid grid-cols-2 place-items-center gap-12'>
                <div className='relative w-96 h-72'>
                    <Image src={"/sourceImg/g1.jpg"} alt='g1' fill className='object-contain'  />
                </div>

                <div className='relative w-96 h-72'>
                    <Image src={"/sourceImg/g1.jpg"} alt='g1' fill className='object-contain'  />
                </div>
            </div>

            <div className='text-4xl flex justify-center items-center'>
                <h1 className='mx-24'>CODING FEST 2025</h1>
                <FaArrowRight className='text-3xl'/>
            </div>

            <div className='grid grid-cols-2 place-items-center gap-12'>
                <div className='relative w-96 h-72 translate-y-4'>
                    <Image src={"/sourceImg/g1.jpg"} alt='g1' fill className='object-contain'  />
                </div>

                <div className='relative w-96 h-72 -translate-y-4'>
                    <Image src={"/sourceImg/g1.jpg"} alt='g1' fill className='object-contain'  />
                </div>
            </div>
        </div>
        {/* Gallery 2 */}
        <div>
            <div className='flex text-center'>
                <div className='w-full p-4 text-black text-2xl bg-white'>NEXORA MEMORIES</div>
                <div className='w-full p-4 text-black text-2xl bg-[#56DFCF]'>NEXORA MEMORIES</div>
                <div className='w-full p-4 text-black text-2xl bg-white'>NEXORA MEMORIES</div>
            </div>
            <div className='text-white px-20'>

                <div className='rounded-2xl flex pt-16'>
                    <Image src={"/sourceImg/g2.jpg"} alt='g2' width={600} height={250} className='rounded-[50px]'/>
                    <h1 className='text-4xl mx-12'>LIBURAN KE <br/> TAWANGMANGU</h1>
                </div>

                <div className='rounded-2xl flex justify-between py-10'>
                    <h1 className='text-4xl'>LIBURAN KE <br/> TAWANGMANGU</h1>
                    <Image src={"/sourceImg/g2.jpg"} alt='g2' width={600} height={250} className='rounded-[50px]'/>
                </div>
            </div>
            <div className=''>
                <Image src={"/sourceImg/g3.jpg"} alt='g3' width={600} height={250}/>
            </div>
        </div>
    </div>
  )
}

export default Gallery
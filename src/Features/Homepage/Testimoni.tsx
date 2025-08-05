import Image from 'next/image';
import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";

const Testimoni = () => {
    return (
        <div className='md:p-20 p-5 mb-40 '>
            <div className='xl:text-7xl text-5xl flex gap-4'>
                <h1>
                    TESTIMONY
                </h1>
                <MdOutlineArrowOutward className='rotate-90 relative' />
            </div>
            <div className='grid lg:grid-cols-2  mt-10 gap-4'>
                <div className='h-screen  border border-white md:p-14 p-5 max-md:pb-10'>
                    <div className='flex flex-col gap-4 h-2/3'>
                        <div className='border border-white h-1/2  rounded-md'>

                        </div>
                        <div className='border border-white h-1/2  rounded-md'>

                        </div>
                    </div>
                    <div className='h-1/3 mt-4 flex flex-col gap-4 text-black'>
                        <textarea name="" id="" className='h-2/3 resize-none bg-white border border-white p-3' placeholder='tulis disini!!'></textarea>
                        <button className='w-full border h-1/3 bg-white  text-3xl'>submit</button>
                    </div>
                </div>
                <div className='lg:h-screen h-full flex flex-col gap-4'>
                    <div className='border border-white h-2/3 flex justify-center items-center'>
                        <Image src={"/logos.png"} width={400} height={400} alt='nexora-logos' />
                    </div>
                    <div className='flex gap-4 h-1/3 text-4xl'>
                        <div className='border w-1/2 border-white flex justify-center items-center'>
                            <h1 className='text-center'>20 <br /> Client</h1>
                        </div>
                        <div className='border w-1/2  border-white flex justify-center items-center'>
                            <h1 className='text-center'>100+ <br /> Active Member</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimoni
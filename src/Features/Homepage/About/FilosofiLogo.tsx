"use client"
import Image from 'next/image'
import { GoArrowUpRight } from "react-icons/go"
import React, { useState } from 'react'

const FilosofiLogo = () => {
    return (
        <>
            <div className='py-32'>
                <div className='flex max-sm:flex-col-reverse gap-10  lg:px-20 md:px-10 px-5'>
                    <div className='flex-grow relative h-72'>
                        <Image src={"/filosofilogo.png"} alt='img' className='object-cover' fill />
                    </div>
                    <ul className='xl:text-4xl md:text-2xl max-sm:text-4xl text-center text-white flex flex-col gap-8'>
                        <li>FILOSOFI LOGO NEXORA</li>
                        <li className='text-[#00FFAD]'>FILOSOFI LOGO NEXORA</li>
                        <li>FILOSOFI LOGO NEXORA</li>
                    </ul>
                </div>
                <div className='flex max-sm:flex-col py-20 gap-8 relative'>
                    <div className='h-full absolute -z-0 w-full top-2/3'>
                        <div className='w-full h-full bg-black/80 absolute z-10'></div>
                        <Image src={"/hero.avif"} fill alt='bg' className='object-cover' />
                    </div>
                    <div className='xl:text-6xl lg:text-4xl md:text-2xl sm:w-1/2 lg:px-20 md:px-10 px-5 relative z-0 text-white gap-8'>
                        <h1>NEXORA FOR FUTURE <br /> <span className='text-[#00FFAD]'>GENERATION</span></h1>
                        <div className='flex justify-end border-b-4 border-white w-full'>
                            <GoArrowUpRight />
                        </div>
                        <p className='xl:text-4xl md:text-xl text-base text-justify mt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, nobis nostrum vitae dolorem praesentium placeat totam quia incidunt inventore consequatur! Deserunt vitae eveniet aliquam? Iusto dignissimos ullam ea quaerat natus.</p>
                    </div>
                    <div className='flex-grow sm:w-1/2 px-20 relative xl:h-[486px] h-96 sm:mr-8 max-sm:mx-5 rounded'>
                        <Image src={"/nexoraff.png"} alt='img' className='object-cover' fill />
                    </div>
                </div>
                <div className=' lg:px-20 md:px-10 px-5 grid-cols-3 grid gap-10 relative z-30 '>
                    <div className='bg-[#00FFAD] h-[36rem] w-full'></div>
                    <div className='bg-[#00FFAD] h-[36rem] w-full'></div>
                    <div className='bg-[#00FFAD] h-[36rem] w-full'></div>
                </div>
            </div>
            <div className='px-20 py-20'>
                <iframe className='w-full h-screen' src="https://www.youtube.com/embed/O8ivm7403rk?si=L4PYZiGnxg9UCJRM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <p className='text-white text-center py-10'>NEXORA - 2025 - COPYRIGHT ON</p>
            </div>
            <div className='h-60 bg-white w-full pt-20'>

            </div>
        </>
    )
}

export default FilosofiLogo
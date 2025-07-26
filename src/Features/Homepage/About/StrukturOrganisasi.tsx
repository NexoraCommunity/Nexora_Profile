"use client"
import Image from 'next/image'
import { GoArrowUpRight } from "react-icons/go"
import React, { useState } from 'react'

const StrukturOrganisasi = () => {
    return (
        <section className='w-full  border-white px-20 pt-40'>
            <div className='flex justify-center mx-auto gap-3'>
                <div className='flex items-start relative -top-10'>
                    <Image src={"/Star 2.png"} alt='star 2' className='object-contain' width={180} height={180} />
                </div>
                <h1 className='text-8xl text-center'>STRUKTUR <br />ORGANISASI</h1>
                <div className='flex items-end relative -bottom-10'>
                    <Image src={"/Star 3.png"} alt='star 3' className='object-contain' width={120} height={120} />
                </div>
            </div>

            <div className='flex px-20 justify-between mt-20 items-end'>
                <div className='flex gap-5 text-[#00FFAD]'>
                    <div className='h-[28rem] w-10 bg-[#00FFAD]'> </div>
                    <div>
                        <h1>KETUA</h1>
                        <GoArrowUpRight />
                    </div>
                </div>
                <div className='flex gap-5 text-white'>
                    <div className='h-[24rem] w-10 bg-white'> </div>
                    <div>
                        <h1>WAKIL KETUA</h1>
                        <GoArrowUpRight />
                    </div>
                </div>
                <div className='flex gap-5 text-white'>
                    <div className='h-[20rem] w-10 bg-white'> </div>
                    <div>
                        <h1>SEKERTARIS</h1>
                        <GoArrowUpRight />
                    </div>
                </div>
                <div className='flex gap-5 text-white'>
                    <div className='h-[16rem] w-10 bg-white'> </div>
                    <div>
                        <h1>BENDAHARA</h1>
                        <GoArrowUpRight />
                    </div>
                </div>
                <div className='flex gap-5 text-white'>
                    <div className='h-[12rem] w-10 bg-white'> </div>
                    <div>
                        <h1>HUMAS</h1>
                        <GoArrowUpRight />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StrukturOrganisasi
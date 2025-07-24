import Image from 'next/image'
import { GoArrowUpRight } from "react-icons/go"
import React from 'react'

const About = () => {
    return (
        <section className=' bg-black'>
            <div className='w-full px-20 grid grid-cols-2 pt-40  text-white'>
                <div className=' flex flex-col  gap-10 '>
                    <div className='w-6/12  rotate-3 scale-110'>
                        <div className='w-full text-3xl h-20 flex justify-center items-center rounded-xl bg-[#00FFAD]'>Tentang Kami</div>
                        <div className="-rotate-6 -translate-y-2 w-0 h-0 float-right mr-10 border-l-[50px] border-r-[0px] border-t-[65px] border-l-transparent border-r-transparent border-t-[#00FFAD]"></div>
                    </div>
                    <div className='w-full flex justify-end'>
                        <div className='w-5/12 opacity-50'>
                            <div className='w-full text-3xl h-20 flex justify-center items-center rounded-xl bg-[#00FFAD]'>Berdirinya Nexora</div>
                            <div className="rotate-6 -translate-y-2 w-0 h-0 float-left ml-10 border-l-[0px] border-r-[50px] border-t-[65px] border-l-transparent border-r-transparent border-t-[#00FFAD]"></div>
                        </div>
                    </div>
                    <div className='w-5/12  rotate-3 opacity-50'>
                        <div className='w-full text-3xl h-20 flex justify-center items-center rounded-xl bg-[#00FFAD]'>Visi dan Misi</div>
                        <div className="-rotate-6 -translate-y-2 w-0 h-0 float-right mr-10 border-l-[50px] border-r-[0px] border-t-[65px] border-l-transparent border-r-transparent border-t-[#00FFAD]"></div>
                    </div>
                </div>
                <div className='text-3xl p-10'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur rerum sed suscipit vel doloremque debitis placeat eligendi quos ab consequuntur.</div>
            </div>
            <div className='py-32'>
                <div className='flex gap-10 px-20'>
                    <div className='flex-grow relative h-72'>
                        <Image src={"/filosofilogo.png"} alt='img' className='object-cover' fill />
                    </div>
                    <ul className='text-4xl text-white flex flex-col gap-8'>
                        <li>FILOSOFI LOGO NEXORA</li>
                        <li className='text-[#00FFAD]'>FILOSOFI LOGO NEXORA</li>
                        <li>FILOSOFI LOGO NEXORA</li>
                    </ul>
                </div>
                <div className='flex py-20 gap-8 relative'>
                    <div className='h-full absolute -z-0 w-full top-2/3'>
                        <div className='w-full h-full bg-black/80 absolute z-10'></div>
                        <Image src={"/hero.avif"} fill alt='bg' className='object-cover' />
                    </div>
                    <div className='text-6xl w-1/2 px-20 relative z-0 text-white gap-8'>
                        <h1>NEXORA FOR FUTURE <br /> <span className='text-[#00FFAD]'>GENERATION</span></h1>
                        <div className='flex justify-end border-b-4 border-white w-full'>
                            <GoArrowUpRight />
                        </div>
                        <p className='text-4xl text-justify mt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, nobis nostrum vitae dolorem praesentium placeat totam quia incidunt inventore consequatur! Deserunt vitae eveniet aliquam? Iusto dignissimos ullam ea quaerat natus.</p>
                    </div>
                    <div className='flex-grow w-1/2 px-20 relative h-[486px] mr-8 rounded'>
                        <Image src={"/nexoraff.png"} alt='img' className='object-cover' fill />
                    </div>
                </div>
                <div className='px-20 grid-cols-3 grid gap-10 relative z-30 '>
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
            <div className='w-full  border-white px-20 pt-40'>
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
            </div>
        </section>
    )
}

export default About
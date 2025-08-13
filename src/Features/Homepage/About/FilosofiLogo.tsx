"use client"
import Image from 'next/image'
import { GoArrowUpRight } from "react-icons/go"
import { motion } from "motion/react"


const containerVariant = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.4,
        },
    },
}
const FilosofiLogo = () => {
    return (
        <>
            <div className='pb-32'>
                <div className='flex max-sm:flex-col-reverse gap-10  lg:px-20 md:px-10 px-5'>
                    <div className='flex-grow relative h-60'>
                        <Image src={"/filosofilogo.png"} alt='img' className='object-cover' fill />
                    </div>
                    <ul className='xl:text-5xl md:text-2xl  max-sm:text-3xl text-center text-white flex flex-col gap-8'>
                        <motion.li
                            initial={{ x: -30 }}
                            animate={{ x: 30 }}
                            transition={{ duration: 2, delay: 0.3, repeat: Infinity, repeatType: "reverse" }}
                        >FILOSOFI LOGO NEXORA</motion.li>
                        <motion.li
                            initial={{ x: 30 }}
                            animate={{ x: -30 }}
                            transition={{ duration: 2, delay: 0.3, repeat: Infinity, repeatType: "reverse" }}
                            className='text-[#00FFAD]'>FILOSOFI LOGO NEXORA</motion.li>
                        <motion.li
                            initial={{ x: -30 }}
                            animate={{ x: 30 }}
                            transition={{ duration: 2, delay: 0.3, repeat: Infinity, repeatType: "reverse" }}
                        >FILOSOFI LOGO NEXORA</motion.li>
                    </ul>
                </div>
                <div className='flex max-sm:flex-col py-20 gap-8 relative'>
                    <div className='h-full absolute -z-0 w-full top-1/2'>
                        <div className='w-full h-full bg-black/60 absolute z-10'></div>
                        <Image src={"/hero.avif"} fill alt='bg' className='object-cover' />
                    </div>
                    <motion.div variants={containerVariant} initial="hidden"
                        whileInView="show" className='xl:text-4xl lg:text-4xl md:text-2xl sm:w-1/2  max-sm:text-3xl lg:px-20 md:px-10 px-5 relative z-0 text-white gap-8'>
                        <motion.h1
                            variants={{
                                hidden: { opacity: 0, x: -100 },
                                show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                            }}
                        >
                            NEXORA FOR FUTURE <br /> <span className='text-[#00FFAD]'>GENERATION</span>
                        </motion.h1>
                        <div
                            className='flex items-end flex-col'>
                            <motion.span
                                initial={{ rotateZ: 90 }}
                                animate={{ rotateZ: 0 }}
                                transition={{ duration: 2, type: "spring", delay: 0.3, repeat: Infinity, repeatType: "reverse" }}

                            >
                                <GoArrowUpRight />
                            </motion.span>
                            <motion.hr
                                variants={{
                                    hidden: { opacity: 0, scaleX: 0 },
                                    show: {
                                        opacity: 1, scaleX: 1,
                                        transition: { duration: 0.5, type: "keyframes", delay: 0.3 }
                                    }
                                }}
                                className='w-full border-2 border-white origin-left' />
                        </div>
                        <motion.p
                            variants={{
                                hidden: { opacity: 0, y: 100 },
                                show: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
                            }}
                            className='xl:text-3xl md:text-xl text-base text-justify mt-3'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, nobis nostrum vitae dolorem praesentium placeat totam quia incidunt inventore consequatur! Deserunt vitae eveniet aliquam? Iusto dignissimos ullam ea quaerat natus.
                        </motion.p>
                    </motion.div>
                    <div className='flex-grow sm:w-1/2 px-20 relative xl:h-[450px] h-96 lg:mr-20 max-lg:mr-10 max-md:mx-5 rounded'>
                        <Image src={"/nexoraff.png"} alt='img' className='object-cover' fill />
                    </div>
                </div >
                <div className=' lg:px-20 md:px-10 px-5 xl:grid-cols-3 md:grid-cols-2  grid gap-10 relative z-30 '>
                    <div className='bg-[#00FFAD] xl:h-[36rem] md:h-[30rem] h-96 w-full'></div>
                    <div className='bg-[#00FFAD] xl:h-[36rem] md:h-[30rem] h-96 w-full'></div>
                    <div className='bg-[#00FFAD] xl:h-[36rem] md:h-[30rem] h-96 w-full'></div>
                </div>
            </div >
            <div className='md:px-20 px-5 py-20'>
                <iframe className='w-full xl:h-screen pointer-events-none' src="https://www.youtube.com/embed/O8ivm7403rk?si=L4PYZiGnxg9UCJRM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <p className='text-white text-center py-10'>NEXORA - 2025 - COPYRIGHT ON</p>
            </div>
        </>
    )
}

export default FilosofiLogo
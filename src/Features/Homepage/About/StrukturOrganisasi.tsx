"use client"
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import { motion, easeOut } from "motion/react"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState, useRef, RefObject } from "react";
import gsap from "gsap"
gsap.registerPlugin(ScrollTrigger)


const containerVariant = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2,
        },
    },
}

const itemVariant = {
    hidden: {
        scaleY: 0,
        opacity: 0,
        originY: 1,
    },
    show: {
        scaleY: 1,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: easeOut,
        },
    },
}


const positions = [
    {
        title: "KETUA",
        height: "md:h-[28rem] sm:h-[20rem] h-[16rem]",
        img: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "WAKIL KETUA",
        height: " md:h-[24rem] sm:h-[18rem] h-[14rem]",
        img: "https://images.unsplash.com/photo-1445053023192-8d45cb66099d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "SEKERTARIS",
        height: "md:h-[20rem] sm:h-[16rem] h-[12rem]",
        img: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "BENDAHARA",
        height: "md:h-[16rem] sm:h-[14rem] h-[10rem]",
        img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "HUMAS",
        height: "md:h-[12rem] sm:h-[12rem] h-[8rem]",
        img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }
];

function scrollEffect(titleTrigger: RefObject<HTMLDivElement | null>
) {
    return {
        trigger: titleTrigger.current,
        start: "top-=50% center",
        end: "bottom+=130% center",
        scrub: true,
    }
}
export default function ResponsiveOrganizationChart() {

    const titleTrigger = useRef<HTMLDivElement>(null)
    const el1ref = useRef<HTMLDivElement>(null)
    const el3ref = useRef<HTMLDivElement>(null)
    const el2ref = useRef<HTMLHeadingElement>(null)

    const arrAnimation = [
        {
            target: el1ref,
            y: -190,
            delay: 0
        },
        {
            target: el2ref,
            y: -80,
            delay: 1
        },
        {
            target: el3ref,
            y: -160,
            delay: 0.3
        },
    ]

    useEffect(() => {
        if (!titleTrigger.current || !el1ref.current) return


        arrAnimation.map((e) => {
            if (!titleTrigger.current || !e.target) return

            gsap.fromTo(e.target.current, { y: 0 }, {
                y: e.y,
                duration: 3,
                delay: e.delay,
                scrollTrigger: scrollEffect(titleTrigger),
            })
        })
    }, [])


    return (
        <div className="w-full overflow-clip pt-40">
            <div ref={titleTrigger} className='flex justify-center mx-auto gap-3 pt-40'>
                <div ref={el1ref} className='flex items-start relative -top-10'>
                    <motion.span
                        initial={{ rotateZ: 0 }}
                        animate={{ rotateZ: 360 }}
                        transition={{ duration: 6, delay: 0.3, repeat: Infinity }}

                    >
                        <Image src={"/Star 2.png"} alt='star 2' className='object-contain' width={120} height={120} />
                    </motion.span>
                </div>
                <h1 ref={el2ref} className='xl:text-8xl lg:text-6xl text-4xl text-center'>STRUKTUR <br />ORGANISASI</h1>
                <div ref={el3ref} className='flex items-end relative -bottom-10'>
                    <motion.span
                        initial={{ rotateZ: 0 }}
                        animate={{ rotateZ: 360 }}
                        transition={{ duration: 6, delay: 0.3, repeat: Infinity }}

                    >
                        <Image src={"/Star 3.png"} alt='star 3' className='object-contain' width={120} height={120} />
                    </motion.span>
                </div>
            </div>
            {/* Desktop and Tablet View */}
            <motion.div
                variants={containerVariant}
                initial="hidden"
                whileInView="show"
                className="flex md:px-20 px-5 justify-between mt-20 items-end gap-2 max-sm:mx-4">
                {positions.map((position, index) => (
                    <motion.div
                        variants={itemVariant}
                        key={index} className="flex gap-3 lg:gap-5  group relative">
                        <div className={`${position.height} w-8 lg:w-10 bg-white group-hover:bg-[#00FFAD]   transition-all duration-300`}></div>
                        <div className="h-40 w-40 absolute group-hover:opacity-100 group-hover:-top-44 duration-1000 -top-0 opacity-0">
                            <Image src={position.img} alt="img-struktur" fill className="object-cover" />
                        </div>
                        <div className={`flex sm:flex-col text-white group-hover:text-[#00FFAD] justify-start pb-2  max-sm:absolute max-sm:-translate-y-10`}>
                            <h1 className="text-xs lg:text-base font-bold mb-2 whitespace-nowrap">{position.title}</h1>
                            <GoArrowUpRight className="text-lg lg:text-xl hover:scale-110 transition-transform cursor-pointer" />
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
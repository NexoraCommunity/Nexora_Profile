"use client"
import React, { RefObject, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoSettingsSharp } from "react-icons/io5"
import { motion } from "motion/react"
import gsap from "gsap"
gsap.registerPlugin(ScrollTrigger)


const cards = [
    {
        title: "WEBSITE PERUSAHAAN",
        img: "/nexoraff.png",
        github: "",
        preview: "",
    },
    {
        title: "NEXORA PROFILE",
        img: "/hero.avif",
        github: "",
        preview: "",
    },
    {
        title: "AOKOKWOKOKAOK",
        img: "/filosofilogo.png",
        github: "",
        preview: "",
    },

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
const Portfolio = () => {
    const hoverRefs = useRef<(HTMLDivElement | null)[]>([]);
    const imgRefs = useRef<(HTMLDivElement | null)>(null);
    const titleTrigger = useRef<HTMLDivElement>(null)
    const el1ref = useRef<HTMLDivElement>(null)
    const el3ref = useRef<HTMLDivElement>(null)
    const el2ref = useRef<HTMLHeadingElement>(null)
    const [hoverIndex, setHoverIndex] = useState<number | null>(null);
    const [positionImg, setPositionImg] = useState({ x: 0, y: 0 });

    const handleMouseMove = (
        e: React.MouseEvent<HTMLDivElement>,
        index: number
    ) => {
        const card = hoverRefs.current[index];

        if (card && imgRefs.current) {


            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const clampedX = Math.min(x, rect.width - (imgRefs.current.clientWidth + 1));
            setPositionImg({
                x: Math.max(0, clampedX),
                y: y,
            });
            setHoverIndex(index);
        }
    };

    const handleMouseLeave = () => {
        setHoverIndex(null);
    };



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
        <section className='bg-black relative overflow-hidden py-40' id='portfolio'>
            <div ref={titleTrigger} className='flex xl:text-9xl lg:text-7xl text-5xl  justify-center mx-auto gap-8 pt-40'>
                <div ref={el1ref} className='flex items-start relative text-[#00FFAD] -top-10'>
                    <motion.span
                        initial={{ rotateZ: 0 }}
                        animate={{ rotateZ: 360 }}
                        transition={{ duration: 6, delay: 0.3, repeat: Infinity }}

                    >
                        <IoSettingsSharp />
                    </motion.span>
                </div>
                <h1 ref={el2ref} className='text-center'>PROJECT</h1>
                <div ref={el3ref} className='flex items-end relative  text-[#56DFCF]  -bottom-10'>
                    <motion.span
                        initial={{ rotateZ: 0 }}
                        animate={{ rotateZ: 360 }}
                        transition={{ duration: 6, delay: 0.3, repeat: Infinity }}

                    >
                        <IoSettingsSharp />
                    </motion.span>
                </div>
            </div>
            <div className='md:px-20 px-5 pointer-events-none xl:text-5xl text-3xl pt-40'>
                <div>
                    <motion.h1
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, type: "keyframes", delay: 0.3 }}
                        className='mb-20'>HIGHLIGHT 2024//</motion.h1>
                    <motion.iframe
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, type: "keyframes", delay: 0.3 }}
                        className='w-full md:h-[36rem]' src="https://www.youtube.com/embed/O8ivm7403rk?si=L4PYZiGnxg9UCJRM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></motion.iframe>
                </div>
                <div className='flex max-lg:flex-col-reverse gap-10 mt-20'>
                    <motion.iframe
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, type: "keyframes", delay: 0.3 }}
                        className='lg:w-1/2 h-96' src="https://www.youtube.com/embed/O8ivm7403rk?si=L4PYZiGnxg9UCJRM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></motion.iframe>
                    <motion.h1
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, type: "keyframes", delay: 0.3 }}
                        className=' my-5'>HIGHLIGHT 2025//</motion.h1>
                </div>
                <div className='flex max-lg:flex-col  gap-10 mt-20 justify-end'>
                    <motion.h1
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, type: "keyframes", delay: 0.3 }}
                        className='my-5'>HIGHLIGHT 2026//</motion.h1>
                    <motion.iframe
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, type: "keyframes", delay: 0.3 }}
                        className='lg:w-1/2 h-96' src="https://www.youtube.com/embed/O8ivm7403rk?si=L4PYZiGnxg9UCJRM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></motion.iframe>
                </div>
            </div>
            <div className='border-t-8 border-white mt-40 h-auto'>
                <h1 className='text-center xl:text-7xl lg:text-5xl text-3xl my-14'>MORE PROJECT?</h1>
                <div className="xl:text-4xl text-xl">
                    {cards.map((e, i) => (
                        <div
                            key={i}
                            ref={(el) => {
                                hoverRefs.current[i] = el;
                            }}
                            onMouseMove={(e) => handleMouseMove(e, i)}
                            onMouseLeave={handleMouseLeave}
                            className="border relative group  "
                        >
                            <h1 className={`md:px-20 px-5 border-white duration-300 relative md:py-10 py-5 ${hoverIndex === i ? "scale-105 md:py-12 py-7" : "scale-100 md:py-10 py-5"}`}>{e.title}</h1>

                            <div
                                style={{
                                    left: `${positionImg.x}px`,
                                    top: `${positionImg.y}px`,
                                }}
                                ref={imgRefs}
                                className={`absolute transition-all md:h-80 md:w-80 w-40 h-40  z-40 duration-1000 -translate-y-10  ease-in-out ${hoverIndex === i ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                                    }`}
                            >
                                <Image
                                    src={e.img}
                                    fill
                                    alt="hover-img"
                                    className='object-cover'

                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Portfolio
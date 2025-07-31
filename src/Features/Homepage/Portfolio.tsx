"use client"
import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { motion } from "motion/react"


const Portfolio = () => {
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
    const hoverRefs = useRef<(HTMLDivElement | null)[]>([]);
    const imgRefs = useRef<(HTMLDivElement | null)>(null);
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
    return (
        <section className='bg-black  pt-40' id='portfolio'>
            <div className='md:px-20 px-5 xl:text-5xl text-3xl pt-40'>
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
                <div className='flex max-lg:flex-col gap-10 mt-20 justify-end'>
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
            <div className='border-t-8 border-white mt-40 h-screen'>
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
                            <h1 className={`md:px-20 px-5 border-white duration-300 ${hoverIndex === i ? "md:py-20 py-10" : "md:py-10 py-5 "}`}>{e.title}</h1>

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
"use client"
import React, { useRef, useState } from 'react'
import Image from 'next/image'

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
    const [hoverIndex, setHoverIndex] = useState<number | null>(null);
    const [positionImg, setPositionImg] = useState({ x: 0, y: 0 });

    const handleMouseMove = (
        e: React.MouseEvent<HTMLDivElement>,
        index: number
    ) => {
        const card = hoverRefs.current[index];
        if (card) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const clampedX = Math.min(x, rect.width - 302);
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
                    <h1 className='mb-20'>HIGHLIGHT 2024//</h1>
                    <iframe className='w-full md:h-[36rem]' src="https://www.youtube.com/embed/O8ivm7403rk?si=L4PYZiGnxg9UCJRM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <div className='flex max-lg:flex-col-reverse gap-10 mt-20'>
                    <iframe className='lg:w-1/2 h-96' src="https://www.youtube.com/embed/O8ivm7403rk?si=L4PYZiGnxg9UCJRM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h1 className=' my-5'>HIGHLIGHT 2025//</h1>
                </div>
                <div className='flex max-lg:flex-col gap-10 mt-20 justify-end'>
                    <h1 className='my-5'>HIGHLIGHT 2026//</h1>
                    <iframe className='lg:w-1/2 h-96' src="https://www.youtube.com/embed/O8ivm7403rk?si=L4PYZiGnxg9UCJRM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
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

                            <Image
                                src={e.img}
                                width={300}
                                height={400}
                                alt="hover-img"
                                style={{
                                    left: `${positionImg.x}px`,
                                    top: `${positionImg.y}px`,
                                }}
                                className={`absolute transition-all z-40 duration-1000 -translate-y-10  ease-in-out ${hoverIndex === i ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                                    }`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Portfolio
"use client"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useEffect, useRef, useState } from 'react'

gsap.registerPlugin(ScrollTrigger)


const WeAreContent = [
    {
        nama: "Tentang Kami",
        deskripsi: "Tentang kami ipsum dolor sit amet consectetur, adipisicing elit. Pariatur rerum sed suscipit vel doloremque debitis placeat eligendi quos ab consequuntur ipsum dolor sit amet consectetur, adipisicing elit. Pariatur rerum sed suscipit vel doloremque debitis placeat eligendi quos ab consequuntur",
    },
    {
        nama: "Berdirinya Nexora",
        deskripsi: "Sejarah Kami dolor sit amet consectetur, adipisicing elit. Pariatur rerum sed suscipit vel doloremque debitis placeat eligendi quos ab consequuntur ipsum dolor sit amet consectetur, adipisicing elit. Pariatur rerum sed suscipit vel doloremque debitis placeat eligendi quos ab consequuntur",
    },
    {
        nama: "Visi dan Misi",
        deskripsi: "Visi Misi Kami dolor sit amet consectetur, adipisicing elit. Pariatur rerum sed suscipit vel doloremque debitis placeat eligendi quos ab consequuntur ipsum dolor sit amet consectetur, adipisicing elit. Pariatur rerum sed suscipit vel doloremque debitis placeat eligendi quos ab consequuntur",
    },
]

const WeAre = () => {
    const [weAre, setWeAre] = useState<string>("Tentang Kami")

    const wrapperRef = useRef<HTMLDivElement | null>(null)
    const contentRefs = useRef<(HTMLDivElement | null)[]>([])



    useEffect(() => {
        if (!wrapperRef.current) return;
        ScrollTrigger.normalizeScroll(true)


        let triggers: ScrollTrigger[] = []
        ScrollTrigger.create({
            trigger: wrapperRef.current,
            start: "top top",
            end: "+=200%",
            pin: true,
            scrub: true,
            markers: false,
            anticipatePin: 1,
        });

        // Scroll triggers untuk setiap konten
        setTimeout(() => {
            triggers = contentRefs.current.map((ref, i) => {
                if (!ref) return null;

                return ScrollTrigger.create({
                    trigger: ref,
                    start: "top center",
                    end: "bottom center",
                    onEnter: () => setWeAre(WeAreContent[i].nama),
                    onEnterBack: () => setWeAre(WeAreContent[i].nama),
                    markers: false,
                });
            }).filter(Boolean) as ScrollTrigger[];
        }, 2000)




        triggers.forEach((trigger, i) => {
            if (trigger.isActive) {
                setWeAre(WeAreContent[i].nama);
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section id="we-are" className="relative w-full bg-black text-white mt-40">
            <div className=" flex items-center justify-center px-5 md:px-20">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 ">
                    {/* Tombol */}
                    <div ref={wrapperRef} className="h-screen  max-md:absolute max-md:w-full  max-md:left-0 ">
                        <div className='flex flex-col h-full max-md:mt-24 md:justify-center  gap-5 text-sm xl:text-3xl md:text-base  lg:text-xl'>
                            {WeAreContent.map((e, i) => (
                                <div key={i} className={`${i % 2 === 0 ? "md:justify-start  justify-end" : "  justify-end"} flex`}>
                                    <div
                                        className={`cursor-pointer  duration-300 ${weAre === e.nama ? "scale-125 " : "opacity-50 scale-100"} md:w-5/12 w-1/2 ${i % 2 === 0 ? "md:rotate-3" : ""}`}
                                    >
                                        <div
                                            className="w-full xl:py-7 md:py-4 py-2  flex justify-center items-center md:rounded-xl rounded-l-xl bg-[#00FFAD]"
                                        >
                                            {e.nama}
                                        </div>
                                        <div
                                            className={`-translate-y-2 w-0 h-0 max-md:hidden ${i % 2 === 0
                                                ? "-rotate-6 float-right xl:mr-10 mr-5 xl:border-l-[50px] xl:border-t-[65px] border-l-[45px] border-t-[50px] border-r-[0px]"
                                                : "rotate-6 float-left xl:ml-10 ml-5 border-l-[0px] xl:border-r-[50px]  border-r-[45px] border-t-[50px] xl:border-t-[65px]"
                                                } border-l-transparent border-r-transparent border-t-[#00FFAD]`}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Deskripsi dinamis */}
                    <div className="text-justify lg:text-xl  text-lg xl:text-3xl relative z-20 max-md:mt-10">
                        {
                            WeAreContent.map((e, index) => (
                                <div className='h-screen flex items-center p-10 max-md:p-0' key={index}>
                                    <p className='rounded-md '>
                                        {e.deskripsi}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            {/* Hidden sections untuk trigger scroll */}
            <div className="absolute top-0 left-0 w-full">
                {WeAreContent.map((_, i) => (
                    <div
                        key={i}
                        ref={(el) => { (contentRefs.current[i] = el) }}
                        className="h-screen pointer-events-none"
                    />
                ))}
            </div>

        </section>
    )
}

export default WeAre

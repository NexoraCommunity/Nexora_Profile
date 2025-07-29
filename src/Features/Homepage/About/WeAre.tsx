"use client"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

import React, { useEffect, useRef, useState } from 'react'

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
    const [fadeKey, setFadeKey] = useState(0)

    const wrapperRef = useRef<HTMLDivElement | null>(null)
    const contentRefs = useRef<(HTMLDivElement | null)[]>([])


    useEffect(() => {
        setFadeKey(prev => prev + 1)
    }, [weAre])

    useEffect(() => {
        if (!wrapperRef.current) return;

        let triggers: ScrollTrigger[] = []
        // Pin utama
        ScrollTrigger.create({
            trigger: wrapperRef.current,
            start: "top top",
            end: "+=200%",
            pin: true,
            scrub: false,
            markers: false,
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

        ScrollTrigger.refresh();



        setTimeout(() => {
            ScrollTrigger.refresh();

            triggers.forEach((trigger, i) => {
                if (trigger.isActive) {
                    setWeAre(WeAreContent[i].nama);
                }
            });
        }, 100);

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);
    return (
        <section ref={wrapperRef} id="we-are" className="relative w-full bg-black text-white max-sm:mt-40 overflow-hidden">
            <div className="sticky top-0 h-screen flex items-center justify-center px-5 md:px-20">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 ">
                    {/* Tombol */}
                    <div className="flex flex-col gap-5 text-xl xl:text-3xl md:text-base  lg:text-xl z-10">
                        {WeAreContent.map((e, i) => (
                            <div key={i} className={`${i % 2 === 0 ? "" : "flex justify-end"}`}>
                                <div
                                    className={`cursor-pointer duration-300 ${weAre === e.nama ? "scale-125" : "opacity-50 scale-100"} md:w-5/12 w-1/2 ${i % 2 === 0 ? "md:rotate-3" : ""}`}
                                >
                                    <div
                                        className="w-full xl:py-7 py-4  flex justify-center items-center rounded-xl bg-[#00FFAD]"
                                    >
                                        {e.nama}
                                    </div>
                                    <div
                                        className={`-translate-y-2 w-0 h-0 max-md:hidden ${i % 2 === 0
                                            ? "-rotate-6 float-right mr-10 border-l-[50px] border-r-[0px] border-t-[65px]"
                                            : "rotate-6 float-left ml-10 border-l-[0px] border-r-[50px] border-t-[65px]"
                                            } border-l-transparent border-r-transparent border-t-[#00FFAD]`}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Deskripsi dinamis */}
                    <div className="text-justify lg:text-xl  text-lg xl:text-3xl max-md:mt-10">
                        {
                            WeAreContent.map((e, index) => (
                                <div key={index} className={`${e.nama === weAre ? " h-auto block opacity-100 translate-y-0" : "h-0 opacity-0 translate-y-10"}  md:p-10 ease-in-out duration-1000 absolute`} >{e.deskripsi}</div>
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

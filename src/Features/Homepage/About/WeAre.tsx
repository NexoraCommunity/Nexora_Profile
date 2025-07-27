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

    const wrapperRef = useRef<HTMLDivElement | null>(null)
    const contentRefs = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        if (!wrapperRef.current) return;

        // Pin section utama
        ScrollTrigger.create({
            trigger: wrapperRef.current,
            start: "top top",
            end: "+=200%",
            pin: true,
            scrub: false,
            markers: false,
        });

        // Scroll triggers per item
        contentRefs.current.forEach((ref, i) => {
            if (!ref) return;

            ScrollTrigger.create({
                trigger: ref,
                start: "top center",
                end: "bottom center",
                onEnter: () => setWeAre(WeAreContent[i].nama),
                onEnterBack: () => setWeAre(WeAreContent[i].nama),
                markers: true,
            });
        });

        return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }, []);

    return (
        <section ref={wrapperRef} id="we-are" className="relative w-full bg-black text-white overflow-hidden">
            <div className="sticky top-0 h-screen flex items-center justify-center px-5 sm:px-20">
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-10">
                    {/* Tombol */}
                    <div className="flex flex-col gap-5 text-xl sm:text-3xl z-10">
                        {WeAreContent.map((e, i) => (
                            <div key={i} className={`${i % 2 === 0 ? "" : "flex justify-end"}`}>
                                <div
                                    className={`cursor-pointer duration-300 ${weAre === e.nama ? "scale-110" : "opacity-50 scale-100"} sm:w-5/12 w-1/2 ${i % 2 === 0 ? "sm:rotate-3" : ""}`}
                                >
                                    <div
                                        className="w-full sm:py-7 py-4 flex justify-center items-center rounded-xl bg-[#00FFAD]"
                                    >
                                        {e.nama}
                                    </div>
                                    <div
                                        className={`-translate-y-2 w-0 h-0 max-sm:hidden ${i % 2 === 0
                                            ? "-rotate-6 float-right mr-10 border-l-[50px] border-r-[0px] border-t-[65px]"
                                            : "rotate-6 float-left ml-10 border-l-[0px] border-r-[50px] border-t-[65px]"
                                            } border-l-transparent border-r-transparent border-t-[#00FFAD]`}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Deskripsi dinamis */}
                    <div className="text-justify sm:p-10 text-xl sm:text-3xl max-sm:mt-10">
                        {
                            WeAreContent.filter((e) => e.nama === weAre).map((e, index) => (
                                <div key={index}>{e.deskripsi}</div>
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

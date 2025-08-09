"use client"
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import { motion, easeOut } from "motion/react"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Marquee from "react-fast-marquee";
import { useEffect, useState, useRef, RefObject } from "react";
import gsap from "gsap"
import { div } from "motion/react-client";
gsap.registerPlugin(ScrollTrigger)



const partnershipList = [
    {
        name: "Aws",
        img: "https://img.icons8.com/color/480/amazon-web-services.png",
    },
    {
        name: "Google",
        img: "https://img.icons8.com/color/480/google-logo.png",
    },
    {
        name: "Microsoft",
        img: "https://img.icons8.com/color/480/microsoft.png",
    },
    {
        name: "Linkedin",
        img: "https://img.icons8.com/color/480/linkedin.png",
    },
    {
        name: "Instagram",
        img: "https://img.icons8.com/color/480/instagram-new--v1.png",
    },
    {
        name: "Apple",
        img: "https://img.icons8.com/ios-filled/50/mac-os.png",
    },
    {
        name: "Xiaomi",
        img: "https://img.icons8.com/color/480/xiaomi.png",
    },
    {
        name: "Github",
        img: "https://img.icons8.com/ios-glyphs/480/github.png",
    },
    {
        name: "X",
        img: "https://img.icons8.com/ios-filled/50/twitterx--v1.png",
    },
    {
        name: "Facebook",
        img: "https://img.icons8.com/color/480/facebook-new.png",
    },
    {
        name: "Shopify",
        img: "https://img.icons8.com/color/480/shopify.png",
    },
    {
        name: "Tiktok",
        img: "https://img.icons8.com/ios-glyphs/480/tiktok.png",
    },
]

const directions = ["left", "right", "left"];

export default function Partnership() {

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
        <div className="w-full pt-20 ">
            <div ref={titleTrigger} className='flex justify-center mx-auto gap-3 pt-40'>
                <div ref={el1ref} className='flex items-start relative -top-10'>
                    <motion.span
                        initial={{ rotateZ: 0 }}
                        animate={{ rotateZ: 360 }}
                        transition={{ duration: 6, delay: 0.3, repeat: Infinity }}

                    >
                        <Image src={"/Star 2.png"} alt='star 2' className='object-contain' width={180} height={180} />
                    </motion.span>
                </div>
                <h1 ref={el2ref} className='xl:text-8xl lg:text-6xl text-4xl text-center'>PARTNER <br />KAMI</h1>
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
            <div className="mt-20 bg-white text-black p-10">
                {directions.map((dir, i) => (
                    <Marquee key={i} direction={`${dir === "left" ? "left" : "right"}`} speed={50}>
                        <div className="flex gap-10 w-screen justify-around  items-center">
                            {partnershipList.slice(i * 4, i * 4 + 4).map((partner, index) => (
                                <div key={index} className="w-40 h-40">
                                    <Image
                                        key={partner.name}
                                        className="object-contain"
                                        src={partner.img}
                                        alt={partner.name}
                                        fill

                                    />
                                </div>
                            ))}
                        </div>
                    </Marquee>
                ))}


            </div>

        </div>
    );
}

function scrollEffect(titleTrigger: RefObject<HTMLDivElement | null>
) {
    return {
        trigger: titleTrigger.current,
        start: "top-=50% center",
        end: "bottom+=130% center",
        scrub: true,
    }
}
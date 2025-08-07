"use client"
import React, { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Swipper from "@/components/Swipper";

gsap.registerPlugin(ScrollTrigger)

const Gallery = () => {

  const trigger = useRef<HTMLDivElement>(null)
  const transition = useRef<HTMLDivElement>(null)


  useLayoutEffect(() => {

    const timeline = gsap.fromTo(transition.current, {
      clipPath: " inset(0 0 0 0)",
    }, {
      clipPath: "inset(0 100% 0 0)",
      scrollTrigger: {
        trigger: trigger.current,
        pin: true,
        scrub: true,
        start: "top end",
        end: "top end-=200px",
        markers: true,
      }
    });


  }, [])

  return (
    <section ref={trigger} id="gallery" className="bg-black  z-40 relative">
      {/* Gallery 1 (Coding Fest) */}
      <div className="text-white px-5 md:px-20  py-8 md:py-16 flex flex-col gap-4 max-sm:gap-10 relative">
        <div ref={transition} className='h-screen left-0 xl:text-8xl text-5xl text-black flex justify-center items-center bg-white z-50 w-full absolute top-0'>
          <h1>Gallery</h1>
        </div>

        <div className="order-1 md:order-2">
          <div className="md:text-4xl text-2xl flex justify-center items-center">
            <h1 className="mx-4">CODING FEST 2025</h1>
            <FaArrowRight className="text-3xl" />
          </div>
        </div>

        <div className="grid max-md:mx-auto md:grid-cols-2 sm:place-items-center order-2 gap-4 max-sm:gap-10 md:order-1">

          <div className="relative md:w-72 w-full md:h-52 max-md:h-96 lg:w-96 lg:h-72 max-sm:h-auto flex items-center justify-center">
            <Image
              src={"/sourceImg/g1.jpg"}
              alt="g1"
              width={600}
              height={350}
              className="object-contain"
            />
          </div>

          <div className="relative md:w-72 w-full md:h-52 max-md:h-96 lg:w-96 lg:h-72 max-sm:h-auto flex items-center justify-center">
            <Image
              src={"/sourceImg/g1.jpg"}
              alt="g1"
              width={600}
              height={350}
              className="object-contain"
            />
          </div>
        </div>

        <div className="grid max-md:mx-auto sm:grid-cols-1 md:grid-cols-2 place-items-center gap-4 max-sm:gap-10 order-3">

          <div className="relative md:w-72 w-full md:h-52 max-md:h-96 lg:w-96 lg:h-72 max-sm:h-auto md:translate-y-4 flex items-center justify-center">
            <Image
              src={"/sourceImg/g1.jpg"}
              alt="g1"
              width={600}
              height={350}
              className="max-md:object-cover object-contain"
            />
          </div>

          <div className="relative md:w-72 w-full md:h-52 max-md:h-96 lg:w-96 lg:h-72 max-sm:h-auto md:-translate-y-2 flex items-center justify-center">
            <Image
              src={"/sourceImg/g1.jpg"}
              alt="g1"
              width={600}
              height={350}
              className="max-md:object-cover object-contain"
            />
          </div>
        </div>
      </div>

      {/* Gallery 2 */}
      <div>
        <div className="flex text-center sm:text-2xl text-black">
          <div className="w-full p-4 bg-white">NEXORA MEMORIES</div>
          <div className="w-full p-4 bg-[#56DFCF]">NEXORA MEMORIES</div>
          <div className="w-full p-4 bg-white">NEXORA MEMORIES</div>
        </div>

        <div className="text-white max-sm:px-5 px-20 sm:px-10">

          <div className="flex max-md:flex-col max-md:text-center  pt-16">
            <div className="w-full md:w-[50%]">
              <Image
                src={"/sourceImg/g2.jpg"}
                alt="g2"
                width={600}
                height={250}
                className="w-full h-auto md:rounded-[40px] rounded-[20px]"
              />
            </div>
            <div>
              <h1 className="w-full  sm:text-2xl md:text-4xl mt-4 md:mx-10">
                LIBURAN KE <br className="max-md:hidden" />TAWANGMANGU
              </h1>
            </div>

          </div>

          <div className="rounded-2xl flex max-md:flex-col max-md:text-center justify-between py-10">
            <div className="max-md:order-2">
              <h1 className="w-full  sm:text-2xl md:text-4xl mt-4">
                LIBURAN KE <br className="max-md:hidden" /> TAWANGMANGU
              </h1>
            </div>
            <div className="w-full md:w-[50%]">
              <Image
                src={"/sourceImg/g2.jpg"}
                alt="g2"
                width={600}
                height={250}
                className="w-full h-auto md:rounded-[40px] rounded-[20px]"
              />
            </div>

          </div>

        </div>
        {/* swipper  */}
        <div className="relative my-40 max-sm:px-5 overflow-x-clip">
          <Swipper />
          <div className="max-sm:text-sm relative z-50 text-center -translate-y-16 text-3xl">
            <h1>TOUR KE MALAYSIA 2024/09/12</h1>
          </div>
        </div>
      </div>
      {/* Gallery 3 */}
      <div className="px-20 max-sm:px-5">

        <div className="text-white grid place-items-center py-12">
          <h1 className="sm:text-5xl text-xl text-center pb-12">
            KELUARGA BESAR <br className="max-sm:hidden" /> NEXORA
          </h1>
          <Image
            src={"/sourceImg/g4.jpg"}
            alt="g4"
            width={1000}
            height={500}
            className="max-sm:rounded-[10px] rounded-[30px]"
          />
        </div>


      </div>
      <div className='h-96'>

      </div>

    </section>
  );
};

export default Gallery;

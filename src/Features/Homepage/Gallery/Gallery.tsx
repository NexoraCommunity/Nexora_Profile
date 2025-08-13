"use client";
import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Swipper from "@/components/Swipper";
import { motion, AnimatePresence } from "motion/react";

gsap.registerPlugin(ScrollTrigger);

const ListEvent = [
  {
    nama: "Coding Fest",
    image: [
      "/sourceImg/g2.jpg",
      "/sourceImg/g2.jpg",
      "/sourceImg/g2.jpg",
      "/sourceImg/g2.jpg",
    ],
  },

  {
    nama: "Competition",
    image: [
      "/sourceImg/g2.jpg",
      "/sourceImg/g2.jpg",
      "/sourceImg/g2.jpg",
      "/sourceImg/g2.jpg",
    ],
  },
];

const Gallery = () => {
  const [selectedGallery, setSelectedGallery] = useState(0);
  const [selectedImage, setSelectedImage] = useState("/");
  const handleNext = () => {
    setSelectedGallery((prev) => (prev + 1 < ListEvent.length ? prev + 1 : 0));
  };

  const currentEvent = ListEvent[selectedGallery];

  const trigger = useRef<HTMLDivElement>(null);
  const transition = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const timeline = gsap.fromTo(
      transition.current,
      {
        clipPath: " inset(0 0 0 0)",
      },
      {
        clipPath: "inset(0 100% 0 0)",
        scrollTrigger: {
          trigger: trigger.current,
          pin: true,
          scrub: true,
          start: "top-=50px end",
          end: "top end-=200px",
        },
      }
    );
  }, []);


  return (
    <section ref={trigger} id="gallery" className="bg-black z-40 relative overflow-hidden">
      <div
        ref={transition}
        className="h-screen left-0 xl:text-8xl text-5xl text-black flex justify-center items-center bg-white z-50 w-full absolute top-0"
      >
        <h1>Gallery</h1>
      </div>
      {/* Gallery 1 (Coding Fest) */}
      <div className="text-white h-screen px-10 md:px-20 py-8 md:py-16 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentEvent.nama} // kunci unik supaya transisi antar event bisa
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="h-full flex flex-col justify-center gap-4 max-sm:gap-10"
          >
            <div className="grid max-md:mx-auto grid-cols-2 sm:place-items-center gap-4 max-lg:gap-40 max-sm:gap-5">
              {currentEvent.image.slice(0, 2).map((l, i) => (
                <motion.div key={i} transition={{ duration: 1, delay: 0.5 }}>
                  {i % 2 === 0 ? (
                    <motion.span onClick={() => setSelectedImage(l)}
                      className="inline-block"
                      initial={{ y: -7, x: -7, opacity: 1 }}
                      animate={{ y: 7, x: 7, opacity: 1 }}
                      transition={{
                        duration: 1,
                        delay: 0.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                      }}
                    >
                      <Image
                        src={l}
                        alt="g1"
                        width={400}
                        height={175}
                        className="translate-y-2"
                      />
                    </motion.span>
                  ) : (
                    <motion.span onClick={() => setSelectedImage(l)}
                      className="inline-block"
                      initial={{ y: 7, x: 7, opacity: 1 }}
                      animate={{ y: -7, x: -7, opacity: 1 }}
                      transition={{
                        duration: 1,
                        delay: 0.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                      }}
                    >
                      <Image
                        src={l}
                        alt="g1"
                        width={400}
                        height={175}
                        className="translate-y-2"
                      />
                    </motion.span>
                  )}
                </motion.div>
              ))}
            </div>

            {selectedImage !== "/" ?
              <div className={`absolute w-full h-full left-0 flex items-center justify-center z-40`}>
                <motion.div
                  key={selectedImage}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="relative w-10/12 h-5/6 max-[500px]:h-2/6 max-sm:h-3/6 max-lg:h-4/6">
                  <button onClick={() => setSelectedImage("/")} className="absolute right-5 top-3 text-2xl z-50 text-red-500">X</button>
                  <Image src={selectedImage} alt="g1" fill className="object-cover rounded-xl border-4 border-white" />
                </motion.div>
              </div>
              : ""}


            <motion.div
              onClick={handleNext}
              key={currentEvent.nama}
              initial={{ x: -90 }}
              animate={{ x: 0 }}
              exit={{ x: 90 }}
              transition={{ duration: 0.4 }}
            >
              <div className="md:text-4xl text-xl flex justify-center items-center">
                <h1 className="mx-4">{currentEvent.nama}</h1>
                <FaArrowRight className="text-3xl" />
              </div>
            </motion.div>

            <div className="grid max-md:mx-auto grid-cols-2 place-items-center gap-4 max-lg:gap-40 max-sm:gap-5">
              {currentEvent.image.slice(2, 4).map((l, i) => (
                <div key={i}>
                  {i % 2 === 0 ? (
                    <motion.span onClick={() => setSelectedImage(l)}
                      className="inline-block"
                      initial={{ y: 7, x: 7, opacity: 1 }}
                      animate={{ y: -7, x: -7, opacity: 1 }}
                      transition={{
                        duration: 1,
                        delay: 0.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                      }}
                    >
                      <Image
                        src={l}
                        alt="g1"
                        width={400}
                        height={175}
                        className="translate-y-2"
                      />
                    </motion.span>
                  ) : (
                    <motion.span onClick={() => setSelectedImage(l)}
                      className="inline-block"
                      initial={{ y: -7, x: -7, opacity: 1 }}
                      animate={{ y: 7, x: 7, opacity: 1 }}
                      transition={{
                        duration: 1,
                        delay: 0.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                      }}
                    >
                      <Image
                        src={l}
                        alt="g1"
                        width={400}
                        height={175}
                        className="translate-y-2"
                      />
                    </motion.span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
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
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="w-full md:w-[50%]"
            >
              <Image
                src={"/sourceImg/g2.jpg"}
                alt="g2"
                width={600}
                height={250}
                className="w-full h-auto md:rounded-[40px] rounded-[20px]"
              />
            </motion.div>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <h1 className="w-full  sm:text-2xl md:text-4xl mt-4 md:mx-10">
                LIBURAN KE <br className="max-md:hidden" />
                TAWANGMANGU
              </h1>
            </motion.div>
          </div>

          <div className="rounded-2xl flex max-md:flex-col max-md:text-center justify-between py-10">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="max-md:order-2"
            >
              <h1 className="w-full  sm:text-2xl md:text-4xl mt-4">
                LIBURAN KE <br className="max-md:hidden" /> TAWANGMANGU
              </h1>
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="w-full md:w-[50%]"
            >
              <Image
                src={"/sourceImg/g2.jpg"}
                alt="g2"
                width={600}
                height={250}
                className="w-full h-auto md:rounded-[40px] rounded-[20px]"
              />
            </motion.div>
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
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.4,
              delay: 0.3,
            }}
            className="sm:text-5xl text-xl text-center pb-12"
          >
            KELUARGA BESAR <br className="max-sm:hidden" /> NEXORA
          </motion.h1>
          <Image
            src={"/sourceImg/g4.jpg"}
            alt="g4"
            width={1000}
            height={500}
            className="max-sm:rounded-[10px] rounded-[30px]"
          />
        </div>
      </div>
      <div className="h-96"></div>
    </section>
  );
};

export default Gallery;

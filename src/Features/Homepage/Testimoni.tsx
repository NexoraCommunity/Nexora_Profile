"use client";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import { MdOutlineArrowOutward } from "react-icons/md";

const comments = [
  { name: "Name 1", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
  { name: "Name 2", text: "Amet obcaecati saepe, architecto odit reprehenderit animi." },
  { name: "Name 3", text: "Another comment example for scrolling." },
];
const Testimoni = () => {
  return (
    <div className="md:p-20 p-5 mb-40 relative z-40">
      <div className="xl:text-7xl text-5xl flex gap-4">
        <motion.h1
          initial={{ y: 50, x: -50, opacity: 0 }}
          whileInView={{ y: 0, x: 0, opacity: 1 }}
          transition={{
            duration: 0.4,
            delay: 0.3,
          }}
        >
          TESTIMONY
        </motion.h1>
        <motion.span
          initial={{ rotateZ: 90, opacity: 0 }}
          whileInView={{ rotateZ: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.3,
          }}
        >
          <MdOutlineArrowOutward className="rotate-90 relative" />
        </motion.span>
      </div>
      <div className="grid lg:grid-cols-2 mt-10 gap-4">
        <div className="h-screen border border-white xl:p-14 lg:p-8 p-5 max-md:pb-10 max-lg:order-2 order-1">
          <div className="relative h-2/3 overflow-hidden border border-white">
            <div className="flex flex-col animate-marqueeDown gap-4 p-4">
              {/* First set of comments */}
              {comments.map((c, i) => (
                <div key={`first-${i}`} className="border border-white rounded-md h-auto p-4">
                  <div className="mb-4">
                    <h2 className="sm:text-2xl text-xl">Comment</h2>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-white"></div>
                        <h2 className="sm:text-xl text-xl mx-2">{c.name}</h2>
                      </div>
                      <div className="flex items-center">
                        <h2>Bintang 5</h2>
                      </div>
                    </div>
                    <div className="text-justify">
                      <p>{c.text}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Duplicate set for seamless scroll */}
              {comments.map((c, i) => (
                <div key={`second-${i}`} className="border border-white rounded-md h-auto p-4">
                  <div className="mb-4">
                    <h2 className="sm:text-2xl text-xl">Comment</h2>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-white"></div>
                        <h2 className="sm:text-xl text-xl mx-2">{c.name}</h2>
                      </div>
                      <div className="flex items-center">
                        <h2>Bintang 5</h2>
                      </div>
                    </div>
                    <div className="text-justify">
                      <p>{c.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="h-1/3 mt-4 flex flex-col gap-4 text-black">
            <textarea
              name=""
              id=""
              className="h-2/3 resize-none bg-white border border-white p-3"
              placeholder="tulis disini!!"
            ></textarea>
            <button className="w-full border h-1/3 bg-white  text-3xl">
              submit
            </button>
          </div>
        </div>
        <div className="lg:h-screen h-full flex flex-col gap-4 max-lg:order-1 order-2">
          <div className="border border-white h-2/3 flex justify-center items-center">
            <Image
              src={"/logos.png"}
              width={400}
              height={400}
              alt="nexora-logos"
            />
          </div>
          <div className="flex gap-4 h-1/3 text-4xl">
            <div className="border w-1/2 border-white flex justify-center items-center">
              <h1 className="text-center">
                20 <br /> Client
              </h1>
            </div>
            <div className="border w-1/2  border-white flex justify-center items-center">
              <h1 className="text-center">
                100+ <br /> Active Member
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimoni;

"use client"
import React, { useState } from 'react'


const WeAreContent = [
    {
        nama: "Tentang Kami",
        deskripsi: "Tentang kami ipsum dolor sit amet consectetur, adipisicing elit. Pariatur rerum sed suscipit vel doloremque debitis placeat eligendi quos ab consequuntur",
    },
    {
        nama: "Berdirinya Nexora",
        deskripsi: "Sejarah Kami dolor sit amet consectetur, adipisicing elit. Pariatur rerum sed suscipit vel doloremque debitis placeat eligendi quos ab consequuntur",
    },
    {
        nama: "Visi dan Misi",
        deskripsi: "Visi Misi Kami dolor sit amet consectetur, adipisicing elit. Pariatur rerum sed suscipit vel doloremque debitis placeat eligendi quos ab consequuntur",
    },
]
const activeWeAre = "scale-110 w-6/12"
const WeAre = () => {
    const [weAre, setWeAre] = useState<string>("Tentang Kami")


    const handleClickWeAre = (active: string) => {
        setWeAre(active)
    }

    return (
        <section id="we-are" className='w-full px-20 grid grid-cols-2 pt-40  text-white'>
            <div className=' flex flex-col  gap-10 '>
                <div className={` ${weAre === "Tentang Kami" ? "w-6/12  scale-110" : "opacity-50 w-5/12"} duration-300 rotate-3`}>
                    <div onClick={() => handleClickWeAre("Tentang Kami")} className='w-full text-3xl h-20 flex justify-center items-center rounded-xl bg-[#00FFAD]'>Tentang Kami</div>
                    <div className="-rotate-6 -translate-y-2 w-0 h-0 float-right mr-10 border-l-[50px] border-r-[0px] border-t-[65px] border-l-transparent border-r-transparent border-t-[#00FFAD]"></div>
                </div>
                <div className='w-full flex justify-end'>
                    <div className={` ${weAre === "Berdirinya Nexora" ? "w-6/12  scale-110" : "opacity-50 w-5/12"} duration-300 `}>
                        <div onClick={() => handleClickWeAre("Berdirinya Nexora")} className='w-full text-3xl h-20 flex justify-center items-center rounded-xl bg-[#00FFAD]'>Berdirinya Nexora</div>
                        <div className="rotate-6 -translate-y-2 w-0 h-0 float-left ml-10 border-l-[0px] border-r-[50px] border-t-[65px] border-l-transparent border-r-transparent border-t-[#00FFAD]"></div>
                    </div>
                </div>
                <div className={`rotate-3  ${weAre === "Visi dan Misi" ? "w-6/12  scale-110" : "opacity-50 w-5/12"} duration-300`}>
                    <div onClick={() => handleClickWeAre("Visi dan Misi")} className='w-full text-3xl h-20 flex justify-center items-center rounded-xl bg-[#00FFAD]'>Visi dan Misi</div>
                    <div className="-rotate-6 -translate-y-2 w-0 h-0 float-right mr-10 border-l-[50px] border-r-[0px] border-t-[65px] border-l-transparent border-r-transparent border-t-[#00FFAD]"></div>
                </div>
            </div>
            {
                WeAreContent.filter((e) => e.nama === weAre).map((e, index) => (
                    <div key={index} className='text-3xl p-10'>{e.deskripsi}</div>
                ))
            }
        </section>
    )
}

export default WeAre
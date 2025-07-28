import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";

export default function ResponsiveOrganizationChart() {
    const positions = [
        {
            title: "KETUA",
            height: "md:h-[28rem] sm:h-[20rem] h-[16rem]",
            bgColor: "bg-[#00FFAD]",
            textColor: "text-[#00FFAD]",
            isHighlighted: true
        },
        {
            title: "WAKIL KETUA",
            height: " md:h-[24rem] sm:h-[18rem] h-[14rem]",
            bgColor: "bg-white",
            textColor: "text-white",
            isHighlighted: false
        },
        {
            title: "SEKERTARIS",
            height: "md:h-[20rem] sm:h-[16rem] h-[12rem]",
            bgColor: "bg-white",
            textColor: "text-white",
            isHighlighted: false
        },
        {
            title: "BENDAHARA",
            height: "md:h-[16rem] sm:h-[14rem] h-[10rem]",
            bgColor: "bg-white",
            textColor: "text-white",
            isHighlighted: false
        },
        {
            title: "HUMAS",
            height: "md:h-[12rem] sm:h-[12rem] h-[8rem]",
            bgColor: "bg-white",
            textColor: "text-white",
            isHighlighted: false
        }
    ];

    return (
        <div className="w-full pt-40">
            <div className='flex justify-center mx-auto gap-3'>
                <div className='flex items-start relative -top-10'>
                    <Image src={"/Star 2.png"} alt='star 2' className='object-contain' width={180} height={180} />
                </div>
                <h1 className='xl:text-8xl lg:text-6xl text-4xl text-center'>STRUKTUR <br />ORGANISASI</h1>
                <div className='flex items-end relative -bottom-10'>
                    <Image src={"/Star 3.png"} alt='star 3' className='object-contain' width={120} height={120} />
                </div>
            </div>
            {/* Desktop and Tablet View */}
            <div className="flex md:px-20 px-5 justify-between mt-20 items-end gap-2 max-sm:mx-4">
                {positions.map((position, index) => (
                    <div key={index} className="flex gap-3 lg:gap-5">
                        <div className={`${position.height} w-8 lg:w-10 ${position.bgColor} transition-all duration-300 hover:scale-105`}></div>
                        <div className={`${position.textColor} flex sm:flex-col justify-start pb-2  max-sm:absolute max-sm:-translate-y-10`}>
                            <h1 className="text-xs lg:text-base font-bold mb-2 whitespace-nowrap">{position.title}</h1>
                            <GoArrowUpRight className="text-lg lg:text-xl hover:scale-110 transition-transform cursor-pointer" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
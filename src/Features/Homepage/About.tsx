import React from 'react'

const About = () => {
    return (
        <div>
            <div className='w-full bg-black grid grid-cols-2 pt-40'>
                <div className='text-white flex flex-col items-center gap-20 pr-20'>
                    <div className='w-6/12 mx-auto rotate-3 scale-110'>
                        <div className='w-full text-4xl h-20 flex justify-center items-center rounded-xl bg-[#00FFAD]'>Tentang Kami</div>
                        <div className="-rotate-6 -translate-y-2 w-0 h-0 float-right mr-10 border-l-[50px] border-r-[0px] border-t-[65px] border-l-transparent border-r-transparent border-t-[#00FFAD]"></div>
                    </div>
                    <div className='w-full flex justify-end'>
                        <div className='w-5/12 opacity-50'>
                            <div className='w-full text-4xl h-20 flex justify-center items-center rounded-xl bg-[#00FFAD]'>Berdirinya Nexora</div>
                            <div className="rotate-6 -translate-y-2 w-0 h-0 float-left ml-10 border-l-[0px] border-r-[50px] border-t-[65px] border-l-transparent border-r-transparent border-t-[#00FFAD]"></div>
                        </div>
                    </div>
                    <div className='w-5/12 mx-auto rotate-3 opacity-50'>
                        <div className='w-full text-4xl h-20 flex justify-center items-center rounded-xl bg-[#00FFAD]'>Visi dan Misi</div>
                        <div className="-rotate-6 -translate-y-2 w-0 h-0 float-right mr-10 border-l-[50px] border-r-[0px] border-t-[65px] border-l-transparent border-r-transparent border-t-[#00FFAD]"></div>
                    </div>
                </div>
                <div className=''></div>
            </div>
            <div className='h-screen bg-black'>

            </div>
        </div>
    )
}

export default About
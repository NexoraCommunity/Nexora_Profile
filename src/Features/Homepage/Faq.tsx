import Image from 'next/image';
import React from 'react'
import { MdArrowForwardIos } from "react-icons/md";

const Faq = () => {
    return (
        <div className='md:px-20 px-5 my-40 bg-black relative z-40'>
            <div className='w-full  text-5xl mb-5'>
                <div className='flex mb-10 justify-between'>
                    <div className='flex items-center gap-10'>
                        <h1 >FAQ</h1>
                        <MdArrowForwardIos />
                    </div>
                    <div>
                        <Image src={"/Star 3.png"} width={60} height={60} alt='start' />
                    </div>
                </div>
                <div className='w-full  border-white border-2'></div>
            </div>
            <div className='md:text-3xl text-xl '>
                <div className="collapse collapse-arrow bg-transparent border text-white rounded-none border-white">
                    <input type="radio" name="my-accordion-2 " defaultChecked />
                    <div className="collapse-title">How do I create an account?</div>
                    <div className="collapse-content border border-white ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis corrupti exercitationem voluptate vero sed, recusandae incidunt nemo necessitatibus placeat, magni ipsa numquam illum saepe. Deserunt inventore corporis eius laboriosam, sequi eos fugit sed neque cumque iusto optio, dolorem ratione necessitatibus.</div>
                </div>
                <div className="collapse collapse-arrow bg-transparent border text-white rounded-none border-white">
                    <input type="radio" name="my-accordion-2 " defaultChecked />
                    <div className="collapse-title">How do I create an account?</div>
                    <div className="collapse-content border border-white ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis corrupti exercitationem voluptate vero sed, recusandae incidunt nemo necessitatibus placeat, magni ipsa numquam illum saepe. Deserunt inventore corporis eius laboriosam, sequi eos fugit sed neque cumque iusto optio, dolorem ratione necessitatibus.</div>
                </div>
                <div className="collapse collapse-arrow bg-transparent border text-white rounded-none border-white">
                    <input type="radio" name="my-accordion-2 " defaultChecked />
                    <div className="collapse-title">How do I create an account?</div>
                    <div className="collapse-content border border-white ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis corrupti exercitationem voluptate vero sed, recusandae incidunt nemo necessitatibus placeat, magni ipsa numquam illum saepe. Deserunt inventore corporis eius laboriosam, sequi eos fugit sed neque cumque iusto optio, dolorem ratione necessitatibus.</div>
                </div>
                <div className="collapse collapse-arrow bg-transparent border text-white rounded-none border-white">
                    <input type="radio" name="my-accordion-2 " defaultChecked />
                    <div className="collapse-title">How do I create an account?</div>
                    <div className="collapse-content border border-white ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis corrupti exercitationem voluptate vero sed, recusandae incidunt nemo necessitatibus placeat, magni ipsa numquam illum saepe. Deserunt inventore corporis eius laboriosam, sequi eos fugit sed neque cumque iusto optio, dolorem ratione necessitatibus.</div>
                </div>
                <div className="collapse collapse-arrow bg-transparent border text-white rounded-none border-white">
                    <input type="radio" name="my-accordion-2 " defaultChecked />
                    <div className="collapse-title">How do I create an account?</div>
                    <div className="collapse-content border border-white ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis corrupti exercitationem voluptate vero sed, recusandae incidunt nemo necessitatibus placeat, magni ipsa numquam illum saepe. Deserunt inventore corporis eius laboriosam, sequi eos fugit sed neque cumque iusto optio, dolorem ratione necessitatibus.</div>
                </div>

            </div>
        </div>
    )
}

export default Faq
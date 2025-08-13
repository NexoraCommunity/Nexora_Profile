"use client"
import Image from 'next/image'
import { GoArrowUpRight } from "react-icons/go"
import React, { useState } from 'react'
import WeAre from './WeAre'
import FilosofiLogo from './FilosofiLogo'
import StrukturOrganisasi from './StrukturOrganisasi'
import Partnership from './Partnership'


const About = () => {


    return (
        <section id='about' className='w-full overflow-x-hidden bg-black'>
            <WeAre />
            <FilosofiLogo />
            <Partnership />
            <StrukturOrganisasi />
        </section>
    )
}

export default About
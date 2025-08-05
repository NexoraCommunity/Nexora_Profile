"use client"
import Image from 'next/image'
import { GoArrowUpRight } from "react-icons/go"
import React, { useState } from 'react'
import WeAre from './About/WeAre'
import FilosofiLogo from './About/FilosofiLogo'
import StrukturOrganisasi from './About/StrukturOrganisasi'
import Partnership from './About/Partnership'


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
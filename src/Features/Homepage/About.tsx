"use client"
import Image from 'next/image'
import { GoArrowUpRight } from "react-icons/go"
import React, { useState } from 'react'
import WeAre from './About/WeAre'
import FilosofiLogo from './About/FilosofiLogo'
import StrukturOrganisasi from './About/StrukturOrganisasi'


const About = () => {


    return (
        <section id='about' className=' bg-black'>
            <WeAre />
            <FilosofiLogo />
            {/* <StrukturOrganisasi /> */}
        </section>
    )
}

export default About
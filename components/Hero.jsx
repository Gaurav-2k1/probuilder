"use client"
import Image from 'next/image'
import React from 'react'
import { FiFacebook } from 'react-icons/fi'
import { FaLinkedinIn } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import { AiFillGithub } from 'react-icons/ai'
const Hero = () => {
    return (
        <div className='w-full h-full relative'>
            <Image className=""
                layout='intrinsic'
                width={1600}
                height={900}
                src="/Banner.png" alt='banner' />
            <div className='flex flex-row w-full h-full absolute top-10 z-10'>
                <div className='flex flex-col w-1/2  h-full justify-center
                gap-6 md:px-16'>
                    <p className="text-white text-12xl font-mono w-2/3 font-semibold">
                        Hello My Name is Alexander Hales
                    </p>
                    <p className="text-white text-2xl font-mono mt-3">Software Developer</p>
                    <p className="text-white text-base font-roboto-flex mt-5 leading-7">
                        A software development engineer (SDE) who is
                        responsible for designing, developing, and testing software applications. They work closely with other developers and stakeholders to ensure that the software meets the needs of the end-users.
                    </p>
                    <div className='bg-gray-400 cursor-pointer hover:bg-gray-300 mt-5 text-white text-lg font-mono w-max p-4 rounded-'>Download CV</div>
                    <div className='flex flex-row gap-2'>
                        <div className='p-5 bg-gray-200 cursor-pointer  hover:bg-slate-950'>
                            <FiFacebook fontSize={30} color='white'
                                onClick={() => {
                                    window.open("https://www.facebook.com/palash.darokar.7", '_blank', 'noopener,noreferrer');

                                }}
                            /></div>
                        <div className='p-5 bg-gray-200 cursor-pointer  hover:bg-slate-950'>
                            <FaLinkedinIn fontSize={30} color='white'
                                onClick={() => {
                                    window.open("https://www.linkedin.com/in/palash-kumar-daroker-112408b1/", '_blank', 'noopener,noreferrer');

                                }}
                            /></div>
                        <div className='p-5 bg-gray-200 cursor-pointer  hover:bg-slate-950'>
                            <SiGmail fontSize={30} color='white'
                                onClick={() => {
                                    alert("mailto:palash.darokar143@gmail.com")

                                }} /></div>
                        <div className='p-5 bg-gray-200 cursor-pointer  hover:bg-slate-950'>
                            <AiFillGithub fontSize={30} color='white'
                                onClick={() => {
                                    alert("mailto:palash.darokar143@gmail.com")

                                }} /></div>
                    </div>
                </div>
                <div className='w-1/2 h-full flex justify-center items-center p-5 relative'>
                    <div className='w-2/3 h-2/3 relative 
                    border border-blueviolet-100 
                    border-opacity-80 border-solid'>
                        <Image src="/heroimage.png"
                            className=''
                            alt=''
                            layout='fill'
                            objectPosition='bottom'
                            objectFit='contain'
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero

const socialIcon = () => {

}
"use client"
import React from 'react'
import Image from 'next/image';
import { FiFacebook } from 'react-icons/fi'
import { FaLinkedinIn } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import { AiFillGithub } from 'react-icons/ai'
const Contact = () => {
  return (
    <div className='w-full h-full relative mt-10'>
      <Image className=""
        layout='intrinsic'
        width={1600}
        height={900}
        src="/Banner.png" alt='banner' />
      <div className='flex flex-row w-full h-full absolute top-0 z-10'>
        <div className='flex flex-col w-1/2  h-full justify-center
            gap-6 md:px-16'>
          <p className="text-white text-12xl font-mono w-2/3 font-semibold">
            Lets talk for potential collaboration          </p>
          <p className="text-white text-base font-roboto-flex mt-5 leading-7">
            Ready to take your projects to the next level? I`m here to help! Fill out the form below and let`s discuss how I can bring your dreams to life.
          </p>
          <div className='flex flex-col w-full '>
            <div className='flex flex-row w-full'>
              <input className='p-4 bg-gray-200
             decoration-gray-100
             font-mono
              border-white m-2 
              border-opacity-50
              border-solid border w-full' type='text' placeholder='Enter Name....' />
              <input className='p-4 bg-gray-200
             decoration-gray-100
             font-mono
              border-white m-2 
              border-opacity-50
              border-solid border w-full' type='email' placeholder='Enter email address' />
            </div>
            <input className='p-4 bg-gray-200
             decoration-gray-100
             font-mono
              border-white m-2 
              border-opacity-50
              border-solid border'
              type='number'
              placeholder='Phone number' />
            <input className='p-4 bg-gray-200
             decoration-gray-100
             font-mono
              border-white m-2 
              border-opacity-50
              border-solid border' type='text' placeholder='Company Name' />

            <input className='p-4 bg-gray-200
             decoration-gray-100
             font-mono
              border-white m-2 
              border-opacity-50
              border-solid border' type='text' placeholder='Designation' />

            <div className='p-4 bg-gray-200
             decoration-gray-100
             font-mono
              border-white m-2 
              border-opacity-50
              border-solid border
            w-min px-10 self-end cursor-pointer'>Submit</div>
          </div>

        </div>
        <div className='w-1/2 h-full flex flex-col gap-5 justify-start items-start p-5 relative'>
          <div className='w-1/2 h-1/2 relative 
                border border-blueviolet-100 
                border-opacity-80 border-solid mt-5'>
            <Image src="/contact.png"
              className='p-5'
              alt=''
              layout='fill'
              objectFit='contain'
            />

          </div>
          <p className='text-lg font-mono'>Contact me here :</p>
          <div className='flex flex-wrap gap-5 w-4/5'>
            <div className='flex flex-row items-center gap-4'>
              <Image src="/mail.svg" alt=''
                layout='intrinsic' width={20} height={20} />
              <p className='text-base font-roboto-flex'>alexanderhales@gmail.com</p>
            </div>
            <div className='flex flex-row gap-4 items-center'>
              <Image src="/mobile.svg" alt=''
                layout='intrinsic' width={20} height={20} />
              <p className='text-base font-roboto-flex'>alexanderhales@gmail.com</p>
            </div>
            <div className='flex flex-row gap-4 items-center'>
              <Image src="/location.svg" alt=''
                layout='intrinsic' width={20} height={20} />
              <p className='text-base font-roboto-flex'>alexanderhales@gmail.com</p>
            </div>

          </div>
          <p className='text-lg font-mono'>Social Links</p>
          <div className='flex flex-row gap-2 items-center'>
            <div className='p-3 bg-gray-200 cursor-pointer 
             hover:bg-slate-950'>
              <AiFillGithub fontSize={25} color='white'
                onClick={() => {
                  window.open("https://www.facebook.com/palash.darokar.7", '_blank', 'noopener,noreferrer');

                }}
              /></div>
            <div className='p-3 bg-gray-200 cursor-pointer 
             hover:bg-slate-950'>
              <FaLinkedinIn fontSize={25} color='white'
                onClick={() => {
                  window.open("https://www.facebook.com/palash.darokar.7", '_blank', 'noopener,noreferrer');

                }}
              /></div><div className='p-3 bg-gray-200 cursor-pointer 
             hover:bg-slate-950'>
              <FiFacebook fontSize={25} color='white'
                onClick={() => {
                  window.open("https://www.facebook.com/palash.darokar.7", '_blank', 'noopener,noreferrer');

                }}
              /></div><div className='p-3 bg-gray-200 cursor-pointer 
             hover:bg-slate-950'>
              <SiGmail fontSize={25} color='white'
                onClick={() => {
                  window.open("https://www.facebook.com/palash.darokar.7", '_blank', 'noopener,noreferrer');

                }}
              /></div>

          </div>

        </div>
      </div>
      <div className='flex flex-row absolute bottom-0  
      bg-transparent p-5 w-full h-max 
      justify-between px-12  
      border-white 
      border-t
      border-solid
      border-l-0 border-r-0 border-b-0'>
        <div className='flex flex-row gap-1'>
          <p className='text-base font-mono'>alexander hales</p>
          <div className='w-[1px] h-full bg-white'/>
          <p className='text-base font-roboto-flex'>Copyright @ 2023. All rights reserved</p>
        </div>
        <p className='text-base font-mono'>Awesome Template by ProBuilder.</p>
      </div>
    </div>)
}

export default Contact
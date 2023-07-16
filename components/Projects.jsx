"use client"
import Image from 'next/image'
import React from 'react'

const Projects = () => {
  return (
    <div className='flex flex-col w-full h-full px-32 pt-10'>
      <p className='text-center text-lg font-mono'>Projects i built with a motive</p>
      <p className='text-center text-base font-roboto-flex'>Lets have a look at  some of mine awesome projecs i built over the timebeing</p>
      <div className='flex flex-wrap mt-10 gap-6'>
        <ProjectCard src="/proj1.png" />
        <ProjectCard src="/proj2.png" />
        <ProjectCard src="/proj1.png" />
        <ProjectCard src="/proj1.png" />
      </div>
    </div>
  )
}

export default Projects

const ProjectCard = ({ src }) => {
  return (
    <div className='relative cursor-pointer'>
      <Image src={src} alt=''
        className='brightness-50'
        layout='intrinsic'
        width={600}
        height={600}
      />
      <div className='absolute bottom-0 flex flex-col w-full h-min px-10	gap-4 py-14 proj'>
        <p className='text-white text-lg font-mono'>Designer App</p>
        <p className='text-white text-base font-roboto-flex'>Where i can create anything they want ato anythigWhere ie can create anything t
          hey want ato anythig Where ie can create anything they want to anythig</p>
        <div className='flex flex-row gap-3'>
          <div className='cursor-pointer p-4 font-mono bg-gray-100 text-white'>
            Live Demo
          </div>
          <div className='cursor-pointer p-4 font-mono bg-gray-100 text-white'>
            Source Code
          </div>

        </div>
      </div>
    </div>
  )
}
import React from 'react'

const Skills = () => {
  return (
    <div className='flex flex-col w-full h-full px-32 pt-10'>
      <p className='text-center text-lg font-mono'>Skills i learned over the years</p>
      <p className='text-center text-base font-roboto-flex'>Lets explore my skills </p>
      <div className='flex flex-row mt-10 gap-10 justify-center'>
        <div className='cursor-pointer p-4 font-mono bg-gray-100 text-white'>
          Technical Skills
        </div>
        <div className='cursor-pointer p-4 font-mono bg-gray-100 text-white'>
          Interpersonal
        </div>
        <div className='cursor-pointer p-4 font-mono bg-gray-100 text-white'>
          Softwares
        </div>
      </div>
      <div className='w-full h-full flex flex-wrap mt-10  justify-center'>
        <Skillscom />
        <Skillscom />
        <Skillscom />
        <Skillscom />
        <Skillscom />
        <Skillscom />
        <Skillscom />

      </div>


    </div>)
}

export default Skills;


const Skillscom = () => {
  return (
    <div className='flex flex-col w-1/4 m-5'>
      <p className='text-base font-mono'>Python</p>
      <div className='w-full bg-gray-100 h-2 rounded-xl mt-2'>
        <div className='bg-blue-500 h-full w-2/3 rounded-xl'></div>
      </div>
    </div>
  )
}
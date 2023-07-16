import React from 'react'

const Experience = () => {
  return (
    <div className='flex flex-col w-full h-full px-32 pt-10'>
      <p className='text-center text-lg font-mono'>Check my Experience</p>
      <p className='text-center text-base font-roboto-flex mt-5'>Lets see how much experienc eis  - you want it right</p>
      <div className='flex flex-col px-10 items-center mt-11'>
        <ExpRow />
        <ExpRow />
        <ExpRow />
        <ExpRow />
        <ExpRow />
      </div>


    </div>)
}

export default Experience;

const ExpRow = () => {
  return (
    <div className='flex flex-row w-3/4 relative'>
      <div className='flex flex-col w-1/4 
      max-h-max
      items-end p-4
      justify-center
      border border-solid border-blueviolet-100 
      border-opacity-60'>
        <p>May 2022 -July 2023</p>
        <p>(13m)</p>
      </div>
      <div className='absolute bg-blueviolet-100 w-5 rounded-full left-[24%] h-5 top-[45%]'></div>
      <div className='flex flex-col w-3/4 border border-solid 
      border-blueviolet-100 border-opacity-60
      p-4 gap-4 '>
        <p className='text-3xl font-mono'>Lead System Architect</p>
        <span className='flex flex-row gap-4'>
          <p className='text-base font-roboto-flex'>Zerodha Incorporation</p>
          <p className='text-base font-roboto-flex'>• Bengaluru, Karnataka India</p>
        </span>
        <p className='text-base font-roboto-flex leading-6'>
          Revolutionised the way Amazon resolves post ordering customers issues, like damaged or defective item, late delivery etc. Simplified the platform customer service agents [CSAs] use to engage with Amazon`s Retail and Digital customers.
        </p>
      </div>
    </div>
  )
}
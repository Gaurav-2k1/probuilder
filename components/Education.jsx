import React from 'react'

const Education = () => {
  return (
    <div className='flex flex-col w-full h-full px-32 mt-28'>
      <p className='text-center text-lg font-mono'>Eduction Time</p>
      <p className='text-center text-base font-roboto-flex mt-5'>This is where i did anything and no one disturbed </p>
      <div className='flex flex-col px-10 items-center mt-11'>
        <EduRow />
        <EduRow />
      </div>


    </div>)
}

export default Education;

const EduRow = () => {
  return (
    <div className='flex flex-row w-3/4 relative'>
      <div className='flex flex-col w-1/4 
      max-h-max
      items-end p-4
      justify-center
      border border-solid border-blueviolet-100 
      border-opacity-60'>
        <p>August 2017 -August 2018</p>
        <p>(12m)</p>
      </div>
      <div className='absolute bg-blueviolet-100 w-5 rounded-full left-[24%] h-5 top-[45%]'></div>
      <div className='flex flex-col w-3/4 border border-solid 
      border-blueviolet-100 border-opacity-60
      p-4 gap-4 '>
        <p className='text-3xl font-mono'>12th Board HSC</p>
        <span className='flex flex-row gap-4'>
          <p className='text-base font-roboto-flex'>Vasantrao Naik Mahavidyalay</p>
          <p className='text-base font-roboto-flex'>• Aurangabad, Maharashtra</p>
        </span>
        <p className='text-base font-roboto-flex leading-6'>
          Revolutionised the way Amazon resolves post ordering customers issues, like damaged or defective item, late delivery etc. Simplified the platform customer service agents [CSAs] use to engage with Amazon`s Retail and Digital customers.
        </p>
      </div>
    </div>
  )
}
import Image from 'next/image'
import React from 'react'

const Achievements = () => {
  return (
    <div className='flex flex-col w-full h-full px-32 mt-28'>
      <p className='text-center text-lg font-mono'>My Achievements and Accolades</p>
      <p className='text-center text-base font-roboto-flex mt-5'>Some of my goood memeories</p>
      <div className='flex flex-wrap w-full gap-6 justify-center mt-10'>
        <AchievementCard />
        <AchievementCard />
        <AchievementCard />
        <AchievementCard />
        <AchievementCard />
        <AchievementCard />
      </div>


    </div>)
}

export default Achievements

const AchievementCard = () => {
  return (
    <div className='flex w-1/4 h-32 relative border border-solid border-gray-100 
    border-opacity-60 items-center px-5'>
      <p className='text-[12px] font-roboto-flex w-4/5'>Achived 1st position in Final year of 2023 Engineering
      </p>
      <div className='w-max h-max absolute 
      top-0 right-0 flex justify-center p-4
      bg-gray-300 rounded-bl-lg'>
        <Image
          src="/achv.svg"
          alt=""
          layout='intrinsic'
          width={30}
          height={30}
          objectFit='contain'
        />
      </div>
    </div>
  )
}
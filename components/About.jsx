import React from 'react'
import Image from 'next/image'
const About = () => {
    return (
        <div className='flex flex-row w-full h-full py-10'>
            <div className='w-1/2 h-full flex justify-center items-center p-5 relative'>
                <div className='
                    border border-blueviolet-100 
                    border-opacity-80 border-solid flex 
                    items-center 
                    justify-center p-3'>
                    <Image src="/aboutimg.png"
                        className=''
                        alt=''
                        layout='intrinsic'
                        objectPosition='bottom'
                        objectFit='contain'
                        width={300}
                        height={300}
                    />
                </div>


            </div>
            <div className='flex flex-col w-1/2 gap-5'>
                <p className='mt-10 text-12xl font-mono'>About Me</p>
                <p className='w-2/3 font-roboto-flex text-base'>
                    I am a recent computer science graduate from Indiana University Bloomington, equipped with a strong foundation of technical expertise and practical experience. In my previous role at Accenture, I honed my skills in agile software development and REST API integration. Proficient in both frontend and backend development, I am eager to leverage my abilities in a full-time software engineering role. My technical abilities include programming languages such as Java, Python, and JavaScript, as well as frameworks like React.js and Spring Boot. I am well-versed in database technologies like MySQL and MongoDB and experienced in version control tools like Git and GitHub. But my passions extend beyond just code. In my free time, I enjoy playing guitar, sketching portraits, and cooking. I have even pursued my love of music as a freelance producer, collaborating with other musicians on various projects.
                </p>

            </div>
        </div>
    )
}

export default About
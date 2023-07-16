import React from 'react'
import Link from 'next/link'
const Navbar = () => {
    const menu = [
        {
            name: "Home"
        },
        {
            name: "About"
        },
        {
            name: "Skills"
        },
        {
            name: "Experience"
        },
        {
            name: "Education"
        },
        {
            name: "Achiements"
        },

        {
            name: "Contact"
        }, {
            name: "Download CV"
        }

    ]
    return (
        <div className='flex flex-row items-center 
         justify-between px-10 bg-[#030d1c] h-20 text-white 
         fixed z-50 w-full '>
            <Link className='ml-5 no-underline text-2xl font-mono text-white' href="/">Alexander Hales</Link>
            <div className="flex flex-row gap-10">
                {
                    menu.map((m, i) => {
                        return (
                            <Link key={i} href="/" className="font-normal font-mono no-underline text-white">
                                {m.name}
                            </Link>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Navbar
import React, { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navbarLinks = [
        { id: 1, name: "Home", link: "#home" },
        { id: 2, name: "About", link: "#about" },
        { id: 3, name: "Skills", link: "#skills" },
        { id: 4, name: "My Projects", link: "#projects" },
    ]
    return (
        <header className='fixed z-30 top-0 bg-gradient-to-r from-purple-700 to-purple-500 left-0 w-full text-white' data-aos="fade-down" data-aos-delay='300'>
            <div className='container mx-auto flex items-center justify-between p-5'>
                {/* logo */}
                <a href='#home' className='text-4xl font-bold italic text-white'>Portfolio</a>

                {/* mobile menu */}
                <button className='md:hidden focus:outline-none ' onClick={() => setIsOpen(!isOpen)}>
                    <FiMenu className='w-8 h-8 text-white' />
                </button>

                <nav className='hidden md:flex items-center space-x-7'>
                    {navbarLinks.map((l) => (
                        <div key={l.id+new Date()} >
                            <a href={l.link} className='hover:text-gray-200 text-lg' >
                                {l.name}
                            </a>
                        </div>))}
                </nav>
                
                <button className='md:inline-flex hidden text-white border-white border-2 py-2 px-6 focus:outline-none hover:bg-purple-800 rounded-full text-lg'>
                    {" "}
                    Contact{" "}
                </button>

                {/* mobile navigation */}
                <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-[#801b9c] absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center space-y-8 pt-16`}>
                    <button className='absolute top-5 right-5 text-white' onClick={() => setIsOpen(false)}>
                        <FiX className='h-8 w-8' />
                    </button>
                    {
                        navbarLinks.map((l) => (<>
                            <a key={l.id} href={l.link} className='text-lg text-white hover:text-gray-300'
                                onClick={() => setIsOpen(false)}
                            > {l.name}
                            </a>
                        </>))
                    }
                    <button className='inline-flex text-white border-2 px-6 py-2 focus:outline-none hover:bg-purple-800 rounded-full text-lg'>
                        Contact
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Navbar
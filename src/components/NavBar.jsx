import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from "react-scroll"

const NavBar = () => {

  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'about' },
    { id: 3, link: 'portfolio' },
    { id: 4, link: 'experience' },
    { id: 5, link: 'contact' },
  ];

  return (
    <div className='fixed w-full h-20 z-50 bg-black/30 backdrop-blur-md border-b border-white/10 text-white'>

      <div className='flex justify-between items-center max-w-5xl mx-auto px-4 h-full'>

        {/* LOGO */}
        <a href="/" className='text-2xl font-bold tracking-wide'>
          Iqbaal
        </a>

        {/* DESKTOP MENU */}
        <ul className='hidden md:flex gap-8'>
          {links.map(({ id, link }) => (
            <li key={id}>
              <Link
                to={link}
                smooth
                duration={300}
                className="cursor-pointer capitalize text-gray-300 hover:text-cyan-400 transition duration-200"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>

        {/* MOBILE ICON */}
        <div
          onClick={() => setNav(!nav)}
          className='md:hidden cursor-pointer z-50 text-gray-300'
        >
          {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

      </div>

      {/* MOBILE MENU */}
      {nav && (
        <ul className='absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center gap-8 text-lg'>

          {links.map(({ id, link }) => (
            <li key={id}>
              <Link
                onClick={() => setNav(false)}
                to={link}
                smooth
                duration={300}
                className="capitalize text-gray-300 hover:text-cyan-400 transition"
              >
                {link}
              </Link>
            </li>
          ))}

        </ul>
      )}

    </div>
  )
}

export default NavBar
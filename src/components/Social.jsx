import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'


const Social = () => {

  const links = [
    {
      id: 1,
      icon: <FaGithub size={25} />,
      href: 'https://github.com/EvoVincere',
    },
    {
      id: 2,
      icon: <FaLinkedin size={25} />,
      href: 'https://www.linkedin.com/in/muhammad-iqbaal-hibatullah/',
    },
    {
      id: 3,
      icon: <HiOutlineMail size={25} />,
      href: 'mailto:iqbaal12345@gmail.com',
    },
    
  ]

  return (
    <div className="flex gap-5 mt-4 text-white">
      {links.map(({ id, icon, href, download }) => (
        <a
          key={id}
          href={href}
          target="_blank"
          rel="noreferrer"
          download={download}
          className="hover:scale-110 transition duration-200"
        >
          {icon}
        </a>
      ))}
    </div>
  )
}

export default Social
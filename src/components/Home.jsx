import React from 'react'
import photopp from '../assets/iqbaal_blur.png'
import { RiArrowRightSLine } from "react-icons/ri"
import { Link } from 'react-scroll'
import Social from './Social'

const Home = () => {
  return (
    <div name="home" className='pt-20 min-h-screen w-full bg-gradient-to-b from-blue-950 via-blue-950 to-gray-800'>
      
      <div className='max-w-screen-lg mx-auto flex flex-col-reverse md:flex-row items-center justify-center min-h-screen px-4 gap-10'>

        {/* LEFT CONTENT */}
        <div className='flex flex-col justify-center text-center md:text-left'>

          {/* Greeting */}
          <p className='text-gray-400 text-sm mb-2'>
            Hello 👋 I'm
          </p>

          {/* Name */}
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight'>
            Muhammad <span className='text-cyan-400'>Iqbaal</span> <br />
            Hibatullah
          </h1>

          {/* Role */}
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-300 mt-3">
            Cloud / DevOps Enthusiast
          </h2>

          {/* Description */}
          <p className='text-gray-400 mt-4 max-w-md mx-auto md:mx-0 leading-relaxed'>
            Building and deploying scalable applications on AWS using Terraform, Docker, and CI/CD pipelines.
          </p>

          {/* Social */}
          <Social />

          {/* CTA Buttons */}
          <div className='flex gap-4 mt-6 justify-center md:justify-start'>

            <Link
              to='portfolio'
              smooth
              duration={300}
              className='group flex items-center gap-1 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-500 text-white rounded-md cursor-pointer hover:scale-105 transition'
            >
              View Projects
              <RiArrowRightSLine size={20} className='group-hover:rotate-90 transition duration-300' />
            </Link>

            <a
              href='/Muhammad Iqbaal Hibatullah resume 2026 v4.pdf'
              download
              className='px-6 py-3 border border-gray-400 text-gray-300 rounded-md hover:bg-gray-700 hover:text-white transition'
            >
              Download CV
            </a>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className='flex justify-center'>
          <img
            src={photopp}
            alt="profile"
            className='w-2/3 sm:w-1/2 md:w-80 rounded-2xl shadow-lg hover:scale-105 transition duration-300'
          />
        </div>

      </div>
    </div>
  )
}

export default Home
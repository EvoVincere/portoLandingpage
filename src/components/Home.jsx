import React from 'react'
import photopp from '../assets/iqbaal_blur.png'
import {RiArrowRightSLine} from "react-icons/ri"
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-blue-950 via-blue-950 to-gray-800'>   
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h1 className='text-base font-semibold text-white md:text-xl'>
                    Hello everyone 👋 , I'm <span className='block font-bold text-light text-4xl mt-1 lg:text-5xl'>Muhammad Iqbaal Hibatullah</span>
                </h1>
                <h2 className="text-4xl sm:text-5xl font-bold text-white">
                    Fresh Graduate 
                </h2>
                <p className='text-gray-500 py-4 max-w-md'>
                    I have high enthusiasm for the <span className='text-light'> React</span> framework 
                </p>
                <div>
                    <Link to='portfolio' smooth duration={300} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-600 to-blue-500 cursor-pointer'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                            <RiArrowRightSLine size={23} className='ml-1'/>
                        </span>
                    </Link>
                </div>
            </div>
            <div>
                <img src={photopp} alt="photopp" className='rounded-2xl mx-auto w-2/3 md:w-3/4' />
            </div>
        </div>

    </div>
  )
}

export default Home
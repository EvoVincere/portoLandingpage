import React from 'react'
import photopp from '../assets/heroImage.jpg'
import {RiArrowRightSLine} from "react-icons/ri"

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-blue-950 via-blue-950 to-gray-800'>   
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                    Hello im Iqbaal
                </h2>
                <p className='text-gray-500 py-4 max-w-md'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Minima illum recusandae maxime provident iusto, sint in minus repellendus facere molestiae tempora totam, vel perferendis omnis consequatur. Consequatur nesciunt fuga dicta!
                </p>
                <div>
                    <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-600 to-blue-500 cursor-pointer'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                            <RiArrowRightSLine size={23} className='ml-1'/>
                        </span>
                    </button>
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
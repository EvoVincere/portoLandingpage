import React from 'react'
import threadapp from '../assets/threadsapp.png'
import tukerin from '../assets/tukerin.png'
import carhub from '../assets/carhub.png' 
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      name: "Thread app",
      src: threadapp,
      href:'https://threadsapp-xi.vercel.app/',
      code: 'https://github.com/EvoVincere/threadsapp',
    },
    {
      id: 2,
      name: "Tukerin",
      src: tukerin,
      href:'https://tukerinapp.netlify.app/',
      code: 'https://github.com/EvoVincere/Tukerin'
    },
    {
      id: 3,
      name: "CarHub",
      src: carhub,
      href:'https://porto-ke-1.vercel.app/',
      code: 'https://github.com/EvoVincere/porto'
    }
    
  ]
  return (
    <div name="portfolio" className='bg-gradient-to-b
     from-black to-gray-950 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out some of my work right here</p>
            </div>
            
              <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                {
                portfolios.map(({id, src, name, href, code}) => (
                  <div key={id} className='shadow-md shadow-gray-600 rounded-lg duration-500 hover:scale-105'>
                    <p className='text-light w-1/2 px-6 py-3'>{name}</p>
                  <img src={src} alt='threadapp' className='rounded-md'/>
                  <div className='flex items-center justify-center'>
                    <a href={href} className='w-1/2 px-6 py-3 m-4 duration-500 hover:scale-110'>Demo</a>
                    <a href={code} className='w-1/2 px-6 py-3 m-4 duration-500 hover:scale-110'>Code</a>
                  </div>
                </div>
                ))
            }
                
              </div>
        </div>
    </div>
  )
}

export default Portfolio
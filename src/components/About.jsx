import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen 
    bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 
        mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    About
                </p>
            </div>
            <p className='text-xl mt-20'>
                Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Tenetur quas nemo aperiam at! 
                Deserunt similique aliquid doloribus eum sint repellat 
                fugiat reiciendis. Asperiores saepe quis dolor enim omnis iure nam?
            </p>
            
            <p className='text-xl mt-4'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Quibusdam nostrum ipsa expedita maiores consequatur explicabo adipisci aperiam repellendus, 
                voluptas corrupti libero ut fugiat blanditiis placeat quidem tempore pariatur, iusto odio.
            </p>
        </div>
    </div>
  )
}

export default About
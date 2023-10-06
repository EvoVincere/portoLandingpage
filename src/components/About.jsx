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
            I am a fresh graduate of S1 Computer Engineering from Telkom University Bandung with a GPA of 3.31. During my 4 years of college, 
            I actively participated in various events in student organizations and one of them was the logistics coordinator at the Telkom Esport Championship event in 2021. 
            I was also a practicum assistant for network security in the 2022-2023 period. I am also an alumni of the MSIB Dicoding Batch 3 program Front End React Developer program in 2022. 
            Currently, I am very interested in gaining experience in the field of web development, especially the react framework.
            </p>
        </div>
    </div>
  )
}

export default About
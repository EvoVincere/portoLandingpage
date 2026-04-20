import React from 'react'

const Contact = () => {
  return (
    <section
      name='contact'
      className='w-full bg-gradient-to-b from-gray-800 to-blue-950 text-white py-24'
    >
      <div className='max-w-4xl mx-auto px-4'>

        {/* HEADER */}
        <div className='text-center mb-12'>
          <p className='text-sm uppercase tracking-widest text-cyan-400'>
            Contact
          </p>
          <h2 className='text-4xl md:text-5xl font-bold mt-2'>
            Let's Work Together
          </h2>
          <p className='text-gray-400 mt-4 max-w-xl mx-auto'>
            I'm currently open to opportunities as a Cloud / DevOps Engineer. 
            Feel free to reach out for collaboration or discussion.
          </p>
        </div>

        {/* CONTACT CARD */}
        <div className='bg-gray-900 rounded-xl p-8 shadow-lg'>

          {/* QUICK CONTACT */}
          <div className='mb-8 text-center space-y-2'>
            <p className='text-gray-300'>
              📧 iqbaal12345@gmail.com
            </p>
            <p className='text-gray-300'>
              💼 linkedin.com/in/muhammad-iqbaal-hibatullah
            </p>
          </div>

          {/* FORM */}
          <form
            action="https://getform.io/f/e3a722e4-edb7-447b-8ba5-21b984cf88a2"
            method='POST'
            className='flex flex-col gap-4'
          >
            <input 
              type="text" 
              name='name'
              placeholder='Your Name'
              required
              className='p-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:border-cyan-500'
            />

            <input 
              type="email" 
              name='email' 
              placeholder='Your Email'
              required
              className='p-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:border-cyan-500'
            />

            <textarea
              name="message"
              rows="6"
              placeholder='Your Message'
              required
              className='p-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:border-cyan-500'
            ></textarea>

            <button
              type="submit"
              className='mt-4 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-500 rounded-md font-medium hover:scale-105 transition duration-300'
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  )
}

export default Contact
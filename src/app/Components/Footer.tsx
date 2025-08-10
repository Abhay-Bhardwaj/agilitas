import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className='flex flex-col'>
      {/* Main Footer */}
      <div className='bg-[#131313] px-8 py-16 md:px-16 text-white'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-12'>
          {/* Left Section - Logo */}
          <div className='flex-shrink-0'>
            <Image src='/footer_logo.svg' alt='Agilitas Logo' width={180} height={180} className='h-[180px] w-auto' />
          </div>

          {/* Middle Section - Navigation Links */}
          <div className='flex flex-row gap-8 md:gap-16 flex-grow'>
            {/* First Column */}
            <div className='flex flex-col space-y-4'>
              <a href='/about' className='text-sm hover:underline transition-all duration-200'>About Us</a>
              <a href='/what-we-do' className='text-sm hover:underline transition-all duration-200'>What we do</a>
              <a href='/inside-agilitas' className='text-sm hover:underline transition-all duration-200'>Inside Agilitas</a>
            </div>

            {/* Second Column */}
            <div className='flex flex-col space-y-4'>
              <a href='/join-the-team' className='text-sm hover:underline transition-all duration-200'>Join the Team</a>
              <a href='/media' className='text-sm hover:underline transition-all duration-200'>Media</a>
              <a href='/blogs' className='text-sm hover:underline transition-all duration-200'>Blogs (Coming Soon)</a>
            </div>
          </div>

          {/* Right Section - Contact Info */}
          <div className='flex-shrink-0 max-w-sm'>
            <h3 className='text-lg font-medium mb-4'>Stay in the Loop. Move with Us.</h3>
            
            <div className='flex flex-row gap-6 mb-6'>
              {/* Email */}
              <div className='flex flex-col'>
                <p className='text-sm font-medium mb-1'>Email</p>
                <a href='mailto:info@agilitas.in' className='text-sm hover:underline'>info@agilitas.in</a>
              </div>

              {/* Corporate Address */}
              <div className='flex flex-col'>
                <p className='text-sm font-medium mb-1'>Corporate address</p>
                <p className='text-sm leading-relaxed'>
                  Roshini Tech Hub,<br />
                  PFS Club House,<br />
                  Marathahalli Main Rd,<br />
                  Lakshminarayana Pura,<br />
                  EPIP Zone, Chinnapanna Halli,<br />
                  Bengaluru, Karnataka 560037
                </p>
                <a href='#' className='text-sm mt-2 hover:underline flex items-center gap-1'>
                  🧭 Get directions
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Follow Us Section */}
        <div className='mt-12 pt-8 border-t border-gray-600'>
          <div className='flex flex-col md:flex-row justify-between items-start gap-6'>
            {/* Follow Us */}
            <div className='flex items-center gap-4'>
              <span className='text-[20px]'>Follow us</span>
              <div className='flex items-center gap-3'>
                <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer' 
                   className='w-8 h-8  flex items-center justify-center hover:cursor-pointer'>
                  <Image src='/linkedin.svg' alt='LinkedIn' width={24} height={24} className='w-6 h-6' />
                </a>
                <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'
                   className='w-8 h-8 flex items-center justify-center hover:cursor-pointer'>
                  <Image src='/instagram.svg' alt='Instagram' width={24} height={24} className='w-6 h-6' />
                </a>
                <a href='https://youtube.com' target='_blank' rel='noopener noreferrer'
                   className='w-8 h-8  flex items-center justify-center  transition-colors'>
                  <Image src='/youtube.svg' alt='YouTube' width={24} height={24} className='w-6 h-6' />
                </a>
              </div>
            </div>

            {/* Company Description */}
            <div className='text-sm text-gray-300 max-w-md'>
              <p>Comprehensively building the entire value chain from manufacturing to retail</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className='bg-white px-8 py-4 md:px-16'>
        <div className='flex flex-col md:flex-row items-center gap-2 text-sm text-black'>
          <p>© 2025 Agilitas All rights reserved.</p>
          <div className='flex items-center gap-2'>
            <a href='/terms' className='border-l border-black pl-2 underline hover:no-underline'>Terms of Use</a>
            <a href='/privacy' className='border-l border-black pl-2 underline hover:no-underline'>Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  )
}
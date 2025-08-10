"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import logo from '@/assets/logo.png'

// Animation variants
const navbarVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
}

const logoVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, delay: 0.2 }
  }
}

const menuVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, delay: 0.3 }
  }
}

const mobileMenuVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { 
    opacity: 1, 
    height: 'auto',
    transition: { duration: 0.4 }
  },
  exit: { 
    opacity: 0, 
    height: 0,
    transition: { duration: 0.3 }
  }
}

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const menuItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4 }
  }
}

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const menuItems = [
    'About Us',
    'What Do we Do?', 
    'Inside Agilitas',
    'Join the team',
    'Media'
  ]

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-0 md:py-6 md:flex md:justify-center"
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
    >
      {/* Main navbar container */}
      <motion.div 
        className="flex justify-between md:justify-center items-center h-[60px] md:h-[70px] bg-black/40 backdrop-blur-md text-white px-4 md:px-6 border border-white/20 md:w-auto"
        whileHover={{ 
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          transition: { duration: 0.3 }
        }}
      >
        {/* Logo */}
        <motion.div
          variants={logoVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <Image 
            src={logo} 
            alt="Agilitas Logo" 
            width={120}
            height={40}
            className="h-8 md:h-10 w-auto object-contain"
            priority={true}
            quality={90}
          />
        </motion.div>

        {/* Desktop Menu - Positioned next to logo */}
        <motion.div 
          className="hidden md:flex items-center ml-6"
          variants={menuVariants}
        >
          {/* Divider */}
          <motion.div 
            className='border-l border-[#F5F5F5] h-10 mr-6'
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          />
          
          {/* Menu Items */}
          <motion.ul 
            className="text-[16px] lg:text-[18px] font-medium text-[#F5F5F5] flex space-x-4 lg:space-x-6"
            variants={staggerContainer}
          >
            {menuItems.map((item, index) => (
              <motion.li 
                key={index}
                variants={menuItemVariants}
                whileHover={{ 
                  scale: 1.05,
                  color: '#ffffff',
                  transition: { duration: 0.2 }
                }}
                className="cursor-pointer hover:text-white transition-colors duration-200"
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Mobile Hamburger Menu */}
        <motion.div 
          className="md:hidden"
          variants={menuVariants}
        >
          <motion.button
            onClick={toggleMenu}
            className="flex flex-col justify-center items-center w-8 h-8 relative"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="w-6 h-0.5 bg-white absolute"
              animate={isMenuOpen ? 
                { rotate: 45, y: 0 } : 
                { rotate: 0, y: -6 }
              }
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-white"
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-white absolute"
              animate={isMenuOpen ? 
                { rotate: -45, y: 0 } : 
                { rotate: 0, y: 6 }
              }
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden mt-2 bg-black/90 backdrop-blur-md border border-white/20 overflow-hidden"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
          >
            <motion.ul 
              className="py-4 px-6 space-y-4"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {menuItems.map((item, index) => (
                <motion.li
                  key={index}
                  variants={menuItemVariants}
                  className="text-[#F5F5F5] text-lg font-medium cursor-pointer py-2 border-b border-white/10 last:border-b-0"
                  whileHover={{ 
                    x: 10,
                    color: '#ffffff',
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}


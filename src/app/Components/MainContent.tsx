"use client"

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  heroImage,
  traditionImage1,
  traditionImage2,
  traditionImage3,
  comingSoonImage1,
  comingSoonImage2,
  comingSoonImage3,
  jointMovementImage1,
  jointMovementImage2,
  gridImage1,
  gridImage2,
  gridImage3,
  gridImage4
} from '@/components/page_Images'

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8 }
  }
}

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8 }
  }
}

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8 }
  }
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.6 }
  }
}

function LinkIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className="w-5 h-5"
      {...props}
    >
      <path d="M22.5625 11.1875C22.347 11.1875 22.1403 11.2731 21.988 11.4255C21.8356 11.5778 21.75 11.7845 21.75 12V19.3125C21.75 19.959 21.4932 20.579 21.0361 21.0361C20.579 21.4932 19.959 21.75 19.3125 21.75H4.6875C4.04103 21.75 3.42105 21.4932 2.96393 21.0361C2.50681 20.579 2.25 19.959 2.25 19.3125V4.6875C2.25 4.04103 2.50681 3.42105 2.96393 2.96393C3.42105 2.50681 4.04103 2.25 4.6875 2.25H12C12.2155 2.25 12.4222 2.1644 12.5745 2.01202C12.7269 1.85965 12.8125 1.65299 12.8125 1.4375C12.8125 1.22201 12.7269 1.01535 12.5745 0.862976C12.4222 0.710602 12.2155 0.625 12 0.625H4.6875C3.61006 0.625 2.57675 1.05301 1.81488 1.81488C1.05301 2.57675 0.625 3.61006 0.625 4.6875V19.3125C0.625 20.3899 1.05301 21.4233 1.81488 22.1851C2.57675 22.947 3.61006 23.375 4.6875 23.375H19.3125C20.3899 23.375 21.4233 22.947 22.1851 22.1851C22.947 21.4233 23.375 20.3899 23.375 19.3125V12C23.375 11.7845 23.2894 11.5778 23.137 11.4255C22.9847 11.2731 22.778 11.1875 22.5625 11.1875Z" fill="currentColor"/>
      <path d="M16.8758 2.25001H20.6052L11.4239 11.4231C11.3478 11.4987 11.2873 11.5885 11.2461 11.6875C11.2048 11.7866 11.1836 11.8928 11.1836 12C11.1836 12.1073 11.2048 12.2135 11.2461 12.3125C11.2873 12.4115 11.3478 12.5014 11.4239 12.5769C11.4995 12.653 11.5893 12.7135 11.6883 12.7547C11.7873 12.796 11.8935 12.8172 12.0008 12.8172C12.1081 12.8172 12.2143 12.796 12.3133 12.7547C12.4123 12.7135 12.5021 12.653 12.5777 12.5769L21.7508 3.40376V7.12501C21.7508 7.3405 21.8364 7.54716 21.9888 7.69954C22.1412 7.85191 22.3478 7.93751 22.5633 7.93751C22.7788 7.93751 22.9855 7.85191 23.1378 7.69954C23.2902 7.54716 23.3758 7.3405 23.3758 7.12501V1.43751C23.3764 1.33058 23.3559 1.22458 23.3155 1.12559C23.2751 1.0266 23.2155 0.936559 23.1402 0.860639C23.0643 0.785335 22.9742 0.725758 22.8752 0.685324C22.7762 0.644891 22.6702 0.624395 22.5633 0.625014H16.8758C16.6603 0.625014 16.4537 0.710616 16.3013 0.862989C16.1489 1.01536 16.0633 1.22203 16.0633 1.43751C16.0633 1.653 16.1489 1.85966 16.3013 2.01204C16.4537 2.16441 16.6603 2.25001 16.8758 2.25001Z" fill="currentColor"/>
    </svg>
  )
}

export default function MainContent() {

  const traditionData=[{
    title:"Sport & Swagger",
    des:"Function first, fashion-always.",
    img:traditionImage1
  },
  {
    title:"Culture in Motion",
    des:"Rewriting culture through rhythm, rebellion and raw expression.",
    img:traditionImage2
  },
  {
    title:"Live in Motion",
    des:"Made to move in all the ways that feel like you.",
    img:traditionImage3
  }
  ]

  const comingSoonData = [
    {
      title: "Run Club Meetup ",
      time: "Jun 25, 10 am",
      des:"Join local runners for a 5K, gear trials, and post-run smoothies.",
      img:comingSoonImage1
    },
    {
      title: "Custom Kicks Day ",
      time: "Jun 26, 6 PM",
      des:"Design your pair. Add your name. Walk out with a one-of-one.",
      img:comingSoonImage2
    },
    {
      title: "Football Weekend ",
      time: "Jun 28-29, 11 am ",
      des:"Join us for skill challenges, mini matches, & the launch of our latest turf-ready kicks.",
      img:comingSoonImage3
    }
  ]


  return (
    <motion.div 
      className='w-screen max-w-full overflow-hidden'
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {/* Hero Content Section */}
      <motion.div 
        className='relative mb-40'
        variants={fadeInUp}
      >
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Image 
            src={heroImage} 
            alt="Main Content" 
            width={1920}
            height={700}
            className="w-full max-w-full h-[700px] object-cover object-[5%_20%]"
            priority={true}
            quality={60}
            
          />
        </motion.div>
        <motion.p 
          className='absolute bottom-[150px] right-0 pr-10 text-right text-[#F5F5F5] text-[32px] md:font-bold md:text-[64px] text-shadow-[0_4px_4px_rgba(0,0,0,0.5)]'
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          A Whole Lotto Joy
        </motion.p>
        <motion.div 
          className="absolute bottom-[-125px] right-0 flex items-center w-11/12 h-[190px] bg-[#00282D] clip-triangle"
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          <p className='mx-[60px] md:mx-[140px] text-[16px] font-[500] md:text-[28px] md:font-medium text-white'>
            Lotto is stepping into its new era with Agilitas as its compass.
            A journey that is familiar, reborn with a new purpose.
          </p>
        </motion.div>
         <motion.div 
           className="absolute bottom-[-125px] right-0 flex items-center w-2/12 h-[190px] bg-[#1D1BFB] clip-shape-triangle"
           initial={{ opacity: 0, x: 150 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
         />
      </motion.div>
      {/* Tradition Section */}
      <motion.div 
        className='py-20 px-4 text-black text-center'
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={fadeInUp}>
          <p className='text-[36px] font-[600] '>Tradition in Transition</p>
          <p className='font-[400] text-[18px]'>Reimagining a legacy fit to move with you</p>
        </motion.div>
        <motion.div 
          className='flex flex-col mx-8 md:mx-0 md:flex-row md:gap-0 justify-center mt-8 gap-8'
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {traditionData?.map((item, index) => (
            <motion.div 
              key={index} 
              className='flex flex-col items-center'
              variants={scaleIn}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className='mb-4 w-[90vw] max-w-[410px] h-[450px] overflow-hidden clip-triangle'
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.4 }
                }}
              >
                <Image 
                  src={item.img} 
                  alt={item.title} 
                  width={410}
                  height={450}
                  className='w-full h-full object-cover'
                />
              </motion.div>
              <p className='text-[28px] font-[700] '>{item.title}</p>
              <p className='text-[18px] font-[400] px-8'>{item.des}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      {/* Our Extra Section */}
      <motion.div 
        className='my-8 flex flex-col md:flex-row justify-between gap-0'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <motion.div 
          className='bg-black md:w-[45%] px-8 py-12 flex items-center'
          variants={fadeInLeft}
        >
          <p className='text-white font:[500] text-[28px] md:font-[600] md:text-[36px]'>
            Agilitas is turning up the volume on Lotto’s presence and creating momentum across markets. 
            In India, it’s not just part of the conversation—it’s writing the whole playbook.
          </p>
        </motion.div>
        <motion.div 
          className="md:w-[55%] flex flex-col h-full items-stretch"
          variants={fadeInRight}
        >
          <motion.div 
            className='flex flex-row h-1/2'
            variants={staggerContainer}
          >
            <motion.div 
              className="w-[35%] overflow-hidden"
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
                className='w-full h-full'
              >
                <Image 
                  src={gridImage1} 
                  alt="Grid Image 1"
                  width={300}
                  height={200}
                  className='w-full h-full object-cover'
                />
              </motion.div>
            </motion.div>
            <motion.div 
              className="w-[65%] overflow-hidden"
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
                className='w-full h-full'
              >
                <Image 
                  src={gridImage2}
                  alt="Grid Image 2"
                  width={500}
                  height={200}
                  className='w-full h-full object-cover'
                />
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div 
            className='flex flex-row h-1/2'
            variants={staggerContainer}
          >
            <motion.div 
              className=" w-[65%] overflow-hidden"
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
                className='w-full h-full'
              >
                <Image 
                  src={gridImage3}
                  alt="Grid Image 3"
                  width={500}
                  height={200}
                  className='w-full h-full object-cover'
                />
              </motion.div>
            </motion.div>
            <motion.div 
              className=" w-[35%] overflow-hidden"
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
                className='w-full h-full'
              >
                <Image 
                  src={gridImage4}
                  alt="Grid Image 4"
                  width={300}
                  height={200}
                  className='w-full h-full object-cover'
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Coming Soon Section End */}
      <motion.div 
        className='my-16 text-white'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <motion.h2 
          className='text-[36px] font-[600] text-center text-black'
          variants={fadeInUp}
        >
          Coming Soon
        </motion.h2>
          <motion.div variants={fadeInUp}>
            <Carousel opts={{ align: "start" }} className='mt-8'>
            <CarouselContent>
              {comingSoonData?.map((item, index) => (
              <CarouselItem key={index} className='relative mr-[-72px]  basis-[540px]'>
                <Image 
                  src={item.img} 
                  alt={item.title} 
                  width={520} 
                  height={400} 
                  className='mb-4 w-[520px] h-full object-cover object-left clip-triangle2' 
                  priority={true}
                  quality={60}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyLli2kjRaXvjSDCWgkj5cj/9k="
                />
                <div className='absolute left-20 bottom-[10px] w-full p-4 pr-24 text-left text-shadow-[1px_1px_10px_rgba(0,0,0,1)]'>
                  <p className='text-[28px] font-[500] '>{item.title}</p>
                  <p className='text-[28px] font-[500] '>{item.time}</p>
                  <p className='text-[16px] font-[400] '>{item.des}</p>
                </div>
              </CarouselItem>
              ))}
            </CarouselContent>
            </Carousel>
          </motion.div>
      </motion.div>      
      {/* join the Movement Section */}
      <motion.div 
        className='p-8'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <motion.p 
          className='text-[36px] font-[600] text-center text-black'
          variants={fadeInUp}
        >
          Join the Movement
        </motion.p>
        <motion.p 
          className='text-[18px] font-[400] text-center text-black my-2'
          variants={fadeInUp}
        >
          The next era is in motion - are you in?
        </motion.p>

        <motion.div 
          className='flex flex-col md:flex-row justify-center gap-8 md:gap-0 mt-8'
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >

          {/* First Box */}
          <motion.div 
            className='relative w-[90vw] max-w-[550px] aspect-[550/360] overflow-hidden clip-triangle'
            variants={fadeInLeft}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src={jointMovementImage1}
                alt="Join the Movement"
                fill
                className='w-full h-full object-cover object-top'
                loading="lazy"
                quality={60}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyLli2kjRaXvjSDCWgkj5cj/9k="
              />
            </motion.div>
            <p className='absolute inset-0 flex items-center justify-center text-white underline text-center px-4 drop-shadow-[0_6px_20px_rgba(0,0,0,1)]'>
              DISCOVER WHERE YOU FIT IN
            </p>
          </motion.div>

          {/* Second Box */}
          <motion.div 
            className='relative w-[90vw] max-w-[550px] aspect-[550/360] overflow-hidden clip-triangle md:ml-[-25px]'
            variants={fadeInRight}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src={jointMovementImage2}
                alt="Join the Movement"
                width={550}
                height={300}
                className='w-full h-full object-cover object-top'
                loading="lazy"
                quality={60}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyLli2kjRaXvjSDCWgkj5cj/9k="
              />
            </motion.div>
            <p className='absolute inset-0 flex items-center justify-center text-white underline text-center px-4 drop-shadow-[0_6px_20px_rgba(0,0,0,1)]'>
              VIBE WITH CREATORS WHO GET IT
            </p>
          </motion.div>

        </motion.div>
      </motion.div>

      {/* Latto Sport Section End */}
      <motion.div 
        className=''
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <motion.div 
          className=' bg-[#00282D] flex flex-col items-center justify-center py-10 m-4 md:m-16'
          variants={scaleIn}
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
        >
          <motion.p 
            className='text-[#FF004F] text-[26px] md:text-[36px] md:font-[600]'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore Lotto
          </motion.p>
          <motion.div 
            className='flex flex-row items-center justify-center text-white gap-2 mt-2 text-[24px] md:text-[26px] font-[500]'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a href="https://www.lottosport.in" target="_blank" rel="noopener noreferrer" className='text-white underline'>www.lottosport.in</a>
            <motion.div
              whileHover={{ rotate: 15, scale: 1.2 }}
              transition={{ duration: 0.2 }}
            >
              <LinkIcon/>
            </motion.div>
          </motion.div>
        </motion.div>
        
      </motion.div>

    </motion.div>
  )
}

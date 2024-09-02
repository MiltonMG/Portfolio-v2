'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion'
import { useState } from 'react'
import { BsArrowUpRight, BsGithub } from 'react-icons/bs'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from 'next/link';
import Image from 'next/image';

const colorMap = {
  red: 'hover:text-red-400',
  blue: 'hover:text-blue-400',
  green: 'hover:text-green-400',
  yellow: 'hover:text-yellow-400',
  purple: 'hover:text-purple-400',
  orange: 'hover:text-orange-400',
};

const projects = [
  {
    num: '01',
    category: 'Full Stack',
    title: 'Calendar of events',
    description: 'Calendar application that allows all users connected to the app to manage events (Created with: MERN)',
    stack: [
      { name: 'JavaScript', color: 'yellow' },
      { name: 'HTML', color: 'orange' },
      { name: 'CSS', color: 'blue' },
      { name: 'React', color: 'blue' },
      { name: 'Bootstrap', color: 'purple' },
      { name: 'MongoDB', color: 'green' },
      { name: 'Node JS', color: 'green' },
      { name: 'FireBase', color: 'yellow' },
    ],
    image: '/assets/work/calendar-app/calendar-app.png',
    live: 'https://calendar-app-portfolio.netlify.app/',
    github: 'https://github.com/MiltonMG/Calendar',
  },
  {
    num: '02',
    category: 'Front-End',
    title: 'Accounting page',
    description: 'The application consists of an income statement manager as a financial analysis tool for the company BANDESAL.',
    stack: [
      { name: 'JavaScript', color: 'yellow' },
      { name: 'HTML', color: 'orange' },
      { name: 'CSS', color: 'blue' },
      { name: 'Vue', color: 'green' },
      { name: 'Bootstrap', color: 'purple' },
    ],
    image: '/assets/work/accounting-app/accounting-application.png',
    live: 'https://bandesal.netlify.app/#/',
    github: 'https://github.com/MiltonMG/analisis_financiero_app2',
  },
]

const Work = () => {

  const [project, setProject] = useState(projects[0])

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 1.2,
          duration: 0.4,
          ease: "easeIn"
        }
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className='container mx-auto'>


        {
          projects.map((project, index) => {
            return (
              <div key={index} className={`flex flex-col-reverse xl:flex-row xl:gap-[30px] ${(index >= 1) ? "mt-[120px]" : ""}`}>
                <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>

                  <div>
                    {/* Outline num */}
                    <div class=" text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
                    {/* Project */}
                    <h2 className='text-5xl font-bold mb-3 text-accent'>{project.title}</h2>
                    {/* Category */}
                    <p className='text-[32px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>{project.category} Project</p>
                    {/* Description */}
                    <p className='text-white/60 mt-4'>{project.description}</p>
                    {/* Stack */}
                    <ul>
                      {
                        project.stack.map((stack, index) => {
                          const hoverColorClass = colorMap[stack.color] || 'hover:text-white'; // Clase predeterminada si no coincide
                          //Stacks need a library to handle the hover effect
                          //because the hover effect is not working using constants in the className  
                          return(
                          <li
                            key={index}
                            className={clsx(
                              "inline-block bg-[#333] hover:bg-black text-white text-sm mt-3 px-3 py-1 rounded-lg mr-2 cursor-pointer hover:transition-all duration-500",
                              hoverColorClass
                            )}
                  
                          >
                            {stack.name}
                          </li>
                          // <li key={index} className={`inline-block bg-[#333] text-white text-sm mt-3 px-3 py-1 rounded-lg mr-2 hover:text-${stack.color}-400 hover:transition-all duration-500 cursor-pointer`}>
                          //   {stack.name}
                          // </li>
                          )
                        })
                      }
                    </ul>
                    {/* border */}
                    <div className='border-b border-white/40 mt-6 mb-5'></div>
                    {/* Buttons */}
                    <div className='flex items-center gap-4 mb-10 xl:mb-0'>
                      {/* Live project button */}
                      <Link href={project.live} target='_blank'>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className='hover:bg-black transition-all duration-500 w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group hover:scale-[1.2]'>
                              <BsArrowUpRight className='text-white text-2xl group-hover:text-accent transition-all duration-500  hover:scale-[1.1]' />
                              <TooltipContent>Live Project</TooltipContent>
                            </TooltipTrigger>
                          </Tooltip>
                        </TooltipProvider>
                      </Link>
                      {/* Github project button */}
                      <Link href={project.github} target='_blank'>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className='hover:bg-black transition-all duration-500 w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group hover:scale-[1.2]'>
                              <BsGithub className='text-white text-2xl group-hover:text-accent transition-all duration-500 hover:scale-[1.1]' />
                              <TooltipContent>Github Repository</TooltipContent>
                            </TooltipTrigger>
                          </Tooltip>
                        </TooltipProvider>
                      </Link>
                    </div>

                  </div>

                </div>
                <div className='w-full xl:w-[50%]'>
                  <div className='h-[460px] relative group flex justify-center items-center bg-pink-50/20 rounded-xl cursor-pointer hover:scale-[0.98] transition-all duration-500'>
                    {/* Overlay */}
                    <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>
                    {/* image */}
                    <div className='relative w-full h-full'>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className='object-cover rounded-xl' />
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }

      </div>
    </motion.section>
  )
}

export default Work
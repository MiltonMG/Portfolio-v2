'use client';

import { motion } from 'framer-motion'
import { useState } from 'react'
import { BsArrowUpRight, BsGithub } from 'react-icons/bs'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    num: '01',
    category: 'Web Development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In',
    title: 'Project Title',
    stack: [
      { name: 'React', color: 'blue' },
      { name: 'Tailwind', color: 'light-blue' },
      { name: 'Framer Motion', color: 'purple' },
    ],
    image: '../../public/assets/work/project-1.jpg',
    live: 'https://www.google.com',
    github: 'https://www.google.com',
  },
  {
    num: '02',
    category: 'Web Development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In',
    title: 'Project Title',
    stack: [
      { name: 'React', color: 'blue' },
      { name: 'Tailwind', color: 'light-blue' },
      { name: 'Framer Motion', color: 'purple' },
    ],
    image: '../../public/assets/work/project-1.jpg',
    live: 'https://www.google.com',
    github: 'https://www.google.com',
  },
  {
    num: '03',
    category: 'Web Development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In',
    title: 'Project Title',
    stack: [
      { name: 'React', color: 'blue' },
      { name: 'Tailwind', color: 'light-blue' },
      { name: 'Framer Motion', color: 'purple' },
    ],
    image: '../../public/assets/work/project-1.jpg',
    live: 'https://www.google.com',
    github: 'https://www.google.com',
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
                <div key={index} className={`flex flex-col-reverse xl:flex-row xl:gap-[30px] ${ (index >= 1) ? "mt-[120px]": ""  }`}>
                  <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>

                    <div>
                      {/* Outline num */}
                      <div class=" text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
                      {/* Project */}
                      <h2 className='text-4xl font-bold mt-2 mb-3 text-accent'>{project.title}</h2>
                      {/* Category */}
                      <p className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>{project.category} Project</p>
                      {/* Description */}
                      <p className='text-white/60'>{project.description}</p>
                      {/* Stack */}
                      <ul>
                        {
                          project.stack.map((stack, index) => (
                            <li key={index} className='inline-block bg-[#333] text-white text-sm px-3 py-1 rounded-lg mr-2 hover:text-accent hover:transition-all duration-500 cursor-pointer'>
                              {stack.name}
                            </li>
                          ))
                        }
                      </ul>
                      {/* border */}
                      <div className='border-b border-white/40 mt-10 mb-5'></div>
                      {/* Buttons */}
                      <div className='flex items-center gap-4 mb-10 xl:mb-0'>
                        {/* Live project button */}
                        <Link href={project.live}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className='w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group'>
                                <BsArrowUpRight className='text-white text-2xl group-hover:text-accent transition-all duration-500' />
                                <TooltipContent>Live Project</TooltipContent>
                              </TooltipTrigger>
                            </Tooltip>
                          </TooltipProvider>
                        </Link>
                        {/* Github project button */}
                        <Link href={project.live}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className='w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group'>
                                <BsGithub className='text-white text-2xl group-hover:text-accent transition-all duration-500' />
                                <TooltipContent>Github Repository</TooltipContent>
                              </TooltipTrigger>
                            </Tooltip>
                          </TooltipProvider>
                        </Link>
                      </div>

                    </div>

                  </div>
                  <div className='w-full xl:w-[50%]'>
                    <div className='h-[460px] relative group flex justify-center items-center bg-pink-50/20'>
                        {/* Overlay */}
                        <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>
                        {/* image */}
                        <div className='relative w-full h-full '>
                          {/* <Image 
                                src={project.image} 
                                alt={project.title} 
                                fill 
                                className='object-cover' /> 
                            */}
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
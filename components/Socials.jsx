import Link from 'next/link'
import React from 'react'

import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const socialNetworks = [
  { icon: <FiGithub />, path: 'https://github.com/MiltonMG', title: 'Github' },
  { icon: <FiLinkedin />, path: 'https://www.linkedin.com/in/miltongalindo', title: 'Linkedin' },
  { icon: <FiInstagram />, path: 'https://www.instagram.com/miltonmg.sv/', title: 'Instagram' },
]
const Socials = ({ containerStyling, iconStyles }) => {
  return (
    <div className={containerStyling}>
      {socialNetworks.map((social, index) => (
        <TooltipProvider key={index} delayDuration={100}>
          <Tooltip>

            <TooltipContent className="w-full bg-primary rounded-xl flex justify-center items-center group hover:border-accent">
              <Link href={social.path} target='_blank'>
                <div className="text-white group-hover:text-accent group-hover:cursor-pointer">{social.title}</div>
              </Link>
            </TooltipContent>

            <TooltipTrigger>
              <Link href={social.path} target='_blank' className={iconStyles}>
                {social.icon}
              </Link>
            </TooltipTrigger>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  )
}

export default Socials
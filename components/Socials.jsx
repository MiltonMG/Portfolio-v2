import Link from 'next/link'
import React from 'react'

import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi'

const socialNetworks = [
    { icon: <FiGithub />, path:''},
    { icon: <FiLinkedin />, path:''},
    { icon: <FiInstagram />, path:''},
]
const Socials = ({ containerStyling, iconStyles }) => {
  return (
    <div className={containerStyling}>
        {socialNetworks.map((social, index) => (
            <Link href={social.path} key={index} className={iconStyles}>
                {social.icon}
            </Link>
        ))}
    </div>
  )
}

export default Socials
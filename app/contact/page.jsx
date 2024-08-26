"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    content: '(+503) 7045-8617'
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    content: 'milton.elsalvador26@gmail.com'
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Address',
    content: 'Atiquizaya, Ahuachapán, El Salvador'
  }
];


const Contact = () => {
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
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">

        {/* Form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent"> Let's Work together </h3>
              <p className="text-white/60">
                Have a project in mind? Let's talk about it. 
                I'm available for freelance work, internships and full-time positions.
              </p>

              {/* Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Name" />
                <Input type="lastname" placeholder="Last Name" />
                <Input type="Email" placeholder="Email" />
                <Input type="subject" placeholder="Subject" />
              </div>
              {/* TextArea */}
              <Textarea className="h-[250px]" type="message" placeholder="Type your message here." />

              {/* Button */}
              <Button type="submit" size="" className="self-start max-w-40">Send Message</Button>
            </form>
          </div>
        {/* Info */}
        <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
          <ul className="flex flex-col gap-10">
            {info.map((item, index) => (
              <li key={index} className="flex gap-6 items-center">
                <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                  <div className="text-[20px] xl:text-[26px]"> {item.icon} </div>
                </div>
                <div className=" flex-1">
                  <p className="text-white/60"> {item.title} </p>
                  {
                    (item.title === 'Phone') ? <a href={`tel:${item.content}`} className="text-accent text-xl hover:text-white hover:transition-all duration-500"> {item.content} </a> : (item.title === 'Email') ? <a href={`mailto:${item.content}`} className="text-accent text-xl hover:text-white hover:transition-all duration-500"> {item.content} </a> : <h3 className="text-xl"> {item.content} </h3>
                  }
                </div>
              </li>
            ))}
          </ul>
        </div>
        </div>
      </div>

    </motion.section>
  )
}

export default Contact
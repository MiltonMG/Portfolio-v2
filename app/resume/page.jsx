"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaGithub,
  FaDatabase
} from "react-icons/fa";

import { SiTailwindcss, SiTypescript, SiMongodb, SiMysql, SiFirebase, SiExpress } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";


// About Data
const about = {
  title: "About Me",
  description: "I'm a developer with a strong foundation in front-end and back-end development. I'm always looking to learn new technologies and improve my skills.",
  items: [
    {
      title: "Name",
      value: "Milton"
    },
    {
      title: "Phone",
      value: "(+503) 7045 8617"
    },
    {
      title: "Experience",
      value: "2 years"
    },
    {
      title: "Nationality",
      value: "Salvadoran"
    },
    {
      title: "Email",
      value: "milton.elsalvador26@gmail.com"
    },
    {
      title: "Languages",
      value: "Spanish, English"
    }
  ]
};

// Experience Data
const experience = {
  title: "Experience",
  icon: '/assets/resume/badge.svg',
  description: "I have experience working as a web developer. Here are some of the places I've worked at.",
  items: [
    {
      title: "Web Developer",
      company: "The Orange Box Agency",
      date: "2023 - 2024",
    },
    {
      title: "Web Developer",
      company: "Empresa web",
      date: "2022 - 2023"
    }
  ]
};

//Education Data
const education = {
  title: "My Education",
  icon: '/assets/resume/graduation.svg',
  description: "I'm a Computer systems engineer and have taken several courses on web development.",
  items: [
    {
      degree: "Computer systems engineering",
      school: "Universidad de El Salvador",
      date: "2018 - 2023"
    },
    {
      degree: "EF SET English Certificate 59/100 (B2 Upper Intermediate)EF SET English",
      school: "EF SET"
    },
    {
      degree: "React: From Zero to Expert (Hooks and MERN)",
      school: "Udemy"
    },
    {
      degree: "Node: From Zero to Expert",
      school: "Udemy",
    },
    {
      degree: "SOLID Principles and Clean Code",
      school: "Udemy",
    }
  ]
};

//Skills Data
const skills = {
  title: "My Skills",
  description: "I have experience with the following technologies.",
  items: [
    {
      title: "HTML",
      icon: <FaHtml5 />
    },
    {
      title: "CSS",
      icon: <FaCss3 />
    },
    {
      title: "JavaScript",
      icon: <FaJs />
    },
    {
      title: "React",
      icon: <FaReact />
    },
    {
      title: "Node.js",
      icon: <FaNodeJs />
    },
    {
      title: "Figma",
      icon: <FaFigma />
    },
    {
      title: "Github",
      icon: <FaGithub />
    },
    {
      title: "Database",
      icon: <FaDatabase />
    },
    {
      title: "TailwindCSS",
      icon: <SiTailwindcss />
    },
    {
      title: "TypeScript",
      icon: <SiTypescript />
    },
    {
      title: "MongoDB",
      icon: <SiMongodb />
    },
    {
      title: "MySQL",
      icon: <SiMysql />
    },
    {
      title: "Firebase",
      icon: <SiFirebase />
    },
    {
      title: "Express",
      icon: <SiExpress />
    }
  ]
};



const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 1.0,
          duration: 0.4,
          ease: "easeIn"
        }
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className=" flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* Tabs Content */}
          <div className="min-h-[70vh] w-full">

            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {
                      experience.items.map((item, index) => {
                        return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className=" text-accent">{item.date}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.title}</h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className=" w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/80">{item.company}</p>
                          </div>

                        </li>
                      })
                    }
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[100%]">{/* if i want to activate the scroll area i just have to set a hight like 400px */}
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {
                      education.items.map((item, index) => {
                        return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className=" text-accent">{item.date}</span>
                          <h3 className=" max-w-[310px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className=" w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/80">{item.school}</p>
                          </div>

                        </li>
                      })
                    }
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4 mt-5">
                {
                  skills.items.map((item, index) => {
                    return <li key={index} className="">
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>

                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent">{item.icon}</div>
                          </TooltipTrigger>

                          <TooltipContent>
                            <p className="capitalize">{item.title}</p>
                          </TooltipContent>

                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  })
                }
              </ul>
            </TabsContent>

            {/* About */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {
                    about.items.map((item, index) => {
                      return <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-accent">{item.title}</span>
                        {
                          item.title === "Phone" ? (
                            <a href={`tel:${item.value}`} className="max-w-[200px] text-sky-200 hover:text-white hover:transition-all duration-500 break-words">{item.value}</a>
                          ) : item.title === "Email" ? (
                            <a href={`mailto:${item.value}`} className="text-sky-200 hover:text-white hover:transition-all duration-500 max-w-[200px] break-words">{item.value}</a>
                          ) : (
                            <span className="max-w-[220px] break-words">{item.value}</span>
                          )
                        }

                      </li>
                    })
                  }
                </ul>
              </div>
            </TabsContent>

          </div>


        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume
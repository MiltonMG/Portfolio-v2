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

import { SiTailwindcss, SiNextDotJs, SiTypescript, SiMongodb, SiMysql } from "react-icons/si";

// About Data
const about = {
  title: "About Me",
  description: "I'm a developer with a strong foundation in front-end and back-end development. I'm always looking to learn new technologies and improve my skills.",
  info: [
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
  jobs: [
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

const Resume = () => {
  return (
    <div>Resume</div>
  )
}

export default Resume
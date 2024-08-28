"use client"

import { motion } from "framer-motion"
import CountUp from "react-countup"

const stats = [
    { num: 2, text: "Years of Experience" },
    { num: 27, text: "repositories on Github" },
    { num: 2, text: "Companies I have worked" },
    { num: 5, text: "Projects in my portfolio" },
]

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
        <div className="container mx-auto">
            <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                {stats.map((item, index) => {
                    return(
                        <div key={index} className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
                            <CountUp end={item.num} duration={5} delay={2} className="text-4xl xl:text-6xl font-extrabold"/>
                            <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-5 xl:leading-7 text-white/80`}> {item.text} </p>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Stats
import { animate, motion } from "framer-motion"

//Variants for the stair animation
const stairAnimation = {
    initial:{ top:"0%" },
    animate:{ top:"100%" },
    exit:{ top:["100%", "0%"] },

}

{/* calculate the reverse staggered delay */}
const reverseIndex = (index) => {
    const totalSteps = 6
    return totalSteps - index - 1
}

const Stairs = () => {
  return (
    <>
        {/* 
        render 6 motion divs, each representing a step of stairs 
        each div will have the same animation properties, but with a staggered delay
        */}
        {[...Array(6)].map((_, index) => {
            return (<motion.div 
                key={index}
                variants={stairAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ 
                    duration:0.2,
                    ease: 'easeInOut',
                    delay:reverseIndex(index) * 0.1
                }}
                className=" h-full w-full bg-gray-950 relative"
            />)
        })}
    </>
  )
}

export default Stairs
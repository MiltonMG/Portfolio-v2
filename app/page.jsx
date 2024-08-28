import { Button } from "@/components/ui/button"
import { FiDownload } from "react-icons/fi"


//Components
import Socials from "@/components/Socials"
import Photo from "@/components/Photo"
import Stats from "@/components/Stats"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"

const page = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          
          {/* TEXT */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl"> Web Developer </span>
            
            <h1 className="h1 mb-6">
              {/* TODO: I have to find a way to change "Hello" word in different languages */}
              Hello I'm <br/> <span className="text-accent">Milton</span>
            </h1>

            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegant solutions to complex problems. I specialize in web development, and I'm passionate about creating intuitive, dynamic user experiences.
            </p>

            {/* btn and socials */}
            <div className=" flex flex-col xl:flex-row items-center gap-8">
              
              {/* CV */}
              {/* <a href="/assets/files/MiltonMartinez-CV.pdf" download="Milton-Martinez-CV.pdf"> */}

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Download CV" />
                </SelectTrigger>

                <SelectContent>
                  <SelectGroup>
                    <a href="/assets/files/MiltonMartinez-Resume.pdf" download="Milton-Martinez-CV.pdf" className="hover:bg-white hover:text-primary">
                      <SelectLabel>English CV </SelectLabel>
                    </a>
                    <a href="/assets/files/MiltonMartinez-CV.pdf" download="Milton-Martinez-CV.pdf" className="hover:bg-white hover:text-primary">
                      <SelectLabel>Spanish CV</SelectLabel>
                    </a>
                  </SelectGroup>
                </SelectContent>

              </Select>

              {/* <Button variant="outline" size="sm" className="uppercase flex items-center gap-2">
                <span> Download CV </span>
                <FiDownload className="text-xl" />
              </Button> */}

              {/* </a> */}

              {/* Socials */}
              <div className="mb-8 xl:mb-0">
                <Socials containerStyling='flex gap-6' iconStyles='w-9 h-9 border border-accent rounded-full flex justify-center items-center text-white text-base hover:bg-accent hover:text-primary hover:transition-all duration-500' />
              </div>

            </div>

          </div>

          {/* PHOTO */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>

        </div>
      </div>

      <Stats />

    </section>
    )

}

export default page
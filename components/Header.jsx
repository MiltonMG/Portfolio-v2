import Link from "next/link"
import { Button } from "./ui/button"
import { Nav } from "./Nav"
import MobileNav from "./MobileNav"

export const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
        <div className="container mx-auto flex justify-between items-center">

            {/* LOGO */}
            <Link href={"/"}>
                <h1 className="text-4xl font-bold">
                    Milton<span className="text-accent">MG</span>
                </h1>
            </Link>

            {/* DESKTOP NAV AND HIRE ME BUTTON*/}
            <div className="hidden xl:flex items-center gap-8">
                <Nav />
                <Link href={"/contact"}>
                    <Button className="">Hire Me</Button>
                </Link>
            </div>

            {/* MOBILE NAV */}
            <div className="xl:hidden">
                <MobileNav />
            </div>

        </div>
    </header>
  )
}

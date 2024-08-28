"use client"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { CiMenuFries } from "react-icons/ci"


const links = [
    { name: "home", path: "/" },
    { name: "resume", path: "/resume" },
    { name: "work", path: "/work" },
    { name: "contact", path: "/contact" },
]


const MobileNav = () => {

    const pathname = usePathname()

    return  <Sheet>
                <SheetTrigger className="flex justify-center items-center">
                    <CiMenuFries className="text-[32px] text-accent" />
                </SheetTrigger>
                <SheetContent>
                    
                    {/* LOGO */}
                    <div className="flex">
                        <Link href={"/"}>
                            <h1 className="text-3xl font-bold underline underline-offset-8 decoration-[#00Ff99]">
                                Milton<span className="text-accent">MG</span>
                            </h1>
                        </Link>
                    </div>
                    
                    <div className="flex flex-col items-center justify-center gap-8 text-white mt-32">
                        {links.map(link => (
                            <Link key={link.path} href={link.path} className={`hover:text-accent text-xl capitalize ${pathname === link.path ? "text-accent border-b-2 border-accent" : ""}`}> 
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </SheetContent>
            </Sheet>
}

export default MobileNav
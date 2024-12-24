"use client"

import { Separator } from "@radix-ui/react-separator"
import { Menu, MoonStar, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"
import { DropDown } from "./Dropdown"

export const Navbar = () => {

  const { theme, setTheme } = useTheme()

  return (
    <>
      <nav className="flex items-center justify-between px-5 md:px-7 py-2 ">
        <div className="flex items-center">
          <button className="text-center hover:cursor-pointer">
            <Menu />
          </button>
          <Link href="/" className="text-2xl md:text-3xl  font-bold mx-5 hover:cursor-pointer">
            HyperPipe
          </Link>
        </div>

        <div className="flex gap-3">
          <div className=" p-2 rounded-md hover:cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center">
            {
              theme == "dark" || theme == "system" ? (
                < button >
                  <MoonStar onClick={() => { setTheme("light") }} className="size-5 md:size-6" />
                </button>
              ) : (
                <button>
                  <Sun onClick={() => { setTheme("dark") }} className="size-5 md:size-6" />
                </button>
              )
            }
          </div>
          <div className="hover:cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md p-2">
            <DropDown />
          </div>
        </div>
      </nav >
      <Separator orientation="horizontal" className="w-full h-[1px] bg-gray-200 dark:bg-gray-700" />
    </>
  )
}
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { SunIcon, MoonIcon, GithubIcon, LinkedInIcon } from "./ExtraIcons"
import useThemeSwitcher from './hooks/useThemeSwitcher'
import { motion } from 'framer-motion'
import { MdOutlineWavingHand } from "react-icons/md";

const CustomLink = ({href, title, className=""}) => {
    const router = useRouter();
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span 
            className={`h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? "w-full" : "w-0"} dark:bg-light`}
            >&nbsp;</span>
        </Link>    
    )
}

const MobileLink = ({href, title, className="", toggle}) => {
    const router = useRouter();
    const handleClick = () => {
        toggle();
        router.push(href)
    }
    return (
        <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
            {title}
            <span 
            className={`h-[1px] inline-block w-0 bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? "w-full" : "w-0"} dark:bg-dark`}
            >&nbsp;</span>
        </button>    
    )
}

const Navbar = () => {

    const [mode, setMode] = useThemeSwitcher();
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    let dropdownRef = useRef(null);

    useEffect(() => {
        let handler = (e) => {
            if (!dropdownRef.current || !dropdownRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        };
    }, [])

  return (
    <header className="w-full px-32 py-6 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8">
        <Link href="/" className="text-2xl text-dark dark:text-light flex items-center">
            <MdOutlineWavingHand className="w-5 h-5 mr-3 hover:-rotate-45 duration-200" /> Yeoh Han Yi
        </Link>
        <div className="flex items-center justify-center">
            <nav className="flex items-center justify-center flex-wrap lg:hidden">
                <CustomLink href="/" title="Home" className="mr-4" />
                <CustomLink href="/about" title="About" className="mx-4" />
                <CustomLink href="/projects" title="Projects" className="mx-4" />
            </nav>
            
            {
                isOpen ?           
                <motion.nav ref={dropdownRef}
                initial={{scale:0, opacity:0, x:"-50%", y:"-50%"}}
                animate={{scale:1, opacity:1}}
                className={`min-w-[40vw] flex flex-col items-center justify-center flex-wrap fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 py-32
                bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md
                ${isOpen ? `opacity-100` : `lg:hidden`}`} >
                    <MobileLink href="/" title="Home" className="" toggle={handleClick} />
                    <MobileLink href="/about" title="About" className="" toggle={handleClick} />
                    <MobileLink href="/projects" title="Projects" className="" toggle={handleClick} />
                </motion.nav>
                : null
            }
            
            <nav className="flex items-center justify-center flex-wrap gap-3">
                <Link href="https://github.com/yhanyi" target="_blank" className="flex items-center justify-center bg-dark text-light dark:bg-light dark:text-dark rounded-xl p-1 hover:scale-105 duration-200">
                    <GithubIcon width={25} height={25} />
                </Link>

                <Link href="https://www.linkedin.com/in/yeoh-han-yi/" target="_blank" className="flex items-center justify-center bg-dark text-light dark:bg-light dark:text-dark rounded-xl p-1 hover:scale-105 duration-200">
                    <LinkedInIcon width={25} height={25} />
                </Link>

                <button
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
                className={`flex items-center justify-center rounded-xl p-1 hover:scale-105 duration-200
                ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
                `}
                >
                    {
                        mode === "dark" ?
                        <SunIcon className={"fill-dark"} /> :
                        <MoonIcon className={"fill-dark"} />
                    }
                </button>

                <button className="lg:flex flex-col hidden justify-center rounded-xl items-center hover:scale-105 duration-200 p-1 w-8 h-8 bg-dark dark:bg-light" onClick={handleClick}>
                    <div>
                        <span className={`bg-light dark:bg-dark transition-all duration-300 block h-0.5 w-4 rounded-sm ${isOpen ? `rotate-45 translate-y-1` : `-translate-y-0.5`}`}></span>
                        <span className={`bg-light dark:bg-dark transition-all duration-300 block h-0.5 w-4 rounded-sm my-0.5 ${isOpen ? `opacity-0` : `opacity-100`}`}></span>
                        <span className={`bg-light dark:bg-dark transition-all duration-300 block h-0.5 w-4 rounded-sm ${isOpen ? `-rotate-45 -translate-y-1` : `translate-y-0.5`}`}></span>
                    </div>
                </button>
            </nav>
        </div>
    </header>
  )
}

export default Navbar
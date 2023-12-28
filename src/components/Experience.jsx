import React, { useRef } from 'react'
import { motion, useScroll } from "framer-motion";
import ListIcon from './ListIcon';
import AnimatedText from './AnimatedText';

const Details = ({position, company, time, work}) => {
    
    const ref = useRef(null);

    return <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
        <ListIcon reference={ref} />
        <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5, type:"spring"}}>
            <h3 className="font-bold text-2xl">{position}&nbsp;<span className="text-primary dark:text-primaryDark">@ {company}</span></h3>
            <span className="font-medium text-dark/75 dark:text-light/75">
                {time}
            </span>
            <p className="font-medium w-full">
                {work}
            </p>
        </motion.div>
    </li>
}

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"] 
        }
    )

    return (
    <>
        <AnimatedText text="Experience" className="mt-64 mb-16 sm:mb-8" />
        <div ref={ref} className="w-[75%] mx-auto relative">
            <motion.div 
            style={{scaleY: scrollYProgress}}
            className="absolute left-9 top-0 w-[4px] h-full" 
            />
            <ul>
                <div>None at the moment...</div>
                {/* <Details
                position="-"
                company="-"
                time="-"
                work="-"
                /> */}
            </ul>
        </div>
    </>
  )
}

export default Experience
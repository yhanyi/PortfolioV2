import React, { useRef } from 'react'
import { motion, useScroll } from "framer-motion";
import ListIcon from './ListIcon';
import AnimatedText from './AnimatedText';

const Details = ({type, time, place, scores, infos}) => {
    
    const ref = useRef(null);

    return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col justify-between">
        <ListIcon reference={ref} />
        <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5, type:"spring"}}>
            <h3 className="font-bold text-2xl">{type}</h3>
            <p className="mt-4 font-medium text-dark/75 dark:text-light/75">
                {time} | {place}
            </p>
            <p className="mt-4 font-medium text-dark/75 dark:text-light/75">
                {scores}
            </p>
            <div>
            {infos.map((info, index) => (
                <p key={index} className="mt-4 font-medium w-full">{info}</p>
            ))}
            </div>

        </motion.div>
    </li>
    )
}

const Education = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"] 
        }
    )

    return (
    <>
        <AnimatedText text="Education" className="mt-64 mb-16 sm:mb-8" />
        <div ref={ref} className="w-[75%] mx-auto relative">
            <motion.div 
            style={{scaleY: scrollYProgress}}
            className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top" />
            <ul>
                <Details
                type="Bachelor of Computing in Computer Science (2nd Major Statistics)"
                time="January 2023 - Present"
                place="National University of Singapore"
                scores="Cumulative GPA: 4.6 (Ongoing)"
                infos={[
                    "Studying Computer Science with a second major in Statistics.",
                    "Relevant Modules:",
                    "CS1010X - Programming Methodology I [A-]",
                    "CS1231S - Discrete Structures [A-]",
                    "CS2030S - Programming Methodology II [A-]",
                    "CS2040S - Data Structures and Algorithms [Taking]",
                    "CS2100 - Computer Organisation [Taking]",
                    "MA1521 - Calculus for Computing [A]",
                    "MA1522 - Linear Algebra for Computing [B+]",
                    "ST2334 - Probability and Statistics [Taking]"
                ]}
                />

                <Details
                type="GCE A Levels"
                time="January 2019 - December 2020"
                place="Dunman High School"
                scores="88.75/90 Rank Points"
                infos={["Studied H2 Physics, H2 Chemistry, H2 Mathematics, H2 Economics, H3 Physics"]}
                />
            </ul>
        </div>
    </>
  )
}

export default Education
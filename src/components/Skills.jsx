import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import AnimatedText from './AnimatedText'

const SkillItem = ({src, width, height, title, index}) => {
    const {ref, inView} = useInView({
        triggerOnce: false
    })

    const imageVariants = {
        hidden: {opacity:0},
        visible: {opacity:1}
    }

    const animationDelay = 0.1;
    
    return (
        <motion.div
        ref={ref}
        initial="hidden"
        variants={imageVariants}
        animate={inView ? "visible" : "hidden"}
        custom={index}
        transition={{delay: index*animationDelay}}
        className="flex items-center justify-center"
        >

            <div className="group flex justify-center p-8 rounded-md drop-shadow-xl hover:translate-y-5 transition-all duration-300">
                <Image 
                src={src}
                width={width}
                height={height}
                alt="Skill Image"
                className="flex items-center justify-center"
                />
                <span
                className="p-2 bg-dark dark:bg-light rounded-xl font-semibold flex text-center absolute opacity-0 group-hover:opacity-100 text-light dark:text-dark group-hover:-translate-y-12 duration-300"
                >
                {title}
                </span>
            </div>
            
        </motion.div>
    )
}

const Skills = () => {
    const [dimension, setDimension] = useState(50);
    const updateDimension = () => {
        if (typeof window !== "undefined") {
            setDimension(window.innerWidth >= 639 ? 50 : 30);
        };
    };
    useEffect(() => {
        updateDimension();
        const handleResize = () => {
            updateDimension();
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.addEventListener("resize", handleResize);
        };
    }, [dimension]);


  return (
    <>
        {/* <h2 className="font-bold text-6xl mt-64 w-full text-center">Tools and Technologies</h2> */}
        <AnimatedText text="Tools & Technologies" className="mt-64 mb-16 sm:mb-8" />
        <div
        className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden"
        style={{transform:"scale(0.9)"}}>
            <div className="flex flex-row justify-around flex-wrap gap-5 items-center">
                {SKILLS_LIST.map((item, index) => (
                    <SkillItem
                    key={index}
                    src={item.image}
                    title={item.title}
                    width={dimension}
                    height={dimension}
                    index={index}
                    />
                ))}
            </div>
        </div>
    </>
  )
}

export default Skills

const SKILLS_LIST = [
    {
        title: "HTML",
        image: "/skills-images/html5.svg",
        width: 50,
        height: 50,
    },
    {
        title: "CSS",
        image: "/skills-images/css3.svg",
        width: 50,
        height: 50,
    },
    {
        title: "Javascript",
        image: "/skills-images/javascript.svg",
        width: 50,
        height: 50,
    },
    {
        title: "Typescript",
        image: "/skills-images/typescript.svg",
        width: 50,
        height: 50,
    },
    {
        title: "Python",
        image: "/skills-images/python.svg",
        width: 50,
        height: 50,
    },
    {
        title: "Java",
        image: "/skills-images/java.svg",
        width: 50,
        height: 50,
    },
    {
        title: "C",
        image: "/skills-images/c.svg",
        width: 50,
        height: 50,
    },
    {
        title: "C++",
        image: "/skills-images/cplusplus.svg",
        width: 50,
        height: 50,
    },
    {
        title: "R",
        image: "/skills-images/rstudio.svg",
        width: 50,
        height: 50,
    },
    {
        title: "Pytorch",
        image: "/skills-images/pytorch.svg",
        width: 50,
        height: 50,
    },
    {
        title: "Tensorflow",
        image: "/skills-images/tensorflow.svg",
        width: 50,
        height: 50,
    },
    {
        title: "ThreeJS",
        image: "/skills-images/threejs.svg",
        width: 50,
        height: 50,
    },
    {
        title: "NextJS",
        image: "/skills-images/nextjs.svg",
        width: 50,
        height: 50,
    },
    {
        title: "React",
        image: "/skills-images/react.svg",
        width: 50,
        height: 50,
    },
    {
        title: "VSCode",
        image: "/skills-images/vscode.svg",
        width: 50,
        height: 50,
    },
    {
        title: "Vim",
        image: "/skills-images/vim.svg",
        width: 50,
        height: 50,
    },
    {
        title: "LATEX",
        image: "/skills-images/latex.svg",
        width: 50,
        height: 50,
    },
    {
        title: "Kaggle",
        image: "/skills-images/kaggle.svg",
        width: 50,
        height: 50,
    },
    
];
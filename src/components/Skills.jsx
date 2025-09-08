import { Chip, Stack } from "@mui/material"
import '../index.css';
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

export default function Skills() {
    const skillCategories = [
        {
            title: "Languages",
            skills: ["JavaScript", "Python", "Java", "C"]
        },
        {
            title: "Frontend",
            skills: ["HTML", "CSS", "React", "React Native", "TailwindCSS", "SCSS", "Vite"]
        },
        {
            title: "Backend",
            skills: ["PostgreSQL", "SQL", "FastAPI"]
        },
        {
            title: "Tools & Others",
            skills: ["Git", "Github", "Linux"]
        },
    ]

    const currentlyLearning = ["Machine Learning", "Docker", "Svelte"]


    return (
        <>
        <section 
            className='bg-[#0a0d12] h-full pb-10'
            id="skills"
            >
            <div className="justify-center">
                <motion.div
                    initial={{ opacity: 0}}
                    whileInView={{ opacity: 1}}
                    transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2}}
                    className="flex flex-column justify-center"
                >
                    <h2 
                        // text-3xl md:text-5xl lg:text-5xl xl:text-6xl px-2 mb-4 md:mb-6
                        className="text-center text-3xl md:text-5xl px-3 mb-4 md:mb-6 mt-15 md:mt-20 lg:mt-20 bg-gradient-to-r from-sky-500 to-fuchsia-600 inline-block text-transparent bg-clip-text"
                    >
                        Technical Skills
                    </h2>
                </motion.div>
                {/* Header Underline */}
                <div  className='w-24 md:w-30 h-1 mx-auto rounded-sm mb-10 bg-gradient-to-r from-sky-500 to-fuchsia-600 text-transparent'/>  



                {/* Cards */}
                <div className="md:3/4 lg:w-5/6 xl:w-3/5 place-self-center">
                <motion.p 
                    initial={{ opacity: 0}}
                    whileInView={{ opacity: 1}}
                    transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2}}
                    className="text-center text-xl md:text-2xl text-[#8998ad] dark:text-[#8998ad] mb-10 mx-10 lg:mx-0"
                >
                    Technologies and tools I use to bring ideas to life 
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: -50}}
                    whileInView={{ opacity: 1, y: 0}}
                    transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2}}
                    className='grid grid-cols-1 md:grid-flow-col md:grid-cols-2 md:grid-rows-2 justify-items-center gap-x-7 px-3 md:px-7'
                >
                    {skillCategories.map((category) => {
                        return (
                            <div
                            style={{ background: "var(--gradient-accent)", borderImage: "var(--gradient-accent-flipped)" }} 
                            className={`mx-4 p-10 py-7 rounded-md w-full justify-center col-span-1 skill-card bg-[#0a0d12]`}
                            >
                                <h1 className="text-2xl  mb-7 text-wrap text-[#42a5f5]">{category.title}</h1>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill) => {
                                        return (
                                            <Chip 
                                            sx={{
                                                padding: {
                                                    md: "20px 10px"
                                                },
                                                fontSize: {
                                                    sm: "1rem",
                                                    md: "15px",
                                                }
                                            }}
                                            label={skill}
                                            variant="outlined"
                                            color="info"
                                            className="chip-button"
                                            />
                                        )
                                    })}
                            </div>
                        </div>
                        )
                    })}

                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, y: 20}}
                        whileInView={{ opacity: 1, y: 0}}
                        transition={{ duration: 0.6, ease: "easeInOut"}}
                        style={{ background: "var(--gradient-accent)", borderImage: "var(--gradient-accent-flipped)" }} 
                        className='mx-4 p-10 py-7 rounded-md w-fit place-self-center skill-card mb-10'
                    >
                        <h1 className="text-2xl md:text-4xl mb-5 text-center text-[#ba68c8]">Currently Learning</h1>
                        <div className=" flex-wrap gap-2 justify-center">
                            <p className="text-center text-md text-[#8998ad] mb-5">
                                I'm always trying to expand my skill set and stay up to date
                                with new technologies
                            </p>
                            <div className="flex flex-wrap gap-3 justify-center">
                            {currentlyLearning.map((skill) => {
                                return (
                                    <Chip 
                                    sx={{
                                        padding: {
                                            md: "20px 10px"
                                        },
                                        fontSize: {
                                            sm: "1rem",
                                            md: "15px",
                                        }
                                    }}
                                    label={skill}
                                    variant="outlined"
                                    color="secondary"
                                    className="chip-button"
                                    />
                                )
                            })}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            
        </section>
        </>
    )
}
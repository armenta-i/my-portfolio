import { Chip, Stack } from "@mui/material"
import '../index.css';


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
        <section className='bg-[#0a0d12] h-full pb-10'>
            <div className="justify-center">
                <div className="flex flex-column justify-center">
                    <h2 
                        className="text-center text-3xl md:text-7xl lg:text-7xl xl:text-7xl px-3 mb-4 md:mb-6 mt-15 md:mt-20 lg:mt-20 bg-gradient-to-r from-sky-500 to-fuchsia-600 inline-block text-transparent bg-clip-text"
                        id="skills"
                    >
                        Technical Skills
                    </h2>
                </div>
                {/* Header Underline */}
                <div  className='w-24 md:w-30 h-1 mx-auto rounded-sm mb-10 bg-gradient-to-r from-sky-500 to-fuchsia-600 text-transparent'/>  



                {/* Cards */}
                <div className="md:3/4 lg:w-5/6 xl:w-3/5 place-self-center">
                <p className="text-center text-xl md:text-2xl lg:text-3xl text-[#8998ad] dark:text-[#8998ad] mb-10 mx-10 lg:mx-0">
                    Technologies and tools I use to bring ideas to life 
                </p>
                <div 
                    className='grid grid-cols-1 md:grid-flow-col md:grid-cols-2 md:grid-rows-2 justify-items-center gap-x-7 px-3 md:px-7'
                >
                    {skillCategories.map((category) => {
                        return (
                            <div
                            style={{ background: "var(--gradient-accent)", borderImage: "var(--gradient-accent-flipped)" }} 
                            className={`mx-4 p-10 py-7 rounded-md w-full justify-center col-span-1 skill-card bg-[#0a0d12]`}
                            >
                                <h1 className="text-2xl md:text-4xl mb-7 text-wrap text-[#42a5f5]">{category.title}</h1>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill) => {
                                        return (
                                            <Chip 
                                            sx={{
                                                padding: {
                                                    md: "25px 20px"
                                                },
                                                fontSize: {
                                                    sm: "1rem",
                                                    md: "25px",
                                                    lg: "20px"
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

                    </div>
                    <div 
                    // `mx-4 p-10 py-7 rounded-md w-full justify-center col-span-1 skill-card bg-[#0a0d12]
                        style={{ background: "var(--gradient-accent)", borderImage: "var(--gradient-accent-flipped)" }} 
                        className='mx-4 p-10 py-7 rounded-md w-fit place-self-center skill-card mb-10'
                    >
                        <h1 className="text-2xl md:text-4xl mb-5 text-center text-[#ba68c8]">Currently Learning</h1>
                        <div className=" flex-wrap gap-2 justify-center">
                            <p className="text-center text-md text-[#8998ad] mb-5 md:text-2xl">
                                I'm always trying to expand my skill set and stay up to date
                                with new technologies
                            </p>
                            <div className="flex flex-wrap gap-1 justify-center">
                            {currentlyLearning.map((skill) => {
                                return (
                                    <Chip 
                                    sx={{
                                        padding: {
                                            md: "25px 20px"
                                        },
                                        fontSize: {
                                            sm: "1rem",
                                            md: "25px",
                                            lg: "20px"
                                        },
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
                    </div>
                </div>
            </div>
            
        </section>
        </>
    )
}
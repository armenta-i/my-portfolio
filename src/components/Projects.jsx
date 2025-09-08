/* eslint-disable no-unused-vars */
import { CallMade, GitHub } from "@mui/icons-material";
import { Chip, Fab } from "@mui/material";
import ProjectCard from "./ui/ProjectCard";
import { motion } from "motion/react";

export default function Projects() {
    const techProjectOne = ["React Native", "FastAPI", "Supabase", "Docker", "Python", "Expo"]
    const techProjectTwo = ["React", "FastAPI", "Python", "JavaScript", "HIBP" , "DeHashed"]
    const techProjectThree = ["PHP", "Bootstrap", "HTML", "CSS", "SQL"]

    return (
        <>
            <section 
                style={{ background: "var(--gradient-accent)" }}
                className="h-full border-[0.1px] border-[#181926]"
                id="projects">
                <div className="justify-center">
                    <motion.div 
                        initial={{ opacity: 0}}
                        whileInView={{ opacity: 1}}
                        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2}}
                        className="flex flex-column justify-center"
                    >
                        <h2 
                            className="text-center text-3xl md:text-5xl px-3 mb-4 md:mb-6 mt-15 md:mt-20 lg:mt-20 bg-gradient-to-r from-sky-500 to-fuchsia-600 inline-block text-transparent bg-clip-text"
                            id="skills"
                        >
                            Featured Projects
                        </h2>
                    </motion.div>
                    {/* Header Underline */}
                    <div  className='w-24 md:w-30 h-1 mx-auto rounded-sm mb-10 bg-gradient-to-r from-sky-500 to-fuchsia-600 text-transparent'/>  
                    <motion.p 
                        initial={{ opacity: 0}}
                        whileInView={{ opacity: 1}}
                        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2}}
                        className="text-center text-xl md:text-2xl text-[#8998ad] dark:text-[#8998ad] mb-10 lg:mb-25 mx-10 lg:mx-0">
                        A collection of projects that showcase my skills and passion for development
                    </motion.p>
                </div>

                {/* Projects */}
                <div className="grid">
                    {/* 1st Projects */}
                    <ProjectCard 
                        projectTitle={"Health Routes"}
                        projectDescription={
                            "Cross-platform mobile application for hospital and emergency search with real-time GPS directions and low-bandwidth optimization."
                        }
                        projectTech={techProjectOne}
                        featuredProject={true}
                        githubRef="https://github.com/armenta-i/health-routes"
                        imgUrl="/health_routes.png" 
                    />
                    {/* 2nd */}
                    <ProjectCard 
                        projectTitle={"CredStalker"}
                        projectDescription={
                            "Web application for detecting leaked credentials, scanning breach data, and generating user-friendly summaries to help users analyze and secure their accounts."
                        }
                        projectTech={techProjectTwo}
                        githubRef="https://github.com/armenta-i/cred-stalker"
                        imgUrl="/cred_stalker.png"
                        />
                    {/* 3rd */}
                    <ProjectCard 
                        projectTitle={"UniJob"}
                        projectDescription={
                            "Full-stack web platform for job matching within the computer science department, featuring student and recruiter dashboards, application tracking, and advanced search for streamlined hiring."                        }
                        projectTech={techProjectThree}
                        githubRef="https://github.com/armenta-i/Student_Job_Finder"
                        imgUrl="/uni_job.png"
                    />

                </div>

                <motion.div 
                    initial={{ opacity: 0}}
                    whileInView={{ opacity: 1}}
                    transition={{ duration: 0.8, ease: "easeInOut"}}
                    className="relative flex gap-2 rounded-sm justify-center my-10 mb-20 z-10">
                    <a 
                        className="gap-3 bg-[#181a1b] rounded-xl" 
                        href="https://github.com/armenta-i"
                        target="_blank"
                    >
                            <Fab 
                                variant="extended" 
                                color="secondary"
                                className=""
                                sx={{ 
                                    padding: "20px 20px 20px 20px",
                                    backgroundColor: "#181a1b",
                                    fontSize: {
                                        md: "20px"
                                    }
                                }}
                                >
                                <GitHub sx={{ mr: 1}}/>
                                View All Projects on Github
                            </Fab>
                    </a>
                </motion.div>
            </section>
        </>
    )
}
import { CallMade, GitHub } from "@mui/icons-material";
import { Chip, Fab } from "@mui/material";
import ProjectCard from "./ui/ProjectCard";

export default function Projects() {
    const techProjectOne = ["React Native", "FastAPI", "Supabase", "Docker", "Python", "Expo"]

    return (
        <>
            <section 
                style={{ background: "var(--gradient-accent)" }}
                className="h-full border-[0.1px] border-[#181926]"
                id="projects">
                <div className="justify-center">
                    <div className="flex flex-column justify-center">
                        <h2 
                            className="text-center text-3xl md:text-7xl lg:text-7xl xl:text-7xl px-3 mb-4 md:mb-6 mt-15 md:mt-20 lg:mt-20 bg-gradient-to-r from-sky-500 to-fuchsia-600 inline-block text-transparent bg-clip-text"
                            id="skills"
                        >
                            Featured Projects
                        </h2>
                    </div>
                    {/* Header Underline */}
                    <div  className='w-24 md:w-30 h-1 mx-auto rounded-sm mb-10 bg-gradient-to-r from-sky-500 to-fuchsia-600 text-transparent'/>  
                    <p className="text-center text-xl md:text-4xl lg:text-3xl text-[#8998ad] dark:text-[#8998ad] mb-10 mx-10 lg:mx-0">
                        A collection of projects that showcase my skills and passion for development
                    </p>
                </div>

                {/* Projects */}
                <div className="grid">
                    {/* 1st Projects */}
                    <ProjectCard 
                        projectTech={techProjectOne}
                        featuredProject={true}
                    />
                    {/* 2nd */}
                    <ProjectCard 
                        projectTech={techProjectOne}
                    />
                    {/* 3rd */}
                    <ProjectCard 
                        projectTech={techProjectOne}
                    />
                </div>
            </section>
        </>
    )
}
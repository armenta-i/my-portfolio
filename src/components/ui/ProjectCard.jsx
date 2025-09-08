import { CallMade, GitHub } from "@mui/icons-material";
import { Chip, Fab } from "@mui/material";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

export default function ProjectCard(
    {
        projectTitle,
        projectDescription,
        projectTech, 
        featuredProject = false, 
        githubRef="", 
        liveDemo = "" , 
        live = false,
        imgUrl = "/background_pic.jpg"
    }) {
    
    return (
        <>
            <div className="justify-center align-middle px-4 md:flex xl:px-65 h-full gap-5 z-0">
                <div className="flex-1 w-full md:min-w-[50%] md:max-w-[50%] lg:min-w-[45%] h-64 md:h-100 lg:h-90 mb-8 self-center overflow-hidden rounded-xl transition-al duration-500 bg-[length:100%_100%] hover:bg-[length:120%_120%]">
                    <motion.div 
                        initial={{ x: -100}}
                        whileInView={{ x: 0}}
                        transition={{ duration: .5, ease: "easeInOut",}}
                        style={{ backgroundImage: `url(${imgUrl})` }}
                        className="w-full h-full bg-cover bg-center"
                    />
                </div>
                <motion.div
                    initial={{opacity: 0, x: 100}}
                    whileInView={{ opacity: 1, x: 0}}
                    transition={{ duration: 0.8, ease: "easeInOut"}}
                    className="md:flex flex-col align-sub justify-center"
                >
                    {featuredProject ? 
                    <Chip 
                        sx={{
                            padding: {
                                lg: "15px 6px"
                            },
                            fontSize: {
                                lg: "15px"
                            },
                        }}
                        size=""
                        label={"Featured Project"}
                        color="info"
                        variant="outlined"
                        className="self-baseline"
                            />
                    : ""
                    }
                    <h2 className="text-3xl  py-2 md:py-4">
                        {projectTitle}
                    </h2>
                    <p className="text-pretty text-xl">
                        {projectDescription}
                    </p>
                    {/* Stack Chip */}
                    <div className="my-2 p-0">
                        {projectTech.map((element) => {
                            return(
                                <Chip
                                    label={element}
                                    color="info"
                                    variant="outlined"
                                    className="m-1"
                                    sx={{ 
                                        padding: "0",
                                        fontSize: {
                                            md: "15px"
                                        }
                                    }}
                                />
                            )
                        })}
                    </div>
                    {/* Git buttons */}
                    <div className="flex gap-5 mb-10 mt-5">
                        <a 
                            href={githubRef}
                            target="_blank"
                            >
                            <Fab 
                                variant="extended" 
                                size="small" 
                                color="secondary" 
                                className="bg-black"
                                sx={{
                                    padding: "20px 10px",
                                    backgroundColor: "#181a1b",
                                    fontSize: {
                                        md: "15px"
                                    }
                                }}
                                >
                                <GitHub sx={{ mr: 1}}/>
                                View Code
                            </Fab>
                        </a>

                        {live ? 
                            <a 
                                href={liveDemo}
                                target="_blank"
                            >
                                <Fab 
                                    variant="extended" 
                                    size="small" 
                                    color="secondary"
                                    className=""
                                    sx={{ 
                                        padding: "20px 10px",
                                        backgroundColor: "#181a1b"
                                    }}
                                    >
                                    <CallMade sx={{ mr: 1}}/>
                                    Live Demo
                                </Fab>
                            </a>
                        :
                        ""
                        }

                    </div>
                </motion.div>
            </div>
        </>
    )
}
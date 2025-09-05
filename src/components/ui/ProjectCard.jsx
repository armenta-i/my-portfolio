import { CallMade, GitHub } from "@mui/icons-material";
import { Chip, Fab } from "@mui/material";

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
            <div className="justify-center align-middle px-4 md:flex xl:px-60 h-full gap-5 z-0">
                <div 
                    style={{ backgroundImage: `url(${imgUrl})` }}
                    className={`flex-1   w-full md:min-w-[50%] md:max-w-[50%] lg:min-w-[45%] h-64 md:h-100 lg:h-90 bg-cover bg-center rounded-xl mb-8 self-center`}
                />
                <div className="md:flex flex-col align-sub justify-center">
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
                    <h2 className="text-3xl md:text-5xl py-2 md:py-4">
                        {projectTitle}
                    </h2>
                    <p className="text-pretty text-xl lg:text-2xl">
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
                </div>
            </div>
        </>
    )
}
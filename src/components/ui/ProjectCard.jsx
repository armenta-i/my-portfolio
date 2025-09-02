import { CallMade, GitHub } from "@mui/icons-material";
import { Chip, Fab } from "@mui/material";

export default function ProjectCard({projectTech, featuredProject = false}) {
    return (
        <>
            <div className="justify-center px-4 md:flex lg:px-50 h-full gap-5">
                <div className="flex bg-[url(/background_pic.jpg)] w-full h-64 md:h-90 bg-cover bg-center rounded-xl mb-6 align-center"/>
                <div className="px-2">
                    {featuredProject ? 
                    <Chip 
                    sx={{
                        // padding: {
                            //     md: "25px 20px"
                            // },
                            // fontSize: {
                                //     sm: "1rem",
                                //     md: "25px",
                                //     lg: "20px"
                                // },
                            }}
                            label={"Featured Project"}
                            color="info"
                            variant="outlined"
                            />
                    : ""
                    }
                    <h2 className="text-2xl md:text-5xl py-2 md:py-4">Health Routes</h2>
                    <p>
                        Cross-platform mobile application for hospital and emergency search with 
                        real-time GPS directions and low-bandwidth optimization.
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
                                    sx={{ padding: "0" }}
                                />
                            )
                        })}
                    </div>
                    {/* Git buttons */}
                    <div className="flex gap-5 mb-10 mt-5">
                        <Fab 
                            variant="extended" 
                            size="small" 
                            color="secondary" 
                            className="z-0 bg-black"
                            sx={{ 
                                padding: "20px 10px",
                                backgroundColor: "#181a1b"
                            }}
                            >
                            <GitHub sx={{ mr: 1}}/>
                            View Code
                        </Fab>
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
                            View Code
                        </Fab>
                    </div>
                </div>
            </div>
        </>
    )
}
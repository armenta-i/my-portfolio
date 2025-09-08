import '../index.css';
import { School, Code, Psychology, Group } from '@mui/icons-material';
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"

export default function About() {

    return (
        <>
        <section
            style={{ background: "var(--gradient-accent)" }}
            className="h-full border-[0.01px] border-transparent">
            {/* Animation contianer */}
            {/* About me header */}
            <motion.div 
                initial={{ opacity: 0, y: 0}}
                whileInView={{ opacity: 1, y: 0}}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2}}
                className="flex flex-column justify-center mt-15 md:mt-20 lg:mt-20 "
            >
                <h2 className="text-3xl md:text-5xl lg:text-5xl px-2 mb-4 md:mb-6">About
                    <span className="text-transparent">|</span>
                    <span className="bg-gradient-to-r from-sky-500 to-fuchsia-600 inline-block text-transparent bg-clip-text">Me</span>
                </h2>
            </motion.div>
            
            {/* Header Underline */}
            <div  className='w-24 md:w-30 h-1 mx-auto rounded-sm mb-10 bg-gradient-to-r from-sky-500 to-fuchsia-600 text-transparent'/>  

            {/* Text and Card container */}
            <div
                className='md:flex xl:px-[12vw]'>
                <motion.div
                    initial={{ opacity: 0, x: -100}}
                    whileInView={{ opacity: 1, x: 0}}
                    transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2}}
                    className='align-middle md:flex-1'>
                    <p className="text-xl md:text-xl text-[#8998ad] dark:text-[#8998ad] my-0 px-3 md:px-10 md:max-w-6xl text-pretty mb-8">
                        I'm a passionate Senior Computer Science student with a deep love for technology. My journey in programming 
                        started with curiosity about how to break games, and how things work behind the scenes, and has evolved into
                        a dedication to creating software solutions.
                    </p>

                    <p className="text-xl md:text-xl text-[#8998ad] dark:text-[#8998ad] my-0 px-3 md:px-10 md:max-w-6xl text-pretty mb-8">
                        When I'm not coding, you'll find me exploring new technologies, learning about new topics related to Computer
                        Science, or collaborating with fellow developers on exciting projects. I believe that coding can solve all
                        real-world problems and make a positive impact.
                    </p>

                    <p className="text-xl md:text-xl text-[#8998ad] dark:text-[#8998ad] my-0 px-3 md:px-10 md:max-w-6xl text-pretty mb-8">
                        Currently seeking opportunities to apply my skills in a professional environment while continuing to learn and grow as a developer.
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-6 my-8">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-primary text-sky-500">10+</div>
                        <div className="text-sm text-muted-foreground text-[#8998ad]">Projects Completed</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-primary text-sky-500">3.98</div>
                        <div className="text-sm text-muted-foreground text-[#8998ad]">GPA</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-primary text-sky-500">1</div>
                        <div className="text-sm text-muted-foreground text-[#8998ad]">Year Experience</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-primary text-sky-500">10+</div>
                        <div className="text-sm text-muted-foreground text-[#8998ad]">Technologies</div>
                    </div>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: 100}}
                    whileInView={{ opacity: 1, x: 0}}
                    transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2}}
                    className='flex flex-col md:flex-1'
                    >
                    <h2 className='text-2xl mb-3  md:mb-1 px-3'>Education & Experience</h2>

                    <div 
                        style={{ background: "var(--gradient-accent)", borderImage: "var(--gradient-accent-flipped)" }} 
                        className='card group lg:mb-1'
                        >
                        <div className='flex justify-between'>
                            <h2 className='mb-2 md:text-lg'>Bachelor of Computer Science</h2>
                            <p className='text-[#8998ad]'>2022-2025</p>
                        </div>
                        <p className='text-sky-500 mb-2'>The University of Texas, El Paso</p>
                        <p>Relevant Coursework: Data Structures & Algorithm, Operating Systems, Computer Organization, Software Engineering Requirements</p>
                    </div>
                    {/* Experience */}
                    <div 
                        style={{ background: "var(--gradient-accent)", borderImage: "var(--gradient-accent-flipped)" }} 
                        className='card group'
                        >
                        <div className='flex justify-between'>
                            <h2 className='mb-2 md:text-lg'>Software Engineer Intern</h2>
                            <p className='text-[#8998ad]'>June 2025 - Aug. 2025</p>
                        </div>
                        <p className='text-sky-500 mb-2'>Novamex</p>
                        <p>Developed React app to allow sales employes to monitor sales metrics, automating all manual seaches through database.</p>
                    </div>

                    <div 
                        style={{ background: "var(--gradient-accent)", borderImage: "var(--gradient-accent-flipped)" }} 
                        className='card group'
                        >
                        <div className='flex justify-between'>
                            <h2 className='mb-2 md:text-lg'>Software Engineer Intern</h2>
                            <p className='text-[#8998ad]'>Dec. 2023 - May 2025</p>
                        </div>
                        <p className='text-sky-500 mb-2'>Hiller Measurements</p>
                        <p>Developed Proteus ATE application to automate the design process of test racks, reducing development time and improving efficiency.</p>
                    </div>
                    <div 
                        style={{ background: "var(--gradient-accent)", borderImage: "var(--gradient-accent-flipped)" }} 
                        className='card group'
                    >
                        <div className='flex justify-between'>
                            <h2 className='mb-2 md:text-lg'>Technology Infomation Intern</h2>
                            <p className='text-[#8998ad]'>May 2023 - Aug. 2023</p>
                        </div>
                        <p className='text-sky-500 mb-2'>Novamex</p>
                        <p>Developed React app to allow sales employes to monitor sales metrics, automating all manual seaches through database.</p>
                    </div>
                </motion.div>
            </div>
        </section>
        </>
    )
}
import '../index.css';
import { School, Code, Psychology, Group } from '@mui/icons-material';

export default function About() {

    return (
        <>
        <section
            style={{ background: "var(--gradient-accent)" }}
            className="h-full border-[0.1px] border-[#181926]" id="about">
            {/* About me header */}
            <div className="flex flex-column justify-center mt-15 md:mt-20 lg:mt-20 ">
                <h2 className="text-3xl md:text-5xl lg:text-5xl xl:text-5xl px-2 mb-4 md:mb-6">About
                    <span className="text-transparent">|</span>
                    <span className="bg-gradient-to-r from-sky-500 to-fuchsia-600 inline-block text-transparent bg-clip-text">Me</span>
                </h2>
            </div>
            
            {/* Header Underline */}
            <div  className='w-24 md:w-30 h-1 mx-auto rounded-sm mb-10 bg-gradient-to-r from-sky-500 to-fuchsia-600 text-transparent'/>  

            {/* Text and Card container */}
            <div className='lg:flex xl:px-[12vw]'>
                <div className='align-middle'>
                    <p className="text-xl text-[#8998ad] dark:text-[#8998ad] my-0 px-3 md:px-10 md:max-w-6xl text-pretty mb-8">
                        I'm a passionate Senior Computer Science student with a deep love for technology. My journey in programming 
                        started with cursioity about how to break games, and how things work behind the scenes, and has evolved into
                        a dedication to creating software solutions.
                    </p>

                    <p className="text-xl text-[#8998ad] dark:text-[#8998ad] my-0 px-3 md:px-10 md:max-w-6xl text-pretty mb-8">
                        When I'm not coding, you'll find me exploring new technologies, learning about new topics related to Computer
                        Science, or collaborating with fellow developers on exciting projects. I believe that coding can solve all
                        real-world problems and make a positive impact.
                    </p>

                    <p className="text-xl text-[#8998ad] dark:text-[#8998ad] my-0 px-3 md:px-10 md:max-w-6xl text-pretty mb-8">
                        Currently seeking opportunities to apply my skills in a professional environment while continuing to learn and grow as a developer.
                    </p>
                </div>

                <div 
                    className='md:grid md:grid-flow-col md:grid-rows-2 md:px-7'
                >
                    {/* Education card */}
                    <div 
                        style={{ background: "var(--gradient-accent)", borderImage: "var(--gradient-accent-flipped)", }} 
                        className='card group'
                    >
                        <School style={{ color: 'var(--blue-sky)'}} className='ml-2 group-hover:animate-pulse' fontSize='large'/>
                        <h1 className='text-2xl py-2 pl-2'>Education</h1>
                        <p className='text-balance ml-2'>Computer Science Major at The University of Texas, El Paso</p>
                    </div>

                    <div 
                        style={{ background: "var(--gradient-accent)", borderImage: "var(--gradient-accent-flipped)" }} 
                        className='card group'
                    >
                        <Code style={{ color: 'var(--blue-sky)'}} className='ml-2 group-hover:animate-pulse' fontSize='large'/>
                        <h1 className='text-2xl py-2 pl-2'>Experience</h1>
                        <p className='text-balance ml-2'>1 year of professional programming experience</p>
                    </div>

                    <div 
                        style={{ background: "var(--gradient-accent)", borderImage: "var(--gradient-accent-flipped)" }} 
                        className='card group'
                    >
                        <Psychology style={{ color: 'var(--blue-sky)'}} className='ml-2 group-hover:animate-pulse' fontSize='large'/>
                        <h1 className='text-2xl py-2 pl-2'>Problem Solver</h1>
                        <p className='text-balance ml-2'>Love to solve complex programming problems</p>
                    </div>

                    <div 
                        style={{ background: "var(--gradient-accent)", borderImage: "var(--gradient-accent-flipped)" }} 
                        className='card group'
                    >
                        <Group style={{ color: 'var(--blue-sky)'}} className='ml-2 group-hover:animate-pulse' fontSize='large'/>
                        <h1 className='text-2xl py-2 pl-2'>Team Player</h1>
                        <p className='text-balance ml-2'>Experience collaborating in small and big teams</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
import { LinkedIn, Email } from '@mui/icons-material';
import GitHubIcon from '@mui/icons-material/GitHub';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Hero() {
    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({
            behavior: 'smooth'
        })
    }


    return (
        <>
            <section className='relative h-[95vh] overflow-hidden' id='home'>
                <div className="absolute inset-0 bg-[url(/background_pic.jpg)] bg-cover bg-center blur-sm z-0"/>
                <div className="relative z-10 flex text-center text-white justify-center h-full items-start">
                    <div className="mt-20 md:mt-32 lg:mt-54">
                        {/* Hero Text */}
                        <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl px-2">Hi, I'm
                            <span className="text-transparent">|</span>
                            <span className="bg-gradient-to-r from-sky-500 to-fuchsia-600 inline-block text-transparent bg-clip-text">Ivan Armenta</span>
                        </h1>
                        <p className="text-2xl lg:text-4xl px-1 text-pretty text-[#8998ad] my-7">Computer Science Student & Aspiring Software Engineer</p>

                        <p className="text-xl text-[#8998ad] dark:text-[#8998ad] my-0 px-3 md:px-10 lg:px-40 md:max-w-6xl text-pretty">
                            Passionate about creating innovative solutions through code.   
                            Currently pursuing my degree while building projects that make a difference.
                        </p>

                        {/* Hero buttons */}
                        <div className="flex flex-col sm:flex-row justify-center mt-10 gap-5 mx-5">
                            <button className="bg-sky-600 px-5 py-2 rounded-lg text-black hover:cursor-pointer hover:shadow-[0px_0px_60px_-15px_#009bf5]">
                                View My Work
                            </button>
                            <button className="bg-[#0b0e13] px-7 py-3 rounded-md text-white hover:cursor-pointer border-1 border-sky-600 hover:opacity-75">
                                Get In Touch
                            </button>
                        </div>

                        {/* Social Icons */}
                        <div className='mt-10 flex gap-5 justify-center'>
                            <a href="https://github.com/armenta-i">
                                <GitHubIcon sx={{ color: '#bcbfc2'}} fontSize='large'></GitHubIcon>
                            </a>
                            <a href="https://www.linkedin.com/in/iarmenta/">
                                <LinkedIn sx={{ color: '#bcbfc2', }} fontSize='large' className='hover:cursor-pointer'></LinkedIn>
                            </a>
                            <a href="mailto:i_armenta@outlook.com">
                                <Email sx={{ color: '#bcbfc2', }} fontSize='large' className='hover:cursor-pointer'></Email>
                            </a>
                        </div>

                        <div onClick={() => scrollToSection('about')} className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer animate-bounce">
                            <ExpandMoreIcon className="w-8 h-8 text-primary" fontSize='large'/>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
import { useState, React } from "react";
import { ClearAll, Close } from '@mui/icons-material';
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import NavButton from "./ui/NavButton";

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavBar = () => {
        setIsMenuOpen(!isMenuOpen);
        console.log(isMenuOpen)
    }

    const scrollToSection = (section) => {
        document.getElementById(section)?.scrollIntoView({
            behavior: 'smooth'
        });
    }

    return (
        <>
            <motion.nav 
                initial={{ opacity: 0, y: 0}}
                whileInView={{ opacity: 1, y: 0}}
                transition={{ duration: 0.8, ease: "easeIn"}}
                viewport={{ once: true}}
                className="sticky top-0 px-5 py-5 md:py-5  lg:px-[2vw] xl:px-[4vw]  bg-[#0a0f14] border-b-0.5 border-gray-50/10 flex-wrap z-20 "
                >
                <div className="flex justify-between md:px-3 lg:px-5 xl:px-40">
                    <h1 
                        className="bg-gradient-to-r from-sky-500 to-fuchsia-600 inline-block text-transparent bg-clip-text light:text-white text-lg md:text-2xl hover:cursor-pointer"
                        >
                        Ivan Armenta
                    </h1>

                    {/* Bigger screen will show links */}
                    <div className="flex align-middle">
                        <ul className="hidden md:flex md:gap-5 lg:gap-10 self-center text-lg ">
                            <NavButton label={"Home"} scrollTo={scrollToSection} section={'home'} />
                            <NavButton label={"About"} scrollTo={scrollToSection} section={'about'} />
                            <NavButton label={"Skills"} scrollTo={scrollToSection} section={'skills'} />
                            <NavButton label={"Projects"} scrollTo={scrollToSection} section={'projects'} />
                            <NavButton label={"Contact"} scrollTo={scrollToSection} section={'contact'} />
                        </ul>
                    </div>

                    {/* Icon for smaller screens */}
                    <div className="md:hidden rounded-sm pt-.5" onClick={handleNavBar}>
                        {isMenuOpen ? 
                            <Close sx={{ color: '#bcbfc2', }}></Close> :
                            <ClearAll sx={{ color: '#bcbfc2', }}></ClearAll>
                        }
                    </div>
                </div>

                <motion.div 
                    className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden pt-6`}>
                    <ul className="space-evenly">
                        <NavButton label={"Home"} scrollTo={scrollToSection} closeNav={handleNavBar} section={'home'} />
                        <NavButton label={"About"} scrollTo={scrollToSection} closeNav={handleNavBar} section={'about'} />
                        <NavButton label={"Skills"} scrollTo={scrollToSection} closeNav={handleNavBar} section={'skills'} />
                        <NavButton label={"Projects"} scrollTo={scrollToSection} closeNav={handleNavBar} section={'projects'} />
                        <NavButton label={"Contact"} scrollTo={scrollToSection} closeNav={handleNavBar} section={'contact'} />
                    </ul>
                </motion.div>
            </motion.nav>
        </>
    )
};
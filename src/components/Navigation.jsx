import { useState, React } from "react";
import { ClearAll, Close } from '@mui/icons-material';

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavBar = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const scrollToSection = (section) => {
        document.getElementById(section)?.scrollIntoView({
            behavior: 'smooth'
        });
    }

    return (
        <>
            <nav className="sticky top-0 px-5 py-5  lg:px-[2vw] xl:px-[4vw]  bg-[#0a0f14] border-b-0.5 border-gray-50/10 flex-wrap z-20 ">
                <div className="flex justify-between md:px-3 lg:px-5 xl:px-40">
                    <h1 className="bg-gradient-to-r from-sky-500 to-fuchsia-600 inline-block text-transparent bg-clip-text light:text-white text-lg md:text-2xl hover:cursor-pointer
                    
                    ">
                        Ivan Armenta
                    </h1>

                    {/* Bigger screen will show links */}
                    <div className="flex align-middle">
                        <ul className="hidden md:flex md:gap-5 lg:gap-10 self-center text-lg">
                            <li className="hover:text-sky-500 hover:cursor-pointer ease-in-out duration-500" onClick={() => scrollToSection("home")}>Home</li>
                            <li className="hover:text-sky-500 hover:cursor-pointer ease-in-out duration-500" onClick={() => scrollToSection("about")}>About</li>
                            <li className="hover:text-sky-500 hover:cursor-pointer ease-in-out duration-500" onClick={() => scrollToSection("skills")}>Skills</li>
                            <li className="hover:text-sky-500 hover:cursor-pointer ease-in-out duration-500" onClick={() => scrollToSection("projects")}>Projects</li>
                            <li className="hover:text-sky-500 hover:cursor-pointer ease-in-out duration-500" onClick={() => scrollToSection("contact")}>Contact</li>
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

                <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden pt-6`}>
                    <ul className="space-evenly">
                        <ul className="pb-5 hover:cursor-pointer ease-in-out duration-500"><a href="">Home</a></ul>
                        <ul className="pb-5 hover:cursor-pointer ease-in-out duration-500"><a href="">About</a></ul>
                        <ul className="pb-5 hover:cursor-pointer ease-in-out duration-500"><a href="">Skills</a></ul>
                        <ul className="pb-5 hover:cursor-pointer ease-in-out duration-500"><a href="">Project</a></ul>
                        <ul className="pb-2 hover:cursor-pointer ease-in-out duration-500"><a href="">About</a></ul>
                    </ul>
                </div>
            </nav>
        </>
    )
};
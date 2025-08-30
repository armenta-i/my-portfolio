import { useState, React } from "react";
import { ClearAll, Close } from '@mui/icons-material';

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavBar = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <>
            <nav className="sticky top-0  px-4 py-5  bg-[#0a0f14] border-b-0.5 border-gray-50/10 flex-wrap z-10 ">
                <div className="flex justify-between md:px-20 lg:px-40">
                    <h1 className="bg-gradient-to-r from-sky-500 to-fuchsia-600 inline-block text-transparent bg-clip-text text-lg md:text-2xl hover:cursor-pointer">
                        Ivan Armenta
                    </h1>

                    {/* Bigger screen will show links */}
                    <div className="flex align-middle">
                        <ul className="hidden md:flex md:gap-5 lg:gap-10 self-center text-lg">
                            <li className="hover:text-sky-500 hover:cursor-pointer">Home</li>
                            <li className="hover:text-sky-500 hover:cursor-pointer">About</li>
                            <li className="hover:text-sky-500 hover:cursor-pointer">Skills</li>
                            <li className="hover:text-sky-500 hover:cursor-pointer">Project</li>
                            <li className="hover:text-sky-500 hover:cursor-pointer">About</li>
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
                        <ul className="pb-5 hover:cursor-pointer"><a href="">Home</a></ul>
                        <ul className="pb-5 hover:cursor-pointer"><a href="">About</a></ul>
                        <ul className="pb-5 hover:cursor-pointer"><a href="">Skills</a></ul>
                        <ul className="pb-5 hover:cursor-pointer"><a href="">Project</a></ul>
                        <ul className="pb-2 hover:cursor-pointer"><a href="">About</a></ul>
                    </ul>
                </div>
            </nav>
        </>
    )
};
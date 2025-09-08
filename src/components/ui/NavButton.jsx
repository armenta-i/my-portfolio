// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function NavButton({ label, scrollTo, section, closeNav }) {
    return (
        <motion.a
        onClick={() => {
            scrollTo(section); 
            closeNav;
        }}
        className="hover:text-sky-500 hover:cursor-pointer pb-5 md:pb-0 block"
        initial={{ y: 0 }}
        whileHover={{ y: -3}}            // lifts the button up
        whileTap={{ y: 1 }}               // slightly press down on click
        transition={{ type: "spring", stiffness: 300, ease: "easeInOut" }}
        >
        {/* Background overlay for hover effect */}
        <motion.span
            className="absolute inset-0 rounded-lg z-0"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{ transformOrigin: "left" }}
        />

        {/* Button text */}
        <span className="relative z-10">{label}</span>
        </motion.a>
    );
}
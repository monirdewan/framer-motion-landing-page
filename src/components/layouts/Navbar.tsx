import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import {motion} from "motion/react"


const Navbar = () => {
    return (
       <motion.header className=" h-16 w-full fixed  z-[999] bg-white"
       initial={{opacity:0}}
       animate={{opacity:1,
       }}
        transition={{delay:1, duration:1}}
       >
       <nav className="mx-auto w-full max-w-[1280px] space-x-5  flex justify-between items-center h-full px-[20px]">
         <span className="text-3xl">Repaier</span>
        <ul className="space-x-5 ">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <Button><NavLink to="login">Login</NavLink></Button>
        </ul>
       </nav>
       </motion.header>
    );
};

export default Navbar;
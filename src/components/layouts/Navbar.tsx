import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";


const Navbar = () => {
    return (
       <header className=" h-16 w-full">
       <nav className="mx-auto w-full max-w-[1280px] space-x-5  flex justify-between items-center h-full px-[20px]">
         <span className="text-3xl">Repaier</span>
        <ul className="space-x-5 ">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <Button><NavLink to="login">Login</NavLink></Button>
        </ul>
       </nav>
       </header>
    );
};

export default Navbar;
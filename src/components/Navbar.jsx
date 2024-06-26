import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { BsBag } from "react-icons/bs";
import Logo from "../assets/logo.svg"
import { Link } from "react-router-dom";

const Navbar = () => {
    //estado del navbar(header)
    const [isActive, setIsActive] = useState(false);

    const { isOpen, setIsOpen } = useContext(SidebarContext);
    const {itemAmount} = useContext(CartContext)
    
    //escucha el evento
    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
        })
    })

    return (
        <header className={`${isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'} fixed w-full z-10 transition-all`}>
            <div className="container mx-auto flex items-center justify-between h-full">
            <Link to={'/'}>
                <div>
                    <img className="w-[40px]" src={Logo} alt="" />
                </div>
            </Link>
            <div  onClick={() => setIsOpen(!isOpen)}className="cursor-pointer flex relative">
                <BsBag  className="text-2xl"/>
            <div className="bg-blue-400 absolute -right-3 -top-1 text-[12px] w-[16px] h-[16px]
            text-white rounded-full flex justify-center items-center">
                {itemAmount}
            </div>
            </div>

            </div>
        </header>
    )
};

export default Navbar;

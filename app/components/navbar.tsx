"use client"
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
const [isMenuOPen, setIsMenuOpen] = useState(false)
const [isScrolled , setIsScrolled] = useState(false);
useEffect(()=>{
    const handleScroll =() =>{
        setIsScrolled(window.scrollY > 100);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
},[])

    return (
        <nav  className={`bg-[#081533] z-50 flex w-full h-22 justify-around items-center px-6 py-4 ${isScrolled ? "fixed backdrop-blur-md top-0  " : " transition-all duration-300  ease-in-out"}` }>
            <img className=" w-[44%] sm:w-40 cursor-pointer items-center" src="speectoLogo.png" alt="Specto Logo" />
           <div className="hidden lg:flex">
             <ul className="flex sm:space-x-6 md:space-x-8  md:ml-20 items-center"> 
                <li className="cursor-pointer  text-[#6A6A6A] text-nowrap sm:text-[16px] md:text-[19px]  ml-4" ><a href="/">Home</a></li>
                <li className="cursor-pointer  text-[#6A6A6A] text-nowrap sm:text-[16px] md:text-[19px]"><Link href="/">Services</Link></li>
                <li className="cursor-pointer  text-[#6A6A6A] text-nowrap sm:text-[16px] md:text-[19px]"><a href="/contact">Contact Us</a></li>
                <li className="cursor-pointer  text-[#6A6A6A] text-nowrap sm:text-[16px] md:text-[19px]"><Link href="/our-team">Our Team</Link></li>
                <li className="cursor-pointer  text-[#6A6A6A] text-nowrap sm:text-[16px] md:text-[19px] "><a href="/about-us">About Us</a></li>
            </ul>   
           </div>

           <div className="flex items-center  ml-20"> 

            {/* get started button */}
             <button className="bg-[#FFFFFF] hidden lg:flex  text-[#081533] px-5 py-3 rounded-md text-base font-bold text-center items-center cursor-pointer w-[60%]    ">Get Started</button>
            <div className="ml-5 overflow-hidden bg-[#BFDBFE] w-[20%] h-[6%] md:w-16 md:h-8 cursor-pointer  rounded-l-full rounded-r-full flex items-center justify-around">
                <div className="bg-[#FDE047] w-14 ml-1  h-5 rounded-full "></div>
                <div>

                </div>
                 {/* first could  */}
                <div className=" cloud h-3 rounded-l-full rounded-r-full w-12 relative   bg-[#FFFFFF]">
                    <div className="w-3 h-3 rounded-full  bg-[#FFFFFF] absolute -top-2 left-1 ">
                    </div>
                    <div className="w-2 h-2 rounded-full bg-[#FFFFFF] absolute -top-1 left-3.5   "></div>
                </div>
                {/* second cloud */}
                <div className=" cloud2 h-3 rounded-l-full rounded-r-full w-12 relative right-2 -bottom-4  bg-[#FFFFFF]">
                    <div className="w-3 h-3 rounded-full  bg-[#FFFFFF] absolute -top-2 left-1 ">
                    </div>
                    <div className="w-2 h-2 rounded-full bg-[#FFFFFF] absolute -top-1 left-3.5 "></div>
                </div>
            </div>
             <button onClick={()=>setIsMenuOpen(!isMenuOPen)} className="lg:hidden flex flex-col space-y-1 cursor-pointer ml-4">
                    <div className="w-6 h-1 bg-[#FFFFFF]"></div>
                    <div className="w-6 h-1 bg-[#FFFFFF]"></div>
                    <div className="w-6 h-1 bg-[#FFFFFF]"></div>
                </button>
           </div>


                {/* mobile hamsurger menu */}
               <div
        className={`
          fixed top-0 left-0 h-screen w-64
          bg-gradient-to-b from-[#0072FD] to-[#00C3FF]
          transform transition-transform duration-300
          ${isMenuOPen ? "translate-x-0" : "-translate-x-full"}
          z-50
        `}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 right-4 text-white text-xl cursor-pointer font-bold"
        >
          ✕
        </button>

        <img src="speectoLogo.png" className="w-32 mx-auto mt-10" />

        <ul className="mt-10 space-y-6 text-white text-center">
          {[
            { name: "Home", href: "/" },
            { name: "Services", href: "/" },
            { name: "Contact Us", href: "/" },
            { name: "Our Team", href: "/our-team" },
            { name: "About Us", href: "/about-us" },
          ].map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setIsMenuOpen(false)}
          className="mt-10 mx-auto block w-[80%] bg-white text-black py-2 rounded-lg font-semibold"
        >
          Get Started
        </button>
      </div>

               
        </nav>
    );
}   
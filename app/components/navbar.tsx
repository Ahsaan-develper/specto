

export default function Navbar() {
    return (
        <main  className="bg-[#081533] fixed  flex w-full h-20 justify-around items-center    px-6 py-4">
            <img className=" w-[50%] md:w-40 cursor-pointer items-center" src="speectoLogo.png" alt="Specto Logo" />
           <div className="hidden lg:flex">
             <ul className="flex space-x-8  ml-20 items-center"> 
                <li className="cursor-pointer  text-[#6A6A6A] text-nowrap text-sm md:text-[19px] ml-4" ><a href="/">Home</a></li>
                <li className="cursor-pointer  text-[#6A6A6A] text-nowrap text-sm  md:text-[19px]"><a href="/">Services</a></li>
                <li className="cursor-pointer  text-[#6A6A6A] text-nowrap text-sm  md:text-[19px]"><a href="/">Contact Us</a></li>
                <li className="cursor-pointer  text-[#6A6A6A] text-nowrap text-sm md:text-[19px]"><a href="/ ">Our Team</a></li>
                <li className="cursor-pointer  text-[#6A6A6A] text-nowrap text-sm  md:text-[19px]"><a href="/about-us">About Us</a></li>
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
             <div className="lg:hidden flex flex-col space-y-1 cursor-pointer ml-4">
                    <div className="w-6 h-1 bg-[#FFFFFF]"></div>
                    <div className="w-6 h-1 bg-[#FFFFFF]"></div>
                    <div className="w-6 h-1 bg-[#FFFFFF]"></div>
                </div>
           </div>


                {/* mobile hamsurger menu */}
         

               
        </main>
    );
}   <span>
</span>
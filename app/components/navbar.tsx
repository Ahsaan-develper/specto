

export default function Navbar() {
    return (
        <main  className="bg-[#081533]  w-full fixed  h-22 flex items-center justify-around ">
            <img className="-ml-8 w-[12.5%] cursor-pointer items-center" src="speectoLogo.png" alt="Specto Logo" />
           <div className="hidden lg:flex">
             <ul className="flex space-x-8  ml-6  ">
                <li className="cursor-pointer  text-[#6A6A6A]  text-[19px] ml-4" ><a href="/">Home</a></li>
                <li className="cursor-pointer  text-[#6A6A6A]  text-[19px]"><a href="/">Services</a></li>
                <li className="cursor-pointer  text-[#6A6A6A] text-[19px]"><a href="/">Contact Us</a></li>
                <li className="cursor-pointer  text-[#6A6A6A]  text-[19px]"><a href="/ ">Our Team</a></li>
                <li className="cursor-pointer  text-[#6A6A6A]  text-[19px]"><a href="/ ">About Us</a></li>
            </ul>
           </div>

           <div className="flex items-center  ">
             <button className="bg-[#FFFFFF] text-[#081533] px-4 py-3 rounded-l-2xl rounded-r-2xl font-bold cursor-pointer w-[60%] ml-8    ">Get Started</button>


            
            <div className="ml-6 overflow-hidden bg-[#BFDBFE] w-20 h-8 cursor-pointer  rounded-l-full rounded-r-full flex items-center justify-around">
                <div className="bg-[#FDE047] w-5 ml-2  h-5 rounded-full "></div>
                <div>

                </div>
                 {/* first could  */}
                <div className=" cloud h-[10px] rounded-l-full rounded-r-full w-7 relative   bg-[#FFFFFF]">
                    <div className="w-5 h-5 rounded-full  bg-[#FFFFFF] absolute -top-2 left-1 ">
                    </div>
                    <div className="w-[10px] h-[10px] rounded-full bg-[#FFFFFF] absolute -top-2 left-4 "></div>
                </div>
                {/* second cloud */}
                <div className=" cloud2 h-[10px] rounded-l-full rounded-r-full w-7 relative right-2 -bottom-3  bg-[#FFFFFF]">
                    <div className="w-5 h-5 rounded-full  bg-[#FFFFFF] absolute -top-2 left-1 ">
                    </div>
                    <div className="w-[10px] h-[10px] rounded-full bg-[#FFFFFF] absolute -top-2 left-4 "></div>
                </div>
            </div>
           </div>

        </main>
    );
}   <span>
</span>

export default function HomeHero (){
    return (
        <section  className="bg-[#081533] h-full w-full ">
            <img className="absolute   top-20 w-[400px] inset-0  object-cover invert" src="" alt="" />
            <div className="flex justify-between">
                
              <div className=" w-1/2">
                <h1 className="text-white uppercase  font-semibold text-4xl ">We develop <span className="bg-gradient-to-r from-[#EB4316] to-[#FB876A] bg-clip-text text-transparent "> high-performance</span> web apps</h1>
                <h2 className="uppercase bg-gradient-to-r from-[#EB4316] to-[#FB876A] bg-clip-text text-transparent  font-semibold text-4xl ">web development</h2>
                <p className="mt-4 text-[#6C757D] text-xl">We are a team of tech enthusiasts dedicated to developing world-class custom software solutions
                     while fostering a culture of creativity, inclusivity, and continuous learning.</p>
                <button className="group z-10 relative cursor-pointer hover:text-white bg-gradient-to-r from-[#EB4316] to-[#FB876A] overflow-hidden  bg-clip-text text-transparent w-40 h-12 text-[19px] font-semibold rounded-xl border-1 border-[#EB4316]">
                    Get Started
                    <span className="h-full w-0 -z-10 absolute   top-0 left-0  transition-all duration-300  bg-gradient-to-r from-[#EB4316] to-[#FB876A] group-hover:w-full "></span>
                    </button>
              </div>
              <div className="w-1/2">

              </div>
            </div>
        </section>
    );
}
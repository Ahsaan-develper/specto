import Laptop from "../services/laptop";

export default function HomeHero (){

   let text = ["we develop web apps", "We develop  mobile apps","We develop mobile apps",
       "for seamless software experiences.",
        "We excel in superior software solutions."
    ]
    let color_text = ["high-performance", "high-performance", "high-performance", "Thorough testing", "crafting"]
        let  typing = ["web development","app development","app development","testing", "digital solutions"]
        let gradient = [" from-[#EB4316] to-[#FB876A]", " from-[#EC17A3] to-[#FE71DE]", " from-[#46359D] to-[#A1B6F8]", " from-[#FF445C] to-[#FF4748]", " from-[#4B3CA2] to-[#9BADF2]"]
    return (
        <section  className="bg-[#081533] h-full w-full  py-20   relative">
  <div className="  absolute top-0
    w-[400px] h-[130px]
    bg-[url('/tech.jpg')]
    bg-contain bg-no-repeat bg-center
    mix-blend-screen"></div>    
            <div className="flex md:justify-around lg:justify-between  px-6">
                
              <div className=" w-1/2 mt-12 ">
                <h1 className="text-white uppercase  font-semibold text-4xl ">We develop <span className="bg-gradient-to-r from-[#EB4316] to-[#FB876A] bg-clip-text text-transparent "> high-performance</span> web apps</h1>
                <h2 className="uppercase bg-gradient-to-r from-[#EB4316] to-[#FB876A] bg-clip-text text-transparent  font-semibold text-4xl ">web development</h2>
                <p className="mt-2 text-[#6C757D] text-xl">We are a team of tech enthusiasts dedicated to developing world-class custom software solutions
                     while fostering a culture of creativity, inclusivity, and continuous learning.</p>
                <div className=" flex gap-x-5 items-center ">
                    <button className="group mt-12 z-10 relative cursor-pointer hover:text-white bg-gradient-to-r from-[#EB4316] to-[#FB876A] overflow-hidden  bg-clip-text text-transparent w-38 h-12 text-[19px] font-semibold rounded-xl border-1 border-[#EB4316]">
                    Get Started
                    <span className="h-full w-0 -z-10 absolute   top-0 left-0  transition-all duration-300  bg-gradient-to-r from-[#EB4316] to-[#FB876A] group-hover:w-full "></span>
                    </button>
                    <button className="cursor-pointer  flex group text-white text-[20px] ml-8 mt-10">Learn more  <svg
  className="w-6 h-6  text-white arrow duration-300 group-hover:translate-x-2 mt-2 ml-4"
  viewBox="0 0 24 24"
  fill="none"
>
  <path
    d="M5 12H19M19 12L13 6M19 12L13 18"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg></button>
                </div>
              </div>
              <div className="w-1/2 ">
                        <Laptop />
              </div>
            </div>
        </section>
    );
}
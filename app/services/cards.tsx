export default function ServicesCards (){
    const data = [{"title" : "Product/SAAS Development", "desc" :"Unveiling software needs, capturing stakeholder expectaions, and defining actionable requirements for successfull development.", "img" :"ScreenLinearIcon.svg" }, 
                {"title" : "Web App Development" , "desc" :"Accelerating development processes through automated tools, streamlined workflows, and efficient code generation.",  "img" :"RobotLinearIcon.svg"} ,
                {"title"  : "SEO Optimised Web Application", "desc" :"Crafting intuitive, user-centric interfaces that elevate user experiences and enhance digital interactions." ,  "img" :"serviceIcon1.svg"},
                {"title" : "Mobile App Development", "desc" : " Delivering high-quality software solutions to production, ensuring seamless deployment and optimal performance for end-user.",  "img" :"ProductLinearIcon.svg"} , 
                {"title" : "SEO","desc" : "Ensuring software quality through comprehensive testing, meticulous bug identification, and continous optimization.",  "img" :"checkLinearIcon.svg" }, 
                {"title" : "MVP Development" , "desc" :"Building innovative and reliable software soltions with cutting-edge technologies and for seamless development experience." ,  "img" :"CodeLinearSvg.svg"}]
   
    return (
        <section className="w-full py-20 px-8 items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4  w-full h-full ">   
                       {
                         data && data.map((item , index)=>{
                          return  <div className="cursor-pointer w-full h-full max-w-xl px-10 p-4 group hover:bg-gradient-to-r hover:text-white from-[#004CFF] to-[#00BFFF]   rounded-3xl border border-[#e8e5e8]" key={index}>
                                <div className="flex gap-4 mb-2  items-start w-full"> 
                                    <div className="bg-[#004FFF] group-hover:bg-white w-10 h-10  sm:w-12 sm:h-12 lg-w-14 lg:h-14 shrink-0 rounded-2xl flex  justify-center items-center" >
                                        <img className=" h-4 w-4   " src={item.img} alt="icon" />
                                    </div>
                                    <h2 className="text-xl wrap-break-word lg:w-96  ">{item.title}</h2>
                                </div>
                                <p className="text-xl mb-4  group-hover:text-white tracking-tight text-[#7A757D]">{item.desc}</p>
                                <button className="flex w-12 h-10  text-blue-500  rounded-xl justify-center  bg-[#bfdbfebb] group-hover:bg-white items-center gap-2">
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M5 12h14" />
                                    <path d="M13 5l7 7-7 7" />
                                </svg>
                                </button>

                          </div>
                        })
                       }
            </div>
        </section>
    )
}
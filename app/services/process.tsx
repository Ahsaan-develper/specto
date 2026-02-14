export default function Process (){
    return (
        <section className="py-20 w-full px-4  -mb-30">
            <div className="grid   w-full h-full grid-cols-1 md:grid-cols-2 md:px-20 lg:px-0 ">
                <div className="mb-20">
                    <div className="flex   items-center">
                        <span className="text-[#0072FF]">How Do We Do it.</span>
                        <span className="block bg-[#0072FF] ml-4  h-0.5 w-10"></span>
                    </div>
                    <h2 className="text-3xl font-semibold mb-4">
                        Crafting Exceptional Digital Experiences: Our Process
                    </h2>
                    <p className="w-full max-w-xl mb-10 text-[#6C758E]">We create exceptional digital experiences by understanding your business goals,
                         user requirements, and product specifications. Our process involves
                          selecting the best technology, creating user personas and journeys, developing information 
                          architecture and wireframes, and designing and launching your product.</p>
                </div>
                <div>
                    <img className="w-full max-w-xl  object-contain ml-10" src="howWeWork.webp" alt="image" />
                </div>  

                {/* process steps  */}
                <div className="md:-mt-10 sm:mt-10 lg:-mt-70">
                    {/* 1 */}
                    <div className="flex mb-8  gap-6 ">
                    <div className="relative w-20 h-10">
                 
                   <span className="absolute -top-1 -left-2 w-10 h-10 rounded-full bg-[#E5E5E5] z-10"></span>
                    <span className="absolute -bottom-1 -right-2 w-10 h-10 rounded-full bg-[#E5E5E5] z-10"></span>
                   
                    <div className="relative w-11    h-10  rounded-full bg-gradient-to-r from-[#005BFF] to-[#00B9FF] z-30"></div>
                    </div>
                        <div className="flex flex-col">
                            <h1 className="text-xl mb-2  ">Strategy & Planning</h1>
                            <p className="text-[#6C758E] text-sm">We partner with our clients to understand their business 
                                goals and objectives, then create a customized strategy that aligns with their vision.</p>
                        </div>
                    </div>
                    {/* 2 */}
                      <div className="flex mb-8  gap-6 ">
                    <div className="relative w-20 h-10">
                 
                    <span className="absolute -top-1 -left-2 w-10 h-10 rounded-full bg-[#E5E5E5] z-10"></span>
                    <span className="absolute -bottom-1 -right-0 w-10 h-10 rounded-full bg-[#E5E5E5] z-10"></span>
                   
                    <div className="relative w-11    h-10  rounded-full bg-gradient-to-r from-[#005BFF] to-[#00B9FF] z-30"></div>
                    </div>
                        <div className="flex flex-col">
                            <h1 className="text-xl mb-2">Design</h1>
                            <p className="text-[#6C758E] text-sm">Our team uses the latest UI/UX practices to create stunning,
                                 user-friendly products that capture our clients' brands.</p>
                        </div>
                    </div>
                    {/* 3 */}
                     <div className="flex mb-8  gap-6 ">
                    <div className="relative w-20 h-10">
                 
                      <span className="absolute -top-1 -left-2 w-10 h-10 rounded-full bg-[#E5E5E5] z-10"></span>
                    <span className="absolute -bottom-1 -right-0 w-10 h-10 rounded-full bg-[#E5E5E5] z-10"></span>
                   
                    <div className="relative w-11    h-10  rounded-full bg-gradient-to-r from-[#005BFF] to-[#00B9FF] z-30"></div>
                    </div>
                        <div className="flex flex-col">
                            <h1 className="text-xl mb-2  ">Development</h1>
                            <p className="text-[#6C758E] text-sm">We develop the product with the latest technologies and frameworks to
                                 ensure the best performance and scalability.</p>
                        </div>
                    </div>
                    {/* 4 */}
                     <div className="flex mb-8  gap-6 ">
                    <div className="relative w-20 h-10">
                 
                     <span className="absolute -top-1 -left-2 w-10 h-10 rounded-full bg-[#E5E5E5] z-10"></span>
                    <span className="absolute -bottom-1 -right-0 w-10 h-10 rounded-full bg-[#E5E5E5] z-10"></span>
                   
                    <div className="relative w-11    h-10  rounded-full bg-gradient-to-r from-[#005BFF] to-[#00B9FF] z-30"></div>
                    </div>
                        <div className="flex flex-col">
                            <h1 className="text-xl mb-2  ">Testing</h1>
                            <p className="text-[#6C758E] text-sm">Our products undergo rigorous testing before launch to ensure they meet the highest standards 
                                of quality and functionality.</p>
                        </div>
                    </div>
                </div>
            </div>  
        </section>
    )
}
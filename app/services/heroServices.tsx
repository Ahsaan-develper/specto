import ServiceImage from "./serviceImage";

export default function HeroServices (){
    return (
        <section className="py-0 sm:py-16 bg-[#081533] px-6 sm:px-10 w-full">
           <div className=" grid grid-cols-1 md:grid-cols-2 items-center text-white gap-12 mx-auto max-w-7xl  ">
             <div className="flex flex-col  items-center md:items-start md:text-left  w-full mx-auto md:mx-0 max-w-xl">
                <h1 className="text-3xl  sm:4xl  mb-6  font-medium">OUR<span className="bg-gradient-to-r from-[#00BBFF] to-[#004EFF] text-transparent bg-clip-text">SERVICES</span></h1>

                <p className=" sm:text-base text-base text-center md:text-left lg:tracking-wide  lg:leading-7">we offer a  comprehensive range of IT solutions to meet your business needs.
                     From Requirement Engineering, development and Product design to cloud computing 
                     and Testing, our experienced team is here to provide expert guidance and deliver 
                     innovative solutions.</p>
            </div>
            <div className="flex justify-center  ">
                <ServiceImage />    
            </div>
             <button className="cursor-pointer border-2 w-full max-w-2xl md:max-w-40 mr-96 group relative border-[#0082FF]  overflow-hidden py-2  sm:py-3 text-center font-semibold rounded-xl  ">
            <span className="z-10  relative group-hover:text-white bg-gradient-to-r  from-[#0058FF] to-[#00ABFF] text-transparent bg-clip-text font-semibold text-xl ">Contact Us</span>
            <span className="w-0 h-full  absolute  top-0 left-0  bg-gradient-to-r from-[#0058FF] to-[#00ABFF]  transition-all duration-300 group-hover:w-full"></span>
           </button>
           </div>
        </section>
    );
}
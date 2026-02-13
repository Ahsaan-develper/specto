export default function ContactHero (){
    return (
        <section className=" w-full bg-[#081533] py-4  px-8 ">
           <div className="flex md:justify-around lg:justify-between items-center">
             <h1 className="md:text-4xl   font-semibold bg-gradient-to-r from-[#00BBFF] to-[#0050FF] text-transparent bg-clip-text">CONTACT <span className="text-white">US</span></h1>
             <div className="mb-10">
                <div className=" w-14  h-14 max-w-16  max-h-16 rounded-full border-4 border-[#323232]">
                    <span></span>
                </div>
            <img className="w-full mx-w-40 h-80" src="contactUsAnimateMan.webp" alt="contact  us" />
            {/* <img src="" alt="" /> */}
             </div>
           </div>

        </section>
    );
}
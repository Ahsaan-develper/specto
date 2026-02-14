

export default function ContactHero (){
   
    return (
        <section  className=" relative w-full bg-[#081533] py-6 px-10  hidden md:block    ">
           <div className="flex md:justify-around lg:justify-between  items-center">
             <h1 className="md:text-4xl   font-semibold bg-gradient-to-r from-[#00BBFF] to-[#0050FF] text-transparent bg-clip-text">CONTACT <span className="text-white">US</span></h1>
             <div className="mb-16 mt-10 mr-10">
                <div className=" w-14 absolute top-18 overflow-hidden right-30 h-14 max-w-16  max-h-16 rounded-full border-2 border-[#323232]">
                    <div className="w-96 block h-96 relative bg-white">
                        <span className="block absolute top-4 right-87 rotate-100 w-full  max-w-4 bg-black h-0.5"></span>
                        <span className="block absolute top-4 right-85 rotate-120 w-full  max-w-6 bg-black h-0.5"></span>
                        <span className="block rotate-block absolute top-8 right-88 w-full max-w-7 bg-black h-0.5"></span>
                        </div>
                </div>
                <img className="w-96 h-60 mb-8 " src="contactUsAnimateBg.webp" alt="window" />
                <img  className="bulb-blink absolute w-60 h-44 right-20 top-34" src="contactUsAnimateBgWindow.webp" alt="window" />
            <img className=" w-full h-full max-w-96  max-h-96  absolute top-8 right-14  object-contain z-10 " src="contactUsAnimateMan.webp" alt="contact  us" />

            <img className="move-left-right absolute w-full h-full max-w-10 top-38 right-30 max-h-10" src="contactUsAnimateMessage.webp" alt="meesage" />
            <img className=" move-upward  absolute object-contain top-4 right-64 w-full h-full max-w-40 max-h-50" src="contactUsAnimatePegon.webp" alt="sparrow" />
             </div>
           </div>

        </section>
    );
}
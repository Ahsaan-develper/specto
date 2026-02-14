export default function Started() {
    return (
<main className="flex items-center flex-col justify-center px-4  py-16 w-full">
                <h1 className="font-semibold text-2xl sm:text-3xl text-[#0082FF] tracking-widest  mb-12 text-center ">Let's Get Started</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6 mb-6 max-w-5xl">
                <div className=" flex flex-col">
                    <label  className="font-semibold mb-1" >Name</label>
                    <input className=" w-full  px-4 py-3 rounded-full  border border-[#b9c7d898] focus:outline-none" type="text" placeholder="Name"/>
                </div>
                <div className="flex flex-col mb-1">
                    <label  className="font-semibold">Email</label>
                    <input className="w-full px-6 py-3 rounded-full border border-[#b9c7d898] focus:outline-none" type="text" placeholder="Email"/>
                </div>

           </div>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-5xl mb-6 gap-6">
                <div className=" flex flex-col">
                    <label  className="font-semibold mb-1" >Phone No.</label>
                    <input className="w-full px-4 py-3 rounded-full border border-[#b9c7d898] focus:outline-none" type="text" placeholder="Phone Number"/>
                </div>
                <div className="flex flex-col ">
                    <label  className="font-semibold mb-1">Subject</label>
                    <input className="w-full px-4 py-2 rounded-full border border-[#b9c7d898] focus:outline-none" type="text" placeholder="Subject"/>
                </div>

           </div>
            
           <div className="flex flex-col w-full max-w-5xl mb-8">
                <label className=" font-semibold mb-2">Your Message</label>
                <textarea className="border border-[#b9c7d898] px-4 py-2  w-full outline-none h-24 rounded-md " name="" id="" cols={30} rows={10} placeholder="Write your message..."></textarea>
           </div>
           <button className="border-2 cursor-pointer group relative border-[#0082FF]  overflow-hidden  px-10 py-3 font-semibold rounded-xl  ">
            <span className="z-10 relative group-hover:text-white bg-gradient-to-r  from-[#0058FF] to-[#00ABFF] text-transparent bg-clip-text ">Submit</span>
            <span className="w-0 h-full  absolute  top-0 left-0  bg-gradient-to-r from-[#0058FF] to-[#00ABFF]  transition-all duration-300 group-hover:w-full"></span>
           </button>
           
        </main>
    );
}
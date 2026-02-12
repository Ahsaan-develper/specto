export default function Started() {
    return (
<main className="flex items-center flex-col justify-center
">            <pre className="font-semibold text-3xl text-[#0082FF] tracking-widest  mt-15 ">Let's Get Started</pre>
            <div className="flex mt-12 gap-96 -ml-70 mb-2">
                <div className=" flex flex-col">
                    <label  className="font-semibold" >Name</label>
                    <input className=" w-[270%]  px-2 py-2 rounded-l-full rounded-r-full border-1 border-[#b9c7d898] focus:outline-none" type="text" placeholder="Name"/>
                </div>
                <div className="flex flex-col mb-2">
                    <label  className="font-semibold">Email</label>
                    <input className="w-[270%] px-2 py-2 rounded-l-full rounded-r-full border-1 border-[#b9c7d898] focus:outline-none" type="text" placeholder="Email"/>
                </div>

           </div>
            <div className="flex mt-12 gap-10 mb-2">
                <div className=" flex flex-col">
                    <label  className="font-semibold" >Phone No.</label>
                    <input className="w-[500px] px-2 py-2 rounded-l-full rounded-r-full border-1 border-[#b9c7d898] focus:outline-none" type="text" placeholder="Phone Number"/>
                </div>
                <div className="flex flex-col mb-2">
                    <label  className="font-semibold">Subject</label>
                    <input className="w-[500px] px-2 py-2 rounded-l-full rounded-r-full border-1 border-[#b9c7d898] focus:outline-none" type="text" placeholder="Subject"/>
                </div>

           </div>
            
           <div className="flex flex-col mt-8">
                <label className=" font-semibold mb-2">Your Message</label>
                <textarea className="border-1 border-[#b9c7d898] px-4 py-2  w-[1030px] outline-none h-24 rounded-md " name="" id="" cols={30} rows={10} placeholder="Write your message..."></textarea>
           </div>
           <button className="border-2 border-[#0082FF]  bg-gradient-to-r from-[#0058FF] to-[#00ABFF] text-transparent bg-clip-text  px-8 py-3 font-semibold rounded-xl mt-10  ">Submit
           </button>
           
        </main>
    );
}
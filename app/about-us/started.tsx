export default function Started() {
    return (
<main className="flex -mt-10 items-center flex-col justify-center
">            <h1 className="text-4xl  text-[#0082FF] tracking-wider   mt-20">Let's Get Started</h1>
            <div className="flex mt-12 gap-10">
                <div className=" flex flex-col">
                    <label >Name</label>
                    <input className=" w-[500px] py-2 rounded-l-full rounded-r-full border-1 border-b-gray-500" type="text" placeholder="Name"/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="">Email</label>
                    <input className=" w-[500px] py-2 rounded-l-full rounded-r-full border-1 border-gray-800" type="text" placeholder="Email"/>
                </div>

           </div>
            <div className="flex mt-12 gap-10">
                <div className=" flex flex-col">
                    <label >Phone No.</label>
                    <input className="w-[500px] py-2 rounded-l-full rounded-r-full border-1 border-gray-800" type="text" placeholder="Phone Number"/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="">Subject</label>
                    <input className="w-[500px] py-2 rounded-l-full rounded-r-full border-1 border-gray-800" type="text" placeholder="Subject"/>
                </div>

           </div>
            
           <div className="flex flex-col mt-20">
                <label className="text-xl font-semibold">Your Message</label>
                <textarea className="border-1  w-[1030px] outline-none h-24 rounded-md" name="" id="" cols={30} rows={10} placeholder="Write your message..."></textarea>
           </div>
           <button className="border-2 border-[#0082FF]  bg-gradient-to-r from-[#0058FF] to-[#00ABFF] text-transparent bg-clip-text  px-8 py-3 font-semibold rounded-xl mt-10  ">Submit
           </button>
           
        </main>
    );
}
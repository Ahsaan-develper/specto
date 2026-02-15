import AboutFooter from "../about-us/footer";
import Started from "../about-us/started";
import ContactHero from "./contactHero";

export default function Contact (){
    return (
        <section>
            <ContactHero />
          <div className="grid grid-cols-1 md:grid-cols-2 md:px-16 lg:px-6 py-10">
            <div className="order-1 md:order-2 ml-10 md:ml-0 ">
                 {/* <Started /> */}
                 <main className="flex items-center flex-col justify-center lg:px-20  py-6 w-full">
                <h1 className=" md:hidden font-semibold text-2xl sm:text-3xl text-[#0082FF] tracking-widest  mb-12 text-center ">Let's Get Started</h1>
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
            </div>
            <div className="flex flex-col order-2  md:order-1"> 
                <ul className="space-y-3  mt-6">
                    <li className="font-semibold">GetIn<span>Touch</span></li>
                    <li className="flex">
                        <span></span>
                        <p className="flex flex-col">
                            <p>71-75 Sheltoon Street, Covent</p>
                            <p>Garden, London, WC2H 9JQ</p>
                        </p>
                    </li>
                    <li className="flex">
                        <span></span>
                        <span>contactus@specto.com</span>
                    </li>
                    <li className="flex">
                        <span></span>
                        <span>+442071757733</span>
                    </li>
                </ul>
                <div className="w-full h-96 mt-10 rounded-2xl overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343005!2d-73.985107684584!3d40.758896979326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1614783926195!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Office Location"
      ></iframe>
    </div>
            </div>
          </div>
            <AboutFooter />
        </section>
    );
}
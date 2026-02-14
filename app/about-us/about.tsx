export default function About() {
  return (
    <main className="w-full bg-[#081533] px-6 md:px-8 py-12 md:py-0 ">
      {/* Left Content */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-around md:px-10 lg:px-0 items-center gap-12">
      <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 md:w-1/2">
        <h2 className=" text-2xl md:text-4xl  font-semibold text-white">
          ABOUT
          <span className="ml-3  bg-gradient-to-r from-[#0058FF] to-[#00ABFF] bg-clip-text text-transparent">
            US
          </span>
        </h2>

        <p className="text-white text-sm tracking-wide md:text-base leading-6 md:leading-7 w-full max-w-xl">
          We are keen to deliver highly innovative & technological solutions <br />
          through utilizing a rigorous development process. Our journey has taken
          us from the development of dynamic websites and mobile applications to
          the development of key enterprise solutions including.
        </p>

         <button className="border-2 cursor-pointer group relative border-[#0082FF]  overflow-hidden  px-10 py-3 font-semibold rounded-xl  ">
            <span className="z-10 relative group-hover:text-white bg-gradient-to-r  from-[#0058FF] to-[#00ABFF] text-transparent bg-clip-text ">Our Team</span>
            <span className="w-0 h-full  absolute  top-0 left-0  bg-gradient-to-r from-[#0058FF] to-[#00ABFF]  transition-all duration-300 group-hover:w-full"></span>
           </button>
      </div>

    {/* right  content*/}
      <div className=" md:w-1/2 flex justify-center   ">
        <img
          className="max-w-58 md:max-w-96 object-cover rounded-lg"
          src="aboutus.webp"
          alt="about us"
        />
      </div>
      </div>
    </main>
  );
}

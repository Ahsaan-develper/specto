export default function About() {
  return (
    <main className="flex flex-col md:flex-row justify-around items-center
      w-full h-[70vh] md:h-[63vh] bg-[#081533] px-6 md:px-16 py-12
      text-center md:text-left
    ">
      {/* Left Content */}
      <div className="flex flex-col -mt-10 items-center md:ml-0 md:items-start space-y-6 md:space-y-6   md:w-1/2">
        <h2 className=" text-2xl md:text-4xl  font-semibold text-white">
          ABOUT
          <span className="ml-4  bg-gradient-to-r from-[#0058FF] to-[#00ABFF] bg-clip-text text-transparent">
            US
          </span>
        </h2>

        <p className="text-white text-sm tracking-wide md:leading-7 w-full md:w-[80%]">
          We are keen to deliver highly innovative & technological solutions <br />
          through utilizing a rigorous development process. Our journey has taken
          us from the development of dynamic websites and mobile applications to
          the development of key enterprise solutions including.
        </p>

        <button className="border-2  border-[#00ABFF] text-nowrap px-[40%] md:px-8 py-1 md:py-3.5 rounded-xl font-semibold
          bg-gradient-to-r from-[#0058FF] to-[#00ABFF] bg-clip-text text-transparent
          hover:text-white transition outline-none 
        ">
          Our Team
        </button>
      </div>

    {/* right  content*/}
      <div className=" md:w-1/2  flex justify-center  md:mt-0 ">
        <img
          className="w-[60%] ml-4 min-w-[70%] md:w-[70%] md-[60%] lg:h-[70%]  rounded-lg"
          src="aboutus.webp"
          alt="about us"
        />
      </div>
    </main>
  );
}

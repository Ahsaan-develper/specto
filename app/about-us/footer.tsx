export default function AboutFooter() {
    return (
        <footer className="mt-10 w-full">
            <div className="flex flex-col  text-center px-4   items-center">
                <img className=" w-44 h-8 bg-black mb-8 invert" src="speectoLogo.png" alt="Specto Logo" />
            <h1 className="text-black  mb-8 text-2xl sm:text-3xl font-semibold">Subcribe To Our Newsletter</h1>
            <div className="flex flex-col sm:flex-row w-full max-w-4xl ">
                <input className="w-full  outline-1 py-2 px-4   rounded-xl sm:rounded-l-xl sm:rounded-tr-none border outline-none" type="text" placeholder="Email" />
                <button className="bg-black px-10 text-2xl py-2 rounded-r-xl text-white ">Subcribe</button>
            </div>
            </div>
            {/* pure footer */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl  px-6  md:mx-auto mt-10">
                <ul className="space-y-3 mt-6"> 
                    <li className="font-semibold">Explore</li>
                    <li>Home</li>
                    <li>Our Team</li>
                </ul>
                 <ul className="space-y-3 mt-6">
                    <li className="font-semibold">Resources</li>
                    <li>Contact</li>
                    <li>Services</li>
                </ul>
                 <ul className="space-y-3 mt-6">
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
            </div>

{/* last part of footer  */}
<div className="bg-[#E9ECEF] w-full  h-12 flex justify-center items-center mt-20">
    <p className="text-[#6C757D] text-center flex-1 px-4 leading-6">
        © 2023 Speecto Ltd is a company registered in England and Wales (Company No. 15060881)
        </p>
    </div>
        </footer>
    );
}
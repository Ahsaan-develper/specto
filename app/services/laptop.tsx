export default function Laptop(){
    return (
        <section className="flex justify-center top-40  w-full  relative items-center">
          <img className="absolute rotate-x-58 h-full rotate-58 -rotate-y-30 top-22 z-10 left-50 f-ful max-w-50    " src="laptopScreenBack.svg" alt="" />
            <img className="absolute  rotate-x-30 rotate-32 -rotate-y-40 top-28 left-38 w-full max-w-54 " src="laptopBase.webp" alt="" />
            <img className="absolute rotate-x-31 rotate-32 -rotate-y-40 top-36 left-37  w-full max-w-52 " src="laptopBaseOutline.svg" alt="" />
  
             {/* sky blue */}
          <img className="absolute lid  rotate-y-54  top-7 left-60 w-full max-w-36   " src="laptopScreenUppeback.svg" alt="" />
          <img className="absolute lid rotate-y-54  top-8   left-60  w-full max-w-35 " src="laptopScreenBack.svg" alt="" />
          {/* blue  */}
          <img className="absolute lid  rotate-y-54  top-10   left-61  w-full max-w-33" src="laptopScreen.svg" alt="" />
          {/* <code></code> */}
          <img className="absolute  rotate-y-56  top-11 left-64 w-full max-w-26" src="seondLaptopScreenText.webp" alt="" />
          <img className="absolute blink rotate-10 skew-y-4 top-36 z-20 left-55 w-full max-w-22" src="kayboardBlue5dfb.webp" alt="" />

          <div>
            <img className="absolute top-10 w-full max-w-10 left-40" src="smallCircle.webp" alt="" />
            <img className="absolute top-20 left-10 w-full max-w-10" src="smallCircle.webp" alt="" />
            <img className="absolute top-10 left-13 w-full max-w-3" src="smallCircle.webp" alt="" />
            <img className="absolute top-46 left-30 w-full max-w-3" src="smallCircle.webp" alt="" />
            <img className="absolute top-56 left-96 w-full max-w-10" src="smallCircle.webp" alt="" />
            <img className="absolute top-0 left-50 w-full max-w-3" src="smallCircle.webp" alt="" />
            <img className="absolute top-6 left-96 w-full max-w-3" src="smallCircle.webp" alt="" />
          </div>
          <div>
            <span className="absolute rounded-full left-80 bg-blue-400 h-3 w-3 "></span>
            <span className="absolute rounded-full -top-6 left-66 border-2 border-sky-400 h-4 w-4 "></span>
            <span className="absolute rounded-full -top-6 left-28 bg-blue-400   h-3 w-3 "></span>
            <span className="absolute rounded-full  left-12 bg-blue-400  h-4 w-4 "></span>
            <span className="absolute rounded-full top-50 left-12 bg-blue-400  h-4 w-4 "></span>
            <span className="absolute rounded-full top-66 left-80 bg-blue-400  h-4 w-4 "></span>
            <span className="absolute  top-76 left-72 border-4 border-sky-400 h-4 w-4 "></span>
          </div>
        </section>
    )
}



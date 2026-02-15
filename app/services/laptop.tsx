export default function Laptop(){
    return (
        <section className="flex justify-center  relative items-center">
          <img className="absolute rotate-30 rotate-x-180   top-4 left-60 w-full max-w-40" src="laptopScreen.svg" alt="" />
          <img className="absolute rotate-30 top-20 -rotate-x-180 left-40 w-full max-w-40" src="laptopScreenBack.svg" alt="" />
          <img className="absolute -rotate-30 top-36 left-44 w-full max-w-26" src="kayboardBlue5dfb.webp" alt="" />
        </section>
    )
}
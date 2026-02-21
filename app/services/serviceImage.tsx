export default function ServiceImage() {
  const mainBalls = [
    "bannerReactCircle1.webp",
    "bannerReactCircle4.webp",
    "bannerReactCircle3.webp",
    "bannerReactCircle4.webp",
  ];

  const totalDots = 24; // number of dots in orbit

  return (
    <section className="relative w-full flex justify-center py-20">
      <div className="relative w-[300px] h-[300px]">

        {/* CENTER REACT LOGO */}
        <img
          src="reactIcon2.webp"
          alt="React Logo"
          className="absolute  inset-1/2 -translate-x-1/2 -translate-y-1/2 w-26 h-26 md:w-44 md:h-44 z-10"
        />

        {/* MAIN ORBITING BALLS */}
        <div className="rotate-block  z-10 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px]">
          {mainBalls.map((src, i) => {
            const positions = [
              "top-0 left-1/2 -translate-x-1/2",
              "top-1/2 right-0 -translate-y-1/2",
              "bottom-0 left-1/2 -translate-x-1/2",
              "top-1/2 left-0 -translate-y-1/2",
            ];
            return (
              <img
                key={i}
                src={src}
                className={`absolute w-12 cursor-pointer  h-12 rounded-full border-2 border-white bg-[#0F0563] ${positions[i]}`}
              />
            );
          })}
        </div>

        {/* ORBIT DOTS */}
        <div className="absolute inset-0">
          {Array.from({ length: totalDots }).map((_, i) => {
            const angle = (i * 360) / totalDots;
            const size = i % 6 === 0 ? 8 : 4; // large dots every 6th, others small
            const color = i % 3 === 0 ? "bg-red-500" : "bg-white"; // alternate red/white
            return (
              <span
                key={i}
                className={`absolute rounded-full ${color}`}
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  top: "50%",
                  left: "50%",
                  transform: `rotate(${angle}deg) translate(110px) rotate(-${angle}deg)`,
                }}
              ></span>
            );
          })}
        </div>

      </div>
    </section>
  );
}
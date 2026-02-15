export default function TeamCards() {
  // --- Data Configuration ---
  const rawNames = [
    "Hamza Shafiq", "Muhammad Ahmad", "Muhammad Umar", "Muhammad Usman", "Uzair Butt",
    "Umair Akbar", "Uzair Aslam", "Asad Ijaz", "Muhammad Saif", "Mujtaba Asif",
    "Muhammad Jahanzaib", "Mohammad Hamza", "Ayesha", "Nimra Maqsood", "Noor Fatima"
  ];
  const rawPositions = [
    "Full Stack Engineer", "Full Stack Engineer", "Full Stack Engineer", "UI UX Designer", "Graphic Designer",
    "Senior Frontend Engineer", "UI UX Designer", "Frontend Engineer", "Backend Developer", "Frontend Engineer",
    "SEO Analyst", "Graphic Designer", "Business Development Manager", "Business Development Manager", "Human Resource Executive"
  ];
  const rawHoverText = [
    "Meet Hamza Shafiq, Speecto's composed Software Engineer. Graduating from Punjab University in 2021, he's been with Speecto for a year, appreciating its relaxed environment. A sports lover, Hamza also aspires to solve real-world problems with his own product in the future.",

    "Introducing Muhammad Ahmed - a compelling personality and a front-end engineer by profession...",
    "Introducing Muhammad Umar - a consistent high-achiever and our esteemed React Native Developer...",
    "Introducing Muhammad Usman, our quick-witted UI/UX Designer at Speecto...",
    "Introducing Uzair Butt - a versatile Graphic Designer, handling more than his expertise dictates...",
    "Introducing Umair - a dynamic Software Engineer who's been contributing significantly...",
    "Meet Uzair Aslam - a testament to the friendly atmosphere at Speecto...",
    "Introducing Asad Ijaz, our skilled Junior Front-End Engineer at Speecto...",
    "Introducing Muhammad Saif-ur-Rehman, an adept Junior Back End Developer...",
    "Mujtaba Asif, a compassionate individual and graduate from National Textile University...",
    "Muhammad Jahanzaib, our new SEO Analyst at Speecto...",
    "Introducing Mohammad Hamza Mohammad Ali, the newest member of our Speecto team...",
    "Introducing Ayesha, our new Business Development Officer at Speecto...",
    "We'd like to welcome Nimra, another addition to our Business Development team...",
    "Meet Noor Fatima, our new Human Resources Manager..."
  ];
  const rawImages = [
    "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg",
    "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg"
  ];

  // Text gradient colors to cycle through (now used for position)
  const gradients = [
    "from-purple-400 to-pink-600", "from-green-400 to-cyan-500",
    "from-yellow-400 to-orange-500", "from-red-400 to-rose-600",
    "from-blue-400 to-indigo-600", "from-teal-400 to-emerald-600"
  ];

  return (
    <main className="grid gap-8 mt-20 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-10 pb-20">
      {rawNames.map((name, i) => (
        <div key={i} className="group relative w-full h-96 overflow-hidden rounded-3xl cursor-pointer">
          
          {/* 1. Image */}
          <img
            src={rawImages[i]}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 overflow-y-auto"
          />

          {/* 2. Overlay Wrapper */}
          <div className={`
            absolute bottom-0 w-full flex flex-col p-6
            transition-all duration-500 ease-in-out
            
            /* Default: Slanted, Short, Dark BG, centered bottom */
            h-32 clip-slant bg-black/75
            justify-end text-center
            
            /* Hover: Full Height, Full Box, Blue Gradient, top‑right alignment */
            group-hover:h-full 
            group-hover:clip-full
            group-hover:bg-gradient-to-r group-hover:from-[#3071FC]/70 group-hover:to-[#30C8FC]/70
            group-hover:justify-start
            group-hover:text-left
          `}>
            
            {/* Name - solid white */}
            <h2 className="text-2xl font-bold mb-1 text-white group-hover:text-white">
              {name}
            </h2>

            {/* Position - gradient text, becomes white on hover */}
            <p className={`
              text-sm font-medium
              bg-clip-text text-transparent bg-gradient-to-r ${gradients[i % gradients.length]}
              group-hover:text-white group-hover:bg-none
              mb-2
            `}>
              {rawPositions[i]}
            </p>

            {/* Description (Hidden → Shown) */}
            <p className="hidden text-base text-white/90 group-hover:block animate-fade-in-up">
              {rawHoverText[i]}
            </p>

          </div>
        </div>
      ))}
    </main>
  );
}
export default function TeamCards() {
  let teamCards = [
    "1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg",
    "10.jpg","11.jpg","12.jpg","13.jpg","14.jpg","15.jpg"
  ];
  let name = [
    "Hamza Shafiq","Muhammad Ahmad","Muhammad Umar","Muhammad Usman","Uzair Butt",
    "Umair Akbar","Uzair Aslam","Asad Ijaz","Muhammad Saif","Mujtaba Asif",
    "Muhammad Jahanzaib","Mohammad Hamza","Ayesha","Nimra Maqsood","Noor Fatima"
  ];
  let position = [
    "Full Stack Engineer","Full Stack Engineer","Full Stack Engineer","UI UX Designer","Graphic Designer",
    "Senior Frontend Engineer","UI UX Designer","Frontend Engineer","Backend Developer","Frontend Engineer",
    "SEO Analyst","Graphic Designer","Business Development Manager","Business Development Manager","Human Resource Executive"
  ];
  let hoverText = [
    "Creative Mind","Innovator","Team Player","Design Pro","Graphic Guru",
    "React Wizard","UX Specialist","Frontend Champ","Backend Hero","UI Maestro",
    "SEO Expert","Design Ninja","Biz Growth","Sales Star","HR Champion"
  ];

  return (
    <main className="grid gap-8 mt-20 
                     grid-cols-1 
                     sm:grid-cols-2 
                     md:grid-cols-3 
                     px-10">
      {teamCards.map((img, index) => (
        <div
          key={index}
          className="relative cursor-pointer w-full h-96 overflow-hidden rounded-3xl group"
        >
          <img
            src={img}
            alt={name[index]}
            className="w-full h-full object-cover"
          />

          <div className="
            absolute bottom-0 left-0 right-0
            h-32 group-hover:h-full transition-all duration-500
             bg-[#303030]/90
            group-hover:bg-gradient-to-tr from-[#0056FFCC] to-[#00BBFF99]
            text-white p-4 flex flex-col justify-end
            clip-slant 
            group-hover:clip-full
          ">
              
            <h2 className="text-xl font-semibold group-hover:hidden">
              {name[index]}
            </h2>
            <p className="text-sm group-hover:hidden">
              {position[index]}
            </p>

            <h2 className="text-xl font-semibold hidden ">
              {hoverText[index]}
            </h2>
            <p className="text-sm hidden">
              {position[index]}
            </p>
          </div>
        </div>
      ))}
    </main>
  );
}

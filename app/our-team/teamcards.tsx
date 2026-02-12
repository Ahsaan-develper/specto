export default function TeamCards () {
    let teamCards = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg","13.jpg","14.jpg","15.jpg"]
    let name= ["Hamza Shafiq", "Muhammad Ahmad" , "Muhammad Umar", "Muhammad Usman","Uzair Butt" , "Umair Akbar" , "Uzair Aslam","Asad Ijaz", "Muhammad Saif" , "Mujtaba Asif", "Muhammad Jahanzaib", "Mohammad Hamza", "Ayesha", "Nimra Maqsood", "Noor Fatima"]
    let postion = ["Full Stack Engineer","Full Stack Engineer","Full Stack Engineer","UI UX Designer", "Graphic Designer", "Senior Frontend Engineer" , "UI UX Designer ", "Frontend Engineer", "Backend Developer", "Frontend Engineer", "SEO Analyst", "Graphic Designer", "Business Development Manager","Business Development Manager","Human Resource Executive"]

    return (
        <main className="mt-40">
          {
              <div className="w-96  rounded-3xl m-10  overflow-hidden">
                <img src="1.jpg" className="w-96 h-96"/>
                <div className="bg-[#333333]  w-full h-24 hover:h-full flex flex-col items-center ">
                    <h2 className="text-white text-xl font-medium"> Ahsaj lIjnj</h2>
                    <span>Tszhbdjshbfhdsbhrbvu</span>
                </div>
            </div>
          }
        </main>
    );
}
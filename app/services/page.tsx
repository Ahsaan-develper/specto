import AboutFooter from "../about-us/footer";
import Started from "../about-us/started";
import ServicesCards from "./cards";
import HeroServices from "./heroServices";
import Process from "./process";

export default function Services (){
    return (
        <section>
       <HeroServices />
       <ServicesCards />
       <Process />
       <Started /> 
       <AboutFooter />
        </section>
    );
}
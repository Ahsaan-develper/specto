import AboutFooter from "../about-us/footer";
import Started from "../about-us/started";
import ContactHero from "./contactHero";

export default function Contact (){
    return (
        <section>
            <ContactHero />
            <Started />
            <AboutFooter />
        </section>
    );
}
import AboutFooter from "../about-us/footer";
import Started from "../about-us/started";
import Team from "./team";
import TeamCards from "./teamcards";

export default function OurTeam (){
    return(
        <header>
            <Team />
            <TeamCards />
            <Started />
            <AboutFooter />

        </header>
    )
}
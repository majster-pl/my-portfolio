import { Container } from "react-bootstrap"

import AboutMe from "./AboutMe";
import Intro from "./Intro";
import Skills from "./Skills";
import Projects from "./Projects";

const MiddleSection = () => {


    return (
        <>
            <Intro id={"intro"} />
            <AboutMe id={"about"} />
            <Skills id={"skills"} />
            <Projects id={"projects"} />

            <div id="contact" style={{ minHeight: "30rem" }}>
                <Container>
                    <h3>contact</h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
                </Container>
            </div>
        </>
    )
}

export default MiddleSection
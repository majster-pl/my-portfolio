import { Container } from "react-bootstrap"

import AboutMe from "./AboutMe";
import Intro from "./Intro";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

const MiddleSection = ({ openAppPreview, setAppPreviewData }) => {


    return (
        <>
            <Intro id={"intro"} />
            <AboutMe id={"about"} />
            <Skills id={"skills"} />
            <Projects id={"projects"} openAppPreview={openAppPreview} setAppPreviewData={setAppPreviewData} />
            <Contact id="contact"/>
        </>
    )
}

export default MiddleSection